import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild(CarouselComponent)
  carouselComponent!: CarouselComponent;
  ngOnInit(): void {
    this.carouselComponent.temp();
  }
  title = 'shereen-portfolio';
  scrollTop = 0;
  hideNav = false;
 
  ngAfterViewInit(): void {
    // if(this.autoSlide) {
    //   this.autoSlideImages();
    // }
  }
  // onScroll(event) {
  //   this.hideNav = this.scrollTop < event.target.scrollTop;
  //   this.scrollTop = event.target.scrollTop;
  // }
}
