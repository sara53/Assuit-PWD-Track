import { Component } from '@angular/core';

import { HeaderComponent } from './components/Header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/myFooter/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SliderComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first';
}
