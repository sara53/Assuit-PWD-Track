import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { CommonModule } from '@angular/common';
import { DynamicProductService } from '../../services/dynamic-product.service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;

  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: DynamicProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
    });
  }
}
