import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class DynamicProductService {
  baseUrl: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
  }

  addProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product);
  }

  editProduct(productId: string, product: any) {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
