import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  trackName: string = 'open Source';
  product: IProduct = { id: '1', name: 'Book', price: 400, quantity: 20 };
  getOffer() {
    this.product = { ...this.product, price: 200 };
  }
}
