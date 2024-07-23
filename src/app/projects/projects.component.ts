import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      imageSrc: '../../assets/projects/University.png',
      title: 'College Management System',
      description: 'A streamlined application for managing university operations, featuring a home page, department management, and student details. It enables administrators to view and update departments and student information, providing a user-friendly interface for efficient management of university resources.',
      duration: 'July 2024',
      softwareStack: 'React.js, Django (2 API end points), AWS S3 (frontend deployment), AWS EC2 (backend deployment), AWS CloudFront CDN, Custom VPC, Git',
      link: 'https://github.com/Shereen-Esther/College-Management-Website'
    },
    {
      imageSrc: '../../assets/projects/Jokes.png',
      title: 'Jokes Application',
      description: 'A Jokes Application is a fun and interactive app that delivers random jokes to users. It features a user-friendly interface for browsing jokes, with options to refresh and view new jokes. Perfect for lifting spirits and sharing laughs!',
      duration: 'June 2024',
      softwareStack: 'C#, ASP.NET core, HTML, CSS3, JavaScript, Visual Studio, Git',
      link: 'https://github.com/Shereen-Esther/Jokes-Application'
    },
    {
      imageSrc: '../../assets/projects/CC.png',
      title: 'Credit Card fraud Detection using Random Forest and DASK',
      description: 'This project focuses on detecting credit card fraud by leveraging the DASK library for scalable data processing. Utilizing machine learning algorithms, the system analyzes transaction patterns to identify potential fraudulent activities in real-time. DASK enables efficient handling of large datasets, ensuring timely and accurate fraud detection.',
      duration: 'December 2023',
      softwareStack: 'Deep Learning (Random forest Algorithm), DASK Library, Python, scikit-learn, NumPy, Git',
      link: 'https://github.com/Shereen-Esther/Credit-card-fraud-detection-using-Random-Forest-and-DASK'
    },
    {
      imageSrc: '../../assets/projects/Blood.avif',
      title: 'Blood Donation Website',
      description: 'A user-friendly platform connecting blood donors with recipients in need. The website allows donors to register and schedule donations, while recipients can request specific blood types. Features include a donor and recipient database, appointment scheduling, blood bank location finder, and real-time notifications. The site aims to streamline the donation process, saving lives through efficient and timely blood matching.',
      duration: 'April 2023',
      softwareStack: 'Python3, HTML, CSS3, MySQL, Git',
      link: 'https://github.com/WSU-DGscheidle/spring23_project-Team_6-Nucleus'
    },
    {
      imageSrc: '../../assets/projects/Eye.png',
      title: 'Eye Disease Classification using CNN',
      description: 'This project focuses on classifying eye diseases using Convolutional Neural Networks (CNN). By leveraging deep learning techniques, the model can accurately identify and differentiate between various eye conditions from retinal images. The CNN architecture processes these images to learn intricate patterns and features associated with 3 different diseases, enabling early detection and diagnosis. This automated approach enhances medical analysis, ensuring timely and effective treatment for patients.',
      duration: 'December 2022',
      softwareStack: 'Deep Learning (Convolutional Neural Network), Python3, Jupyter Notebook, scikit-learn, NumPy, Git',
      link: 'https://github.com/Shereen-Esther/Eye-disease-classification'
    },
    {
      imageSrc: '../../assets/projects/Reimbursement.png',
      title: 'Reimbursement Application',
      description: 'A streamlined application designed for efficient management of employee reimbursements. It features two user interfaces: an Admin UI for managing and approving requests, and an Employee UI for submitting reimbursement claims. Both interfaces are seamlessly connected to a central database for real-time data synchronization and tracking.',
      duration: 'September 2022',
      softwareStack: 'Angular 12, Firebase, Git',
      link: 'https://github.com/Shereen-Esther/Reimbursement-Form'
    },
    {
      imageSrc: '../../assets/projects/Recipe.png',
      title: 'Mini Chefs - A Beginner Recipe Application',
      description: 'Mini Chefs is a user-friendly web application designed for beginner cooks. It allows users to create, read, update, and delete (CRUD) recipes with ease. Connected to a robust database, Mini Chefs ensures that all recipes are stored securely and can be accessed anytime, making cooking a fun and seamless experience for everyone.',
      duration: 'March 2022',
      softwareStack: 'Angular 11, NodeJS, Firebase, Git',
      link: 'https://github.com/Shereen-Esther/Minichefs-Recipe'
    },
    {
      imageSrc: '../../assets/projects/Compiler.png',
      title: 'JAS Compiler',
      description: 'It is a compiler majorly built on JavaScript. It compiles a language that was custom created and named as the JAS Language',
      duration: 'November 2021',
      softwareStack: 'Angular 11, NodeJS, Firebase, Git',
      link: 'https://github.com/Shereen-Esther/JAS-compiler'
    },
    {
      imageSrc: '../../assets/projects/T9.png',
      title: 'T9 Keyboard',
      description: 'The T9 Keyboard Web App replicates the classic T9 predictive text input system used in older mobile phones. It allows users to type efficiently by pressing a key once for each letter, with the app predicting the intended word. This project showcases modern web technologies to recreate the nostalgic and efficient T9 typing experience in a browser environment.',
      duration: 'September 2021',
      softwareStack: 'Angular 11, Firebase, Git',
      link: 'https://github.com/Shereen-Esther/T9-keypad'
    },
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