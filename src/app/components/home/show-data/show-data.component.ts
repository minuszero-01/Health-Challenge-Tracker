import { Component, AfterViewInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';
import { StoredDataService } from '../../../stored-data.service';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    SearchComponent,
    FilterComponent,
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent implements AfterViewInit {
  displayColumns: string[] = [
    'id',
    'name',
    'workouts',
    'totalWorkout',
    'totalWorkoutMinutes',
  ];
  data: tableType[] = [];
  dataSource: MatTableDataSource<tableType>;
  originalData: tableType[] = [];

  // Using Service
  storedData1 = inject(StoredDataService);

  //Handling Local Storage as initialing it was accessing before components is fully rendered
  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      const storedData = this.storedData1.storedData;

      // Adding Combined Data for Table.
      this.originalData = storedData ? JSON.parse(storedData) : [];

      this.originalData.forEach((item) => {
        item.noOfWorkout = item.workout.length;
        item.totalMinutes = 0;
        item.workout.forEach((workoutMin) => {
          item.totalMinutes += Number(workoutMin.minutes);
        });
      });

      this.data = this.originalData; // Copy of Original Data used in table
    } else {
      this.data = [];
    }
    this.dataSource = new MatTableDataSource<tableType>(this.data);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addfunction() {
    console.log(this.data);
  }

  onSearch(search: string) {
    console.log(search);
    this.data = this.originalData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    this.dataSource.data = this.data;
  }

  onFilter(filter: string) {
    const filteredData = this.originalData
      .map((item) => ({
        ...item,
        workout: item.workout.filter((workout) =>
          workout.type.toLowerCase().includes(filter.toLowerCase())
        ),
      }))
      .filter((item) => item.workout.length > 0);

    filteredData.forEach((item) => {
      item.noOfWorkout = item.workout.length;
      item.totalMinutes = 0;
      item.workout.forEach((workoutMin) => {
        item.totalMinutes += Number(workoutMin.minutes);
      });
    });
    this.dataSource.data = filteredData;
    console.log(filteredData);
  }
}

export interface tableType {
  id: number;
  name: string;
  workout: { type: string; minutes: number }[];
  noOfWorkout: number;
  totalMinutes: number;
}
