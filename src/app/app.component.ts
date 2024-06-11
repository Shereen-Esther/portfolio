import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'shereen-portfolio';
  scrollTop = 0;
  hideNav = false;
 
  // onScroll(event) {
  //   this.hideNav = this.scrollTop < event.target.scrollTop;
  //   this.scrollTop = event.target.scrollTop;
  // }
}
