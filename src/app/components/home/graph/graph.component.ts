import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ChartModule, CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent {
  basicData: any;

  basicOptions: any;
  originalData: tableType[] = [];

  newLabel: any = [];
  newDataMinutes: any = [];

  //Handling Local Storage as initialing it was accessing before components is fully rendered
  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      const storedData = localStorage.getItem('userData');

      // Adding Combined Data for Table.
      this.originalData = storedData ? JSON.parse(storedData) : [];
    }
  }

  getName(event: any) {
    const filteredData = this.originalData.filter((x) => {
      return x.name === event.target.value; // it returns true or false
    });

    console.log(filteredData);

    this.newLabel = filteredData.map((item) => item.workout.map((x) => x.type));
    this.newDataMinutes = filteredData.map((item) =>
      item.workout.map((x) => x.minutes)
    );

    this.basicData = {
      labels: this.newLabel[0], // Workouts
      datasets: [
        {
          label: ['Minutes'], // Minutes
          data: this.newDataMinutes[0], // Workout Minutes
          backgroundColor: ['rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#000000',
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#000000',
          },
        },
        x: {
          ticks: {
            color: '#000000',
          },
        },
      },
    };
  }
}
export interface tableType {
  name: string;
  workout: { type: string; minutes: number }[];
  noOfWorkout: number;
  totalMinutes: number;
}
