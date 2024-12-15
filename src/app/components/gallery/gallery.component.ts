import { Component, Output, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule, ModalComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  newsLetterText: string =
    'Stay updated with the latest deals, new arrivals, and exclusive offers from Ammunation. Subscribe to our newsletter and never miss out!';
  btnColor: string = 'btn-danger';
  cardBtnText: string = 'Shop now';

  //featured guns data
  featuredGuns = [
    {
      imageUrl: './glock-19x.jpg',
      gunName: 'Glock 19x Coyote Finish 9mm',
      gunPrice: '$400.00',
    },
    {
      imageUrl: '/1911.jpg',
      gunName: 'M1911 Rock Island GI .45 ACP',
      gunPrice: '$19.99',
    },
    {
      imageUrl: '/sig-sauer-p365.jpg',
      gunName: 'Sig Sauer P365-AXG 9mm',
      gunPrice: '$19.99',
    },
  ];

  emailInput: string = '';
  isSubscriptionModalVisible: boolean = false;
  subscriptionModalText: any = '';
  subscriptionModalWidth: string = '300';
  subscriptionModalHeight: string = '200';

  //dom sanitizer to allow for the strong tag around the emailInput
  constructor(
    private sanitizer: DomSanitizer,
    private cartService: CartService,
    private router: Router
  ) {}
  //cartService constructor to subscribe to the cart service

  handleSubscription() {
    //function to toggle the modal component's visibility this shows the user's inputted email from the newsletter
    const emailElement = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    if (this.emailInput) {
      this.subscriptionModalText = this.sanitizer.bypassSecurityTrustHtml(
        `We've sent an email to <strong>${this.emailInput}</strong>. Please check your inbox to confirm your subscription.`
      );
      this.isSubscriptionModalVisible = true;
      setTimeout(() => {
        //sets the modal's visibility to false after 2 seconds
        this.isSubscriptionModalVisible = false;
      }, 2000);
      emailElement.value = '';
    }
  }

  notifyCartIncrement() {
    //utilizes the cartService update method to increment the items inside the cart
    this.cartService.updateCartCount();
  }

  redirectToShop() {
    //redirects user to handguns route
    this.router.navigateByUrl('/firearms/handguns');
  }
}
