import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { EventsService } from '../../core/services/events.service';
import { EventCard } from '../../shared/components/event-card/event-card';
import { ScrollContainer } from '../../shared/components/scroll-container/scroll-container';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, EventCard, ScrollContainer],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  authService = inject(AuthService);
  eventsService = inject(EventsService);
  private breakpointObserver = inject(BreakpointObserver);

  activeTab = signal<'confirmado' | 'guardado'>('confirmado');

  confirmedEvents = this.eventsService.userEvents;
  savedEvents = signal(this.eventsService.events().slice(2, 4));
  recommendedEvents = this.eventsService.featuredEvents;
  groupEvents = this.eventsService.events;
  groups = this.eventsService.userGroups;

  groupImages = [
    'https://secure.meetupstatic.com/photos/event/4/a/9/2/highres_514279090.jpeg',
    'https://secure.meetupstatic.com/photos/event/2/6/4/7/highres_533109799.jpeg',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop'
  ];

  isMobile$ = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
    .pipe(map(result => result.matches));
}