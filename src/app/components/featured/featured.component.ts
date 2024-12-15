import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {

  featuredHeading: String = 'The glock just got better. The new Glock 44.';
  featuredSubHeading: String = 'The Glock 44 in .22LR offers legendary reliability in a compact, lightweight design. With minimal recoil and affordable ammo, it’s perfect for training, plinking, and range days, all while maintaining the feel of larger-caliber Glocks.';

}
