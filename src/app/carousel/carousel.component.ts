import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    // if(this.autoSlide) {
    //   this.autoSlideImages();
    // }
  }
  temp(): void {
    if(this.autoSlide) {
        this.autoSlideImages();
    }
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextSlide();
    },this.slideInterval)
  }
  onNextSlide(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

  selectImage(index:number): void {
    this.selectedIndex = index;
  }
}
