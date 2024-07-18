import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatSelectModule, MatSelectModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() filter = new EventEmitter<string>();

  selectedWorkout: string = '';
  onWorkoutChange(event: any) {
    console.log(event.value);
    this.filter.emit(event.value);
  }
}
