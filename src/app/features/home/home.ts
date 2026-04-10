import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventCard } from '../../shared/components/event-card/event-card';
import { EventsService } from '../../core/services/events.service';
import { ScrollContainer } from '../../shared/components/scroll-container/scroll-container';
import { AuthModalService } from '../../core/services/auth-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, EventCard, ScrollContainer],
  templateUrl: './home.html',
})
export class Home {
  eventsService = inject(EventsService);
  authModalService = inject(AuthModalService);
  @ViewChild('categoriesScroll') categoriesScroll!: ElementRef;

  showScrollLeft = false;
  showScrollRight = true;

  categories = [
    {
      name: 'Viajes y actividades al aire libre',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/tree.webp',
      border: '#6DD5A8',
      bg: '#f0fdf8',
    },
    {
      name: 'Deportes y Fitness',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/ball.webp',
      border: '#F4A46A',
      bg: '#fff7f0',
    },
    {
      name: 'Carrera y Negocios',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/suitcase.webp',
      border: '#A78BFA',
      bg: '#f5f3ff',
    },
    {
      name: 'Juegos',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/videogame.webp',
      border: '#38BDF8',
      bg: '#f0f9ff',
    },
    {
      name: 'Tecnología',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/computer.webp',
      border: '#F4A46A',
      bg: '#fff7f0',
    },
    {
      name: 'Arte y Cultura',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/painting.webp',
      border: '#6DD5A8',
      bg: '#f0fdf8',
    },
    {
      name: 'Salud y Bienestar',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/mental-health.webp',
      border: '#A78BFA',
      bg: '#f5f3ff',
    },
    {
      name: 'Ciencia y Educación',
      image: 'https://secure.meetupstatic.com/next/images/complex-icons/branded/potion.webp',
      border: '#38BDF8',
      bg: '#f0f9ff',
    },
  ];

  scrollRight(): void {
    this.categoriesScroll.nativeElement.scrollBy({ left: 500, behavior: 'smooth' });
    this.updateScrollButtons();
  }

  scrollLeft(): void {
    this.categoriesScroll.nativeElement.scrollBy({ left: -500, behavior: 'smooth' });
    this.updateScrollButtons();
  }

  updateScrollButtons(): void {
    setTimeout(() => {
      const el = this.categoriesScroll.nativeElement;
      this.showScrollLeft = el.scrollLeft > 0;
      this.showScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 10;
    }, 350);
  }
}
