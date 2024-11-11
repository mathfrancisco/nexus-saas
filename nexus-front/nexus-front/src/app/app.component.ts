import {FooterComponent} from './shared/components/layout/footer/footer.component';
import {NavbarComponent} from './shared/components/layout/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
