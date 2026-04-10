import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  isOpen = signal<boolean>(false);
  mode = signal<'login' | 'register'>('login');

  openLogin(): void {
    this.mode.set('login');
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  openRegister(): void {
    this.mode.set('register');
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleMode(): void {
    this.mode.set(this.mode() === 'login' ? 'register' : 'login');
  }
}