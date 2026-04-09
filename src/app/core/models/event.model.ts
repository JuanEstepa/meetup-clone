export interface Event {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  price: number | 'Free';
  rating: number;
  attendees: number;
  image: string;
  frequency: string;
  location: string;
  description: string;
  isOnline: boolean;
}