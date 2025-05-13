import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-products',
  imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Output() onAddProductToLogin = new EventEmitter<number>();
  count: number = 0;
  getProductCount(data: number) {
    this.count = data;
    this.onAddProductToLogin.emit(this.count);
  }
}
