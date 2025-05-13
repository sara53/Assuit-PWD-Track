import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() myEvent = new EventEmitter<string>();

  @Input() count!: number;
  orgName: string = 'ITI';
  constructor() {
    console.log('1-Ctor');
  }
  ngOnDestroy(): void {
    // remove --- remove -- routing-- -- Project
    console.log('onDestroy');
  }
  ngOnInit(): void {
    this.myEvent.emit(this.orgName);
  }
}
