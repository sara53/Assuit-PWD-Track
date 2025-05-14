import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productServices: StaticProductService) {}
  ngOnInit(): void {
    this.products = this.productServices.getAllProducts();
  }
}
