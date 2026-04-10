import {
  Component,
  inject,
  signal,
  computed,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { AuthModalService } from '../../core/services/auth-modal.service';
import { ToastService } from '../../core/services/toast.service';
import { Event } from '../../core/models/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-detail.html',
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  eventsService = inject(EventsService);
  authModalService = inject(AuthModalService);
  toastService = inject(ToastService);

  event = signal<Event | undefined>(undefined);
  similarEvents = signal<Event[]>([]);
  descriptionExpanded = signal(false);
  showShareModal = signal(false);

  readonly DESCRIPTION_LIMIT = 300;

  attendees = [
    { name: 'Andrew', role: 'Super organizador', avatar: 'https://i.pravatar.cc/80?img=11' },
    { name: 'Paul Ramirez', role: 'Miembro', avatar: 'https://i.pravatar.cc/80?img=12' },
    { name: 'Paul Ramirez', role: 'Miembro', avatar: 'https://i.pravatar.cc/80?img=13' },
    { name: '+99 más', role: '200 en espera', avatar: 'https://i.pravatar.cc/80?img=14' },
  ];

  isDescriptionLong = computed(() => {
    const desc = this.event()?.description || '';
    return desc.length > this.DESCRIPTION_LIMIT;
  });

  truncatedDescription = computed(() => {
    const desc = this.event()?.description || '';
    if (!this.isDescriptionLong() || this.descriptionExpanded()) return desc;
    return desc.slice(0, this.DESCRIPTION_LIMIT) + '...';
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.event.set(this.eventsService.getEventById(id));
      this.similarEvents.set(this.eventsService.getSimilarEvents(id));
    }
  }

  toggleDescription(): void {
    this.descriptionExpanded.set(!this.descriptionExpanded());
  }

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