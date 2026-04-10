import { Injectable, signal } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly mockEvents: Event[] = [
    {
      id: '1',
      title: 'Concierto de Rock: Noche de Leyendas Locales',
      organizer: 'Good Vibes Company',
      date: '14 Abril',
      time: '6:30 p.m.',
      price: 290000,
      rating: 4.3,
      attendees: 73,
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description:
        'Sumérgete en una noche épica de rock puro donde la energía desbordante de las mejores bandas emergentes de la escena local se apodera del escenario. Este no es solo un concierto, es una experiencia sensorial completa diseñada para los amantes del género que buscan autenticidad. Disfruta de un despliegue técnico de luces y sonido de primer nivel, amplios espacios de networking para conocer a otros apasionados de la música y la oportunidad de vivir momentos inolvidables en el corazón de la ciudad. ¡Ven y sé parte del rugido que define a nuestra generación!',
      isOnline: false,
    },
    {
      id: '2',
      title: 'Club de Lectura: Exploradores Literarios',
      organizer: 'Biblioteca Intermunicipal',
      date: '24 Abril',
      time: '2:30 p.m.',
      price: 'Free',
      rating: 4.3,
      attendees: 12,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      frequency: 'Cada Sab, Dom',
      location: 'Bogotá, CO',
      description:
        'Te invitamos a formar parte de nuestra selecta comunidad de lectores en una sesión mensual dedicada al análisis profundo y la apreciación crítica. En esta ocasión, nos adentraremos en las complejidades de diversas corrientes literarias, diseccionando la narrativa de autores contemporáneos y clásicos. Es el espacio perfecto para quienes desean trascender la lectura superficial, compartiendo perspectivas únicas, debates enriquecedores y descubriendo significados ocultos tras cada página. No importa si eres un bibliófilo experto o un lector entusiasta, aquí tu voz construye la historia.',
      isOnline: false,
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
      description:
        "Elevate your development process in this comprehensive hands-on masterclass. We will dive deep into the cutting-edge tool that is revolutionizing the industry, turning individual developers and power users into highly efficient, one-person engineering teams. From the initial environment configuration to the architecture of complex agentic workflows, you will learn how to leverage AI to automate cognitive tasks and accelerate delivery. This is a strictly live, digital-only event featuring real-time coding sessions and an interactive Q&A designed for those at the forefront of the technological frontier.",
      isOnline: true,
    },
    {
      id: '4',
      title: 'Clase de Oratoria Empresarial: Impacto y Liderazgo',
      organizer: 'Speak Up Colombia',
      date: '26 Abril',
      time: '7:00 p.m.',
      price: 150000,
      rating: 4.5,
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description:
        'En el competitivo mundo corporativo actual, saber qué decir es tan importante como saber cómo decirlo. Este taller de alto impacto te proporcionará las herramientas psicológicas y lingüísticas necesarias para dominar el arte de la persuasión y la comunicación efectiva. A través de una metodología 100% práctica, trabajaremos en el control del miedo escénico, el lenguaje no verbal y la estructuración de discursos que cautivan audiencias. Realizarás ejercicios grabados en vivo con retroalimentación inmediata de expertos, asegurando que cada palabra que pronuncies en tu próxima reunión refuerce tu autoridad y liderazgo.',
      isOnline: false,
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
      description:
        'Join a prestigious gathering of visionaries and local business leaders at our exclusive Spring Small Business Roundtable. This collaborative ecosystem, powered by VBMBC and The HIVE, is specifically designed to facilitate high-level strategic networking. Together, we will dissect the current economic landscape, sharing actionable insights, navigating common challenges, and identifying untapped market opportunities. Whether you are scaling a startup or managing an established enterprise, this roundtable offers the collective intelligence and peer support necessary to thrive in an ever-changing business environment.',
      isOnline: false,
    },
    {
      id: '6',
      title: 'Meetup de Developers Bogotá: Innovación Tech',
      organizer: 'BogotáDev',
      date: '30 Abril',
      time: '6:00 p.m.',
      price: 'Free',
      rating: 4.7,
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      frequency: 'Mensualmente',
      location: 'Bogotá, CO',
      description:
        'El punto de encuentro definitivo para la comunidad tecnológica de la capital. Este mes, el Meetup de Developers Bogotá se supera con una agenda cargada de charlas técnicas de alto nivel, demostraciones de arquitecturas modernas y una inmersión en las tendencias que están moldeando el futuro del software a nivel global. Más allá del código, fomentamos un espacio de networking vibrante donde nacen colaboraciones, proyectos open-source y amistades duraderas. Con snacks, bebidas y la mejor vibra geek de la ciudad, este es el lugar donde los bits y los bytes se convierten en soluciones reales para el mundo de hoy.',
      isOnline: false,
    },
  ];

  // Signals
  events = signal<Event[]>(this.mockEvents);
  featuredEvents = signal<Event[]>(this.mockEvents.slice(0, 3));
  userEvents = signal<Event[]>(this.mockEvents.slice(0, 3));
  userGroups = signal<string[]>([
    '🧜‍♀️ The AI Collective Hampton Roads',
    'Suwanee Duluth Lawrenceville Fitness',
    'The codisy mantra',
    'La Comunidad de Desarrolladores de Bogotá',
  ]);

  getEventById(id: string): Event | undefined {
    return this.mockEvents.find((e) => e.id === id);
  }

  getSimilarEvents(id: string): Event[] {
    return this.mockEvents.filter((e) => e.id !== id).slice(0, 2);
  }

  formatPrice(price: number | 'Free'): string {
    if (price === 'Free') return 'Free';
    return `$${price.toLocaleString('es-CO')} COP`;
  }
}