import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h2>Bienvenido al Dashboard</h2>
    <nav>
      <a routerLink="stats">Ver estadísticas</a>
    </nav>

    <!-- Aquí se cargan los componentes hijos -->
    <router-outlet></router-outlet>
  `
})
export class DashboardComponent {}
