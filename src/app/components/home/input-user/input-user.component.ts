import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { StoredDataService } from '../../../stored-data.service';

@Component({
  selector: 'app-input-user',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './input-user.component.html',
  styleUrl: './input-user.component.css',
})
export class InputUserComponent {
  constructor() {
    //Adding initial data if there is no data in local storage

    if (typeof window !== 'undefined' && localStorage) {
      const storedData = localStorage.getItem('userData');
      let userDataArray: userDataType[] = [];
      if (!storedData) {
        userDataArray.push(
          {
            id: 1,
            name: 'John Doe',
            workout: [
              { type: 'Running', minutes: 30 },
              { type: 'Cycling', minutes: 45 },
            ],
          },
          {
            id: 2,
            name: 'Jane Smith',
            workout: [
              { type: 'Swimming', minutes: 60 },
              { type: 'Running', minutes: 20 },
            ],
          },
          {
            id: 3,
            name: 'Mike Johnson',
            workout: [
              { type: 'Yoga', minutes: 50 },
              { type: 'Cycling', minutes: 40 },
            ],
          }
        );

        localStorage.setItem('userData', JSON.stringify(userDataArray));
      }
    }
  }

  registerUser(userForm: NgForm) {
    //Retrieve the Previous Data
    const storedData = localStorage.getItem('userData');

    //Create a array to store the parsed data
    let userDataArray: userDataType[] = [];

    let userExist = false;

    let index = 1;

    if (storedData) {
      userDataArray = JSON.parse(storedData);
      userDataArray.forEach((item) => {
        if (item.name.toLowerCase() === userForm.value.name.toLowerCase()) {
          item.workout.push({
            type: userForm.value.workoutType,
            minutes: userForm.value.workoutMinutes,
          });
          userExist = true;
        }
        index++;
      });

      //User doesnot exist
      if (!userExist) {
        userDataArray.push({
          id: index,
          name: userForm.value.name,
          workout: [
            {
              type: userForm.value.workoutType,
              minutes: userForm.value.workoutMinutes,
            },
          ],
        });
      }
    } else {
      // If there is nothing in localstorage
      userDataArray.push({
        id: index,
        name: userForm.value.name,
        workout: [
          {
            type: userForm.value.workoutType,
            minutes: userForm.value.workoutMinutes,
          },
        ],
      });
    }

    //store the data in localStorage
    localStorage.setItem('userData', JSON.stringify(userDataArray));

    //reset the form after submitting
    userForm.reset();
  }
}

interface userDataType {
  id: number;
  name: string;
  workout: { type: string; minutes: number }[];
}
