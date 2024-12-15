import { Component, EventEmitter, Output } from '@angular/core';
import { FeaturedComponent } from '../featured/featured.component';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Output() incrementCartCountHome = new EventEmitter<void>();

  emitCountIncrement() {
    this.incrementCartCountHome.emit();
  }
}
