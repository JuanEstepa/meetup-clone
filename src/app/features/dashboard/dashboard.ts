import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { EventsService } from '../../core/services/events.service';
import { EventCard } from '../../shared/components/event-card/event-card';
import { ScrollContainer } from '../../shared/components/scroll-container/scroll-container';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, EventCard, ScrollContainer],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  authService = inject(AuthService);
  eventsService = inject(EventsService);
  private breakpointObserver = inject(BreakpointObserver);
  toastService = inject(ToastService);

  activeTab = signal<'confirmado' | 'guardado'>('confirmado');
  showShareModal = signal(false);

  confirmedEvents = this.eventsService.userEvents;
  savedEvents = signal(this.eventsService.events().slice(2, 4));
  recommendedEvents = this.eventsService.featuredEvents;
  groupEvents = this.eventsService.events;
  groups = this.eventsService.userGroups;

  groupImages = [
    'https://secure.meetupstatic.com/photos/event/4/a/9/2/highres_514279090.jpeg',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop',
  ];

  isMobile$ = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(map((result) => result.matches));

  openShare(e: MouseEvent): void {
    e.stopPropagation();
    this.showShareModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeShare(): void {
    this.showShareModal.set(false);
    document.body.style.overflow = '';
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
    this.closeShare();
    this.toastService.success('Enlace copiado al portapapeles');
  }

  shareWhatsapp(): void {
    window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank');
    this.closeShare();
  }

  joinEvent(): void {
    this.toastService.success('¡Te has unido al evento!');
  }

  saveEvent(): void {
    this.toastService.info('Evento guardado');
  }
}
