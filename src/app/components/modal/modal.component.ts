import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isModalVisible: boolean = false;
  @Input() modalText: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() textFontWeight: string = '';
}
