import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  updateCartCount() {
    const currentCount = this.cartCountSource.value;
    this.cartCountSource.next(currentCount + 1);
  }
}
