import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Event } from '../../../core/models/event.model';
import { EventsService } from '../../../core/services/events.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.html',
})
export class EventCard {
  event = input.required<Event>();
  eventsService = inject(EventsService);
  toastService = inject(ToastService);
  router = inject(Router);

  showShareModal = false;

  goToDetail(): void {
    this.router.navigate(['/event', this.event().id]);
  }

  openShare(e: MouseEvent): void {
    e.stopPropagation();
    this.showShareModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeShare(): void {
    this.showShareModal = false;
    document.body.style.overflow = '';
  }

  copyLink(): void {
    const url = `${window.location.origin}/event/${this.event().id}`;
    navigator.clipboard.writeText(url);
    this.closeShare();
    this.toastService.success('Enlace copiado al portapapeles');
  }

  shareWhatsapp(): void {
    const url = `${window.location.origin}/event/${this.event().id}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
    this.closeShare();
    this.toastService.success('Abriendo WhatsApp...');
  }
}
