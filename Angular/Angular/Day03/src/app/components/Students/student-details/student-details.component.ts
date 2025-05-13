import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  @Input() studentData!: {
    id: number;
    name: string;
    address: string;
    age: number;
  };
}
