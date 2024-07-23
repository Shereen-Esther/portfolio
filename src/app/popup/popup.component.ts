import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  public close(): void {
    this.closePopup.emit();
  }
}
