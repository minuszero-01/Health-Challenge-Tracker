import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  //Sending this event to show data component for search logic
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.text);
  }

  text = '';

  onInputChange(event: any) {
    this.text = event.target.value;
  }
}
