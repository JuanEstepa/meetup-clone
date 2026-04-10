import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { AuthModalService } from '../../../core/services/auth-modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, AvatarModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  authService = inject(AuthService);
  router = inject(Router);
  authModalService = inject(AuthModalService);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}