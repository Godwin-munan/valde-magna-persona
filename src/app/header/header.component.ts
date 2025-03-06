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

  mobileMenuOpen: boolean = false;
  mdNavStyle: string = "px-3 py-2 text-sm font-medium text-gray-700 uppercase hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition duration-300 ease-in-out";
  smMobileNavStyle: string = "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900";

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
