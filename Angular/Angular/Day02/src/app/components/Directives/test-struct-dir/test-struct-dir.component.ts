import { Component } from '@angular/core';
import { TestTwoWayComponent } from '../../TwoWayBinding/test-two-way.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-struct-dir',
  imports: [TestTwoWayComponent, CommonModule],
  templateUrl: './test-struct-dir.component.html',
  styleUrl: './test-struct-dir.component.css',
})
export class TestStructDirComponent {
  flag: boolean = false;
  color: string = 'green';
  names: string[] = ['Mona', 'ali', 'Ahmed'];

  movies: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Frozen I',
    },
    {
      id: 2,
      name: 'Frozen II',
    },
    {
      id: 3,
      name: 'Conan',
    },
    {
      id: 4,
      name: 'Hunter X Hunter',
    },
  ];

  toggle() {
    this.flag = !this.flag;
  }
}
// 16 -- *ngFor *ngIf * ngSwitch
// 17 -- control flow @for @if @switch
//18 19 control flow
