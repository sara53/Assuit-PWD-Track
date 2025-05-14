import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  productList: any;
  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Pen',
        price: 200,
        quantity: 300,
      },
      {
        id: 2,
        name: 'Watch',
        price: 500,
        quantity: 100,
      },
      {
        id: 3,
        name: 'Book',
        price: 60,
        quantity: 800,
      },
      {
        id: 4,
        name: 'Phone',
        price: 600,
        quantity: 400,
      },
    ];
  }

  getAllProducts() {
    return this.productList;
  }

  addNewProduct(product: any) {
    this.productList.push(product);
  }
  deleteProduct(productId: any) {
    // filter
  }
  getProductById(productId: any) {
    return this.productList.find((product: any) => product.id == productId);
  }
}
