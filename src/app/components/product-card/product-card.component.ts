import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  //utilized output and Event emitter for the product card to emit an event to its parent component once its button is clicked
  @Output() cardButtonClicked = new EventEmitter<void>();
  //utilized input decorators to dynamically modify the product card's content and styling according to the context to its parent component
  @Input() imgUrl: string = '';
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
  @Input() btnText: string = '';
  @Input() btnStyle: string = '';
  @Input() link: string = '';
  @Input() cardImageWidth: string = '';
  @Input() cardImageHeight: string = '';

  handleButtonClick() {
    this.cardButtonClicked.emit(); //event emission
    console.log('card!');
  }
}
