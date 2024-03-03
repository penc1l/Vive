import { Component, OnInit, EventEmitter, Output,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { register} from 'swiper/element/bundle';

register();
export interface ExpandedSections {
  quienesSomos: boolean;
  // Agrega más propiedades aquí si tienes más secciones
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      state('collapsed', style({
        height: '0',
        opacity: 0
      })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit  {
  currentYear: number = new Date().getFullYear();
  expandedSections: ExpandedSections = {
    quienesSomos: false,
    // Inicializa las demás propiedades si las tienes
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggle(section: keyof ExpandedSections) {
    this.expandedSections[section] = !this.expandedSections[section];
  }



  /* body-mision vision */
  
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const section = document.querySelector('.section');

    if (section) {
      const sectionOffset = section.getBoundingClientRect().top + window.scrollY;
      const isVisible = sectionOffset < offset + windowHeight;

      if (isVisible && !this.isVisible) {
        this.isVisible = true;
      }
    }
  }

  /* body */
}
