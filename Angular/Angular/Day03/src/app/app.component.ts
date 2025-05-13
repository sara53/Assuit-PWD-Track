import { Component } from '@angular/core';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { ContentComponent } from './components/content/content.component';
import { StudentsComponent } from './components/Students/students.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  imports: [
    TestDirectivesComponent,
    ContentComponent,
    StudentsComponent,
    LoginComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  organizationName: string = '';
  count: number = 0;
  trackName: string = 'Open Source';

  getData(data: string) {
    this.organizationName = data;
  }
  addProductToApp(data: number) {
    this.count = data;
  }
}
