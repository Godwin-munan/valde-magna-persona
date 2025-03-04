import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mobileMenuOpen = false;
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // When scrolling, add a shadow if scrollY > 0
    this.scrolled = window.scrollY > 0;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
