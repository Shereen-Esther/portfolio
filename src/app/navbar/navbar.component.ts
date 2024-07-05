import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService) { }

  scrollTo(section: any): void {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    
    const asElement = document.getElementById("as");
    const wsElement = document.getElementById("ws");
    const ssElement = document.getElementById("ss");
    const psElement = document.getElementById("ps");
    const isElement = document.getElementById("is");
    const csElement = document.getElementById("cs");

    if (asElement) {
      if (element?.id === "about-section") {
        asElement.style.backgroundColor = "black";
        asElement.style.color = "white";
        asElement.style.borderRadius = "15px";
        asElement.style.opacity = "0.5";
      } else {
        asElement.style.backgroundColor = "#faf9f7";
        asElement.style.color = "black";
        asElement.style.opacity = "1";
      }
    }
    if (wsElement) {
      if (element?.id === "works-section") {
        wsElement.style.backgroundColor = "black";
        wsElement.style.color = "white";
        wsElement.style.borderRadius = "15px";
        wsElement.style.opacity = "0.5";
      } else {
        wsElement.style.backgroundColor = "#faf9f7";
        wsElement.style.color = "black";
        wsElement.style.opacity = "1";
      }
    }
    if (ssElement) {
      if (element?.id === "skills-section") {
        ssElement.style.backgroundColor = "black";
        ssElement.style.color = "white";
        ssElement.style.borderRadius = "15px";
        ssElement.style.opacity = "0.5";
      } else {
        ssElement.style.backgroundColor = "#faf9f7";
        ssElement.style.color = "black";
        ssElement.style.opacity = "1";
      }
    }
    if (psElement) {
      if (element?.id === "projects-section") {
        psElement.style.backgroundColor = "black";
        psElement.style.color = "white";
        psElement.style.borderRadius = "15px";
        psElement.style.opacity = "0.5";
      } else {
        psElement.style.backgroundColor = "#faf9f7";
        psElement.style.color = "black";
        psElement.style.opacity = "1";
      }
    }
    if (isElement) {
      if (element?.id === "interests-section") {
        isElement.style.backgroundColor = "black";
        isElement.style.color = "white";
        isElement.style.borderRadius = "15px";
        isElement.style.opacity = "0.5";
      } else {
        isElement.style.backgroundColor = "#faf9f7";
        isElement.style.color = "black";
        isElement.style.opacity = "1";
      }
    }
    if (csElement) {
      if (element?.id === "contact-section") {
        csElement.style.backgroundColor = "black";
        csElement.style.color = "white";
        csElement.style.borderRadius = "15px";
        csElement.style.opacity = "0.5";
      } else {
        csElement.style.backgroundColor = "#faf9f7";
        csElement.style.color = "black";
        csElement.style.opacity = "1";
      }
    }
  }
}
