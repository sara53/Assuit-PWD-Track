import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // student: { name: string; age: string } = {
  //   name: '',
  //   age: '',
  // };

  // saveStudentData() {
  //   console.log(this.student);
  // }
  execute(h1: any) {
    console.log(h1.textContent);
  }

  getInputData(value: string) {
    console.log(value);
  }
}
