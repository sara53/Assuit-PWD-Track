import { Component } from '@angular/core';
import { TestOneWayBindingComponent } from './components/oneWayBinding/test-one-way-binding.component';
import { TestTwoWayComponent } from './components/TwoWayBinding/test-two-way.component';
import { LoginComponent } from './components/login/login.component';
import { TestStructDirComponent } from './components/Directives/test-struct-dir/test-struct-dir.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    TestOneWayBindingComponent,
    TestTwoWayComponent,
    LoginComponent,
    TestStructDirComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day02';
}
