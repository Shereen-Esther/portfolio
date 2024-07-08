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
        asElement.style.backgroundColor = "#7D7C7B";
        asElement.style.color = "white";
        asElement.style.borderRadius = "15px";
      } else {
        asElement.style.backgroundColor = "#faf9f7";
        asElement.style.color = "black";
      }
    }
    if (wsElement) {
      if (element?.id === "works-section") {
        wsElement.style.backgroundColor = "#7D7C7B";
        wsElement.style.color = "white";
        wsElement.style.borderRadius = "15px";
      } else {
        wsElement.style.backgroundColor = "#faf9f7";
        wsElement.style.color = "black";
      }
    }
    if (ssElement) {
      if (element?.id === "skills-section") {
        ssElement.style.backgroundColor = "#7D7C7B";
        ssElement.style.color = "white";
        ssElement.style.borderRadius = "15px";
      } else {
        ssElement.style.backgroundColor = "#faf9f7";
        ssElement.style.color = "black";
      }
    }
    if (psElement) {
      if (element?.id === "projects-section") {
        psElement.style.backgroundColor = "#7D7C7B";
        psElement.style.color = "white";
        psElement.style.borderRadius = "15px";
      } else {
        psElement.style.backgroundColor = "#faf9f7";
        psElement.style.color = "black";
      }
    }
    if (isElement) {
      if (element?.id === "interests-section") {
        isElement.style.backgroundColor = "#7D7C7B";
        isElement.style.color = "white";
        isElement.style.borderRadius = "15px";
      } else {
        isElement.style.backgroundColor = "#faf9f7";
        isElement.style.color = "black";
      }
    }
    if (csElement) {
      if (element?.id === "contact-section") {
        csElement.style.backgroundColor = "#7D7C7B";
        csElement.style.color = "white";
        csElement.style.borderRadius = "15px";
      } else {
        csElement.style.backgroundColor = "#faf9f7";
        csElement.style.color = "black";
      }
    }
  }
}
