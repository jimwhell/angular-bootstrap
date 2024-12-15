import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ModalComponent, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  address: String = '411 W 8th St. Odessa, TX 79761';
  emailInput: string = '';
  isSubscriptionModalVisible: boolean = false;
  subscriptionModalText: any = '';
  subscriptionModalWidth: string = '300';
  subscriptionModalHeight: string = '200';

  constructor(private sanitizer: DomSanitizer) {}

  handleSubscription() {
    //function to toggle the modal component's visibility this shows the user's inputted email from the newsletter
    const emailElement = document.querySelector(
      '#email-newsletter'
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
}
