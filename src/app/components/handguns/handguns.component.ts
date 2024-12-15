import { Component, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { Output } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-handguns',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, ModalComponent],
  templateUrl: './handguns.component.html',
  styleUrl: './handguns.component.css',
})
export class HandgunsComponent {
  handguns = [
    {
      imageUrl: './walter-ppk.jpg',
      gunName: 'Walter PPK .22',
      gunPrice: '$400.00',
    },
    {
      imageUrl: '/glock.jpg',
      gunName: 'Glock 19 Gen 5 9mm ',
      gunPrice: '$200.00',
    },
    {
      imageUrl: '/sig-sauer-p365.jpg',
      gunName: 'Sig Sauer P365-AXG Legion 9mm',
      gunPrice: '$19.99',
    },
  ];

  isPurchaseModalVisible: boolean = false;
  btnColor: string = 'btn-danger';
  handGunsBtnText: string = 'Add to Cart';
  title: string = 'Handguns';
  confirmPurchaseModalText: string = 'Item added to cart';
  modalWidth: string = '300';
  modalHeight: string = '100';
  modalFW: string = 'bold';

  constructor(private cartService: CartService) {}

  handlePurchase() {
    this.isPurchaseModalVisible = true;
    setTimeout(() => {
      this.isPurchaseModalVisible = false;
    }, 3000);
  }

  incrementCartItems() {
    this.cartService.updateCartCount();
  }
}
