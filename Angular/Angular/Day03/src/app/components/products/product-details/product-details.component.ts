import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  numberOfProducts: number = 0;

  @Output() onAddProduct = new EventEmitter<number>();

  addProduct() {
    this.numberOfProducts++;
    this.onAddProduct.emit(this.numberOfProducts);
  }
}
