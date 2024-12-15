import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-bootstrap';
  emailInput: string = '';
  isSubscriptionModalVisible: boolean = false;
  subscriptionModalText: any = '';
  subscriptionModalWidth: string = '300';
  subscriptionModalHeight: string = '200';
  cartItemCount: number = 0; //cartItemCount

  constructor(private cartService: CartService) {}

  //resolves the value of count from the cartService to this.cartItemCount by subscription
  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }
  // increments the value of cartItemCount everytime a button is clicked
  incrementCount() {
    console.log('app!');
    this.cartItemCount++;
  }

  //removes the show class from the nav-links to close the hamburger menu automatically after selecting a link
  collapseNavbar() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}
