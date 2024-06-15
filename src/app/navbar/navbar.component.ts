import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService) { }

  scrollToSection(section: string): void {
    this.scrollService.scrollToAnchor(section);
  }
  scrollTo(section: any): void {
    const scrolll = window.scrollY || document.documentElement.scrollTop;
    const element = document.getElementById(section);
    const navlinks = document.querySelectorAll('a');
    navlinks.forEach(link => {
      let sec: any = document.querySelector(link.getAttribute('href') as string);
      if (sec.offsetTop <= scrolll && (sec.offsetTop + sec.offsetHeight) > scrolll) {
        link?.classList.add('active');
      } else {
        link?.classList.remove('active');
      }
    });
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }


}
