import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shereen-portfolio';
  scrollTop = 0;
  hideNav = false;

  // onScroll(event) {
  //   this.hideNav = this.scrollTop < event.target.scrollTop;
  //   this.scrollTop = event.target.scrollTop;
  // }
}
