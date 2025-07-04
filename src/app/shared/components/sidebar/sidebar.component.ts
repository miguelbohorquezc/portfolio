import {
  Component,
  HostBinding,
  HostListener,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  // Aplica automáticamente la clase 'sidebar' al host
  @HostBinding('class.sidebar')
  readonly sidebarClass = true;

  // Controla la clase 'collapsed' en el host
  @HostBinding('class.collapsed')
  isCollapsed = false;

  // Estados de submenús
  openMenus: Record<string, boolean> = {
    usuarios: false,
    reportes: false
  };

  constructor(private host: ElementRef<HTMLElement>) {}

  /** Alterna apertura/cierre del sidebar */
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      // Al colapsar, cerrar todos los submenús
      Object.keys(this.openMenus).forEach(key => this.openMenus[key] = false);
    }
  }

  /** Alterna un submenú específico */
  toggleSubmenu(menu: string): void {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  /** Cierra sidebar y submenús al hacer click fuera */
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement): void {
    const clickedInside = this.host.nativeElement.contains(target);
    if (!clickedInside && !this.isCollapsed) {
      this.isCollapsed = true;
      Object.keys(this.openMenus).forEach(key => this.openMenus[key] = false);
    }
  }

  /** Cierra con la tecla Escape */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
      Object.keys(this.openMenus).forEach(key => this.openMenus[key] = false);
    }
  }

  @HostListener('document.click', ['$event.target'])
  cerrarSidebar(target: HTMLElement): void{
    const clickAfuera = this.host.nativeElement.contains(target);
    if(!clickAfuera){
      this.isCollapsed = true;
    }
  }
    
}