import { Component, Input, OnInit } from '@angular/core';

interface projectCarousel {
  imageSrc: string;
  title: string,
  description: string,
  duration: string,
  softwareStack: string,
  link: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @Input() projects: projectCarousel[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void { }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextSlide();
    }, this.slideInterval)
  }
  onNextSlide(): void {
    if (this.selectedIndex === this.projects.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  // myFunction() {
  //   if(this.autoSlide) {
  //     this.autoSlideImages();
  //   }
  // }
}
