import { Injectable, signal } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly mockEvents: Event[] = [
    {
      id: '1',
      title: 'Concierto de Rock',
      organizer: 'Good Vibes Company',
      date: '14 Abril',
      time: '6:30 p.m.',
      price: 290000,
      rating: 4.3,
      attendees: 73,
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description: 'Una noche épica de rock con las mejores bandas de la ciudad. Ven a disfrutar de música en vivo, conoce gente nueva y vive una experiencia inolvidable.',
      isOnline: false
    },
    {
      id: '2',
      title: 'Club de Lectura',
      organizer: 'Biblioteca Intermunicipal',
      date: '24 Abril',
      time: '2:30 p.m.',
      price: 'Free',
      rating: 4.3,
      attendees: 12,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      frequency: 'Cada Sab, Dom',
      location: 'Bogotá, CO',
      description: 'Únete a nuestro club de lectura mensual donde exploramos diferentes géneros literarios y compartimos perspectivas únicas sobre cada obra.',
      isOnline: false
    },
    {
      id: '3',
      title: 'Claude Code: From Setup to Agentic Workflows',
      organizer: 'AICHR',
      date: '9 Abril',
      time: '5:30 p.m.',
      price: 'Free',
      rating: 4.8,
      attendees: 320,
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800',
      frequency: 'Mensualmente',
      location: 'Online',
      description: 'Hands-on with the tool that\'s turning developers and power users into one-person engineering teams. This is a live, digital-only event.',
      isOnline: true
    },
    {
      id: '4',
      title: 'Clase de Oratoria Empresarial',
      organizer: 'Speak Up Colombia',
      date: '26 Abril',
      time: '7:00 p.m.',
      price: 150000,
      rating: 4.5,
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description: 'Aprende técnicas de oratoria para mejorar tu comunicación en entornos empresariales. Taller práctico con ejercicios en vivo.',
      isOnline: false
    },
    {
      id: '5',
      title: 'VBMBC + The HIVE: Spring Small Business Roundtable',
      organizer: 'Good Vibes Company',
      date: '26 Abril',
      time: '7:00 p.m.',
      price: 'Free',
      rating: 4.1,
      attendees: 73,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description: 'Join us for our spring small business roundtable where entrepreneurs share insights, challenges and opportunities.',
      isOnline: false
    },
    {
      id: '6',
      title: 'Meetup de Developers Bogotá',
      organizer: 'BogotáDev',
      date: '30 Abril',
      time: '6:00 p.m.',
      price: 'Free',
      rating: 4.7,
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description: 'El meetup mensual de desarrolladores de Bogotá. Charlas técnicas, networking y mucho más.',
      isOnline: false
    }
  ];

  // Signals
  events = signal<Event[]>(this.mockEvents);
  featuredEvents = signal<Event[]>(this.mockEvents.slice(0, 3));
  userEvents = signal<Event[]>(this.mockEvents.slice(0, 2));
  userGroups = signal<string[]>([
    '🧜‍♀️ The AI Collective Hampton Roads',
    'Suwanee Duluth Lawrenceville Fitness'
  ]);

  getEventById(id: string): Event | undefined {
    return this.mockEvents.find(e => e.id === id);
  }

  getSimilarEvents(id: string): Event[] {
    return this.mockEvents.filter(e => e.id !== id).slice(0, 2);
  }

  formatPrice(price: number | 'Free'): string {
    if (price === 'Free') return 'Free';
    return `$${price.toLocaleString('es-CO')} COP`;
  }
}