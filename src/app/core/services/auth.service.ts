import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'meetup_token';

  isAuthenticated = signal<boolean>(this.hasToken());
  currentUser = signal<User | null>(this.getStoredUser());

  login(email: string, password: string): boolean {
    const fakeToken = btoa(JSON.stringify({
      sub: '1',
      email,
      name: 'Juan Estepa',
      location: 'Bogotá, CO',
      avatar: 'https://i.pravatar.cc/150?img=8',
      exp: Date.now() + 3600000
    }));

    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    this.isAuthenticated.set(true);
    this.currentUser.set({
      name: 'Juan Estepa',
      email,
      location: 'Bogotá, CO',
      avatar: 'https://i.pravatar.cc/150?img=8'
    });
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }

  private hasToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }

  private getStoredUser(): User | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token));
      return {
        name: payload.name,
        email: payload.email,
        location: payload.location,
        avatar: payload.avatar
      };
    } catch {
      return null;
    }
  }
}