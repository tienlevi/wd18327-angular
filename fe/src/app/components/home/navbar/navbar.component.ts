import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;
  value = '';

  handleSearch() {
    window.location.href = `/search?q=${this.value}`;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
