import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way-binding',
  imports: [],
  templateUrl: './test-one-way-binding.component.html',
  styleUrl: './test-one-way-binding.component.css',
})
export class TestOneWayBindingComponent {
  imgSrc1: string = '1.jpg';

  imgSrc2: string = '3.jpg';

  pet: string = 'hello';
  // trackName: string = 'PD';
  // flag: boolean = true;

  // student!: { id: number; name: string; age: number };

  // user: { id: number; password: string } | undefined = {
  //   id: 1,
  //   password: 'HAMFKF@#$$',
  // };

  // employee?: { id: number; name: string };
}
