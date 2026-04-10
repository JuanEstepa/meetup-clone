import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { ToastModule } from 'primeng/toast';
import { AuthModal } from './shared/components/auth-modal/auth-modal';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, ToastModule, AuthModal],
  templateUrl: './app.html',
})
export class App {}