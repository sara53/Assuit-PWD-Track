import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  currentDate: Date = new Date();
  @ViewChild('myh3') h3!: ElementRef;

  previousPrice!: number;
  constructor() {}
  ngOnDestroy(): void {
    // Routing
    console.log('OnDestroy');
  }

  @Input() product!: IProduct;

  @Input() trackName!: string;

  ngOnInit(): void {
    console.log('OnInit');
    // code logic
    // send request to api
    // emit send render
  }
  // Elemnt

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    // log after prop with @Input
    if (!changes['product'].firstChange) {
      this.previousPrice = changes['product'].previousValue.price;
    }
  }

  ngAfterViewInit(): void {
    console.log('viewInit');
    //console.log(this.h3.nativeElement.textContent);
    // console.log('@viewInit', this.h3);
  }
  ngAfterContentInit(): void {
    console.log('After View Content');
  }
}
