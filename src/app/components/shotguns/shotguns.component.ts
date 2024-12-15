import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-shotguns',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, ModalComponent],
  templateUrl: './shotguns.component.html',
  styleUrl: './shotguns.component.css',
})
export class ShotgunsComponent {
  //shotgun data
  shotguns = [
    {
      imageUrl: './mossberg-500.jpg',
      gunName: 'Mossberg 500 12 Gauge',
      gunPrice: '$400.00',
    },
    {
      imageUrl: './benelli.jpg',
      gunName: 'Benelli M4 12 Gauge',
      gunPrice: '$200.00',
    },
    {
      imageUrl: '/dp12.jpg',
      gunName: 'DP-12 Double Barrel',
      gunPrice: '$19.99',
    },
  ];

  btnColor: string = 'btn-danger';
  shotgunBtnText: string = 'Add to Cart';
  title: string = 'Shotguns';
  isPurchaseModalVisible: boolean = false;
  confirmPurchaseModalText: string = 'Item added to cart';
  modalFW: string = 'bold';
  modalWidth: string = '300';
  modalHeight: string = '100';

  constructor(private cartService: CartService) {}
  //cart service constructor to access the cart service once a buttton is clicked

  //makes the modal visible once the add to cart button is clicked
  handlePurchase() {
    this.isPurchaseModalVisible = true;
    setTimeout(() => {
      this.isPurchaseModalVisible = false;
    }, 2000);
  }
  //updates the cart count in the cart service. also called when the add to cart button is clicked
  incrementCartItems() {
    this.cartService.updateCartCount();
  }
}
