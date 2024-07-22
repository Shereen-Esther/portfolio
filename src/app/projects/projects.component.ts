import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      imageSrc: '../../assets/projects/CC.png',
      title: 'Credit Card fraud Detection using Random Forest and DASK',
      description: 'Developed a credit card fraud detection system using a Random Forest algorithm to identify suspicious transactions. Utilized the DASK library for distributed computing to handle large datasets efficiently. Software Stack: Deep Learning (Random forest Algorithm), DASK, Python, scikit-learn, NumPy.',
      duration: '',
      softwareStack: '',
      link: ''
    },
    {
      imageSrc: '../../assets/projects/Blood.png',
      title: 'Blood Donation Website',
      description: '',
      duration: '',
      softwareStack: '',
      link: ''
    },
    {
      imageSrc: '../../assets/projects/Eye.png',
      title: 'Eye Disease Classification using CNN',
      description: 'Upgraded an image processing app using deep learning to predict Diabetic Retinopathy, Glaucoma, or Cataract from eye scans with 96% accuracy. Used Python3, Jupyter Notebook, and Git.',
      duration: '',
      softwareStack: '',
      link: ''
    },
    {
      imageSrc: '../../assets/projects/Reimbursement.png',
      title: 'Reimbursement Application',
      description: '',
      duration: '',
      softwareStack: '',
      link: ''
    },
    {
      imageSrc: '../../assets/projects/Recipe.png',
      title: 'Mini Chefs - A Beginner Recipe Application',
      description: 'Developed a recipe web app with Angular 11, featuring CRUD operations, search, categorization, and liking. Implemented real-time data sync and user authentication with Firebase for security. Used Angular 10, NodeJS, Firebase, and Git.',
      duration: '',
      softwareStack: '',
      link: ''
    },
    {
      imageSrc: '../../assets/projects/T9.png',
      title: 'T9 Keyboard',
      description: '',
      duration: '',
      softwareStack: '',
      link: ''
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