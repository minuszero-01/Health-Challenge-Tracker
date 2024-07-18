import { Component } from '@angular/core';
import { InputUserComponent } from './input-user/input-user.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { GraphComponent } from './graph/graph.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputUserComponent, ShowDataComponent, GraphComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
