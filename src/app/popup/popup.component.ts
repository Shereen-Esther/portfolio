import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Shereen Esther Jubal.pdf'; 
    link.download = 'Shereen_Jubal_Resume.pdf'; 
    link.click();
  }
  @Output() closePopup = new EventEmitter<void>();

  public close(): void {
    this.closePopup.emit();
  }

  public noClose(): void {

  }
}
