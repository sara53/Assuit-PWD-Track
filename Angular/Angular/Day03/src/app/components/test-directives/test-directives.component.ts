import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  imports: [CommonModule],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css',
})
export class TestDirectivesComponent {
  flag: boolean = false;
  name: string = 'ali';

  toggle() {
    this.flag = !this.flag;
  }
}
