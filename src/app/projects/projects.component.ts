import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  images = [
    {
      imageSrc: '../../assets/projects/T9.png',
      imageAlt: 'no'
    },
    {
      imageSrc: '../../assets/projects/Recipe.png',
      imageAlt: 'no'
    },
    {
      imageSrc: '../../assets/projects/Reimbursement.png',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/projects/Eye.png',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/projects/Blood.png',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/projects/CC.png',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/projects/E-commerce.png',
      imageAlt: ''
    }
  ];
  x = 0;
  myFunction() {
    this.x += 1;
    // document.body.get
  }
}

    // if(this.autoSlide) {
    //   this.autoSlideImages();
    // }
    // document.body.style.backgroundColor = "red";