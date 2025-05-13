import { Component } from '@angular/core';
import { StudentDetailsComponent } from './student-details/student-details.component';

@Component({
  selector: 'app-students',
  imports: [StudentDetailsComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students: { id: number; name: string; address: string; age: number }[] = [];

  constructor() {
    this.students = [
      {
        id: 1,
        name: 'Hoda',
        address: 'Assuit',
        age: 20,
      },
      {
        id: 2,
        name: 'Alaa',
        address: 'Alex',
        age: 22,
      },
    ];
  }
}
