import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  
  activeSection: string = 'about-section';
  isBrowser: boolean;
  navbar: number = 1;
  sideNavBar: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.scrollToSection('about-section');
    }
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 800px)').matches) {
      this.navbar = 0;
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.setupIntersectionObserver();
    }
  }

  scrollToSection(sectionId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
      }
    }
  }

  setupIntersectionObserver() {
    const sections = document.querySelectorAll('app-about, app-works, app-skills, app-projects, app-contact');
    const options = {
      root: null,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  openSideNav() {
    this.sideNavBar = !this.sideNavBar;
  }
}
