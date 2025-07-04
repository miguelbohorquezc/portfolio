import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../shared/components/navbar/navigation.component";
import {SidebarComponent} from "../shared/components/sidebar/sidebar.component"

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
