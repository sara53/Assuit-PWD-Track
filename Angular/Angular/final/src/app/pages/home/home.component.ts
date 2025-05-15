import { Component, OnDestroy, OnInit } from '@angular/core';
import { PromitionsService } from '../../services/promitions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentOffer: string = '';
  constructor(private promotions: PromitionsService) {}

  mySubscription!: Subscription;
  ngOnInit(): void {
    this.mySubscription = this.promotions.getCurrentAd().subscribe({
      next: (response) => {
        console.log(response);
        this.currentOffer = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
