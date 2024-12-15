import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-rifles',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, ModalComponent],
  templateUrl: './rifles.component.html',
  styleUrl: './rifles.component.css',
})
//rifles data
export class RiflesComponent {
  rifles = [
    {
      imageUrl: './galil-ace (1).png',
      gunName: 'Galil Ace 5.56',
      gunPrice: '$400.00',
    },
    {
      imageUrl: '/ak-74m (1).png',
      gunName: 'AK-74 M 5.45',
      gunPrice: '$200.00',
    },
    {
      imageUrl: '/bushmaster.png',
      gunName: 'Bushmaster AR-15 5.56 ',
      gunPrice: '$19.99',
    },
  ];

  btnColor: string = 'btn-danger';
  rifleBtnText: string = 'Add to Cart';
  title: string = 'Rifles';
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
