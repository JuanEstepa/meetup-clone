import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventCard } from '../../shared/components/event-card/event-card';
import { EventsService } from '../../core/services/events.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, EventCard],
  templateUrl: './home.html',
})
export class Home {
  eventsService = inject(EventsService);
}