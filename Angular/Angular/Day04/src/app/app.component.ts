import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Day04';
}
