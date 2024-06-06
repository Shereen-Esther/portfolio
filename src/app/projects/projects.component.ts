import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  images = [
    {
      imageSrc: '../../assets/bg_image_3.png',
      imageAlt: 'no'
    },
    {
      imageSrc: '../../assets/bg_image_4.png',
      imageAlt: 'no'
    },
    {
      imageSrc: '../../assets/bg_image_5.png',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/bg_image_6.jpeg',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/bg_image_5.jpeg',
      imageAlt: ''
    }
  ];
}
