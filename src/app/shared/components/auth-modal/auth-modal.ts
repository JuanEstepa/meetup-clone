import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModalService } from '../../../core/services/auth-modal.service';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.html'
})
export class AuthModal {
  authModalService = inject(AuthModalService);
  authService = inject(AuthService);
  toastService = inject(ToastService);
  router = inject(Router);

  name = '';
  email = '';
  password = '';
  showPassword = false;
  loading = false;

  close(): void {
    this.authModalService.close();
    this.resetForm();
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.password = '';
    this.showPassword = false;
  }

  submit(): void {
    if (!this.email || !this.password) {
      this.toastService.warn('Por favor completa todos los campos');
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.authService.login(this.email, this.password);
      this.loading = false;
      this.close();
      this.toastService.success(
        this.authModalService.mode() === 'login'
          ? '¡Bienvenido de nuevo!'
          : '¡Cuenta creada exitosamente!'
      );
      this.router.navigate(['/dashboard']);
    }, 800);
  }
}