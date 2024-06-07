import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;
  value = '';
  user = localStorage.getItem('user');

  logOut() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
