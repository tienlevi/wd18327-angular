import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from './util/scroll-to-top/scroll-to-top.component';
import { WINDOW } from './util/win/window';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ScrollToTopComponent],
})
export class AppComponent {
  private _window = inject(WINDOW);
  title = 'real';
  inSomeFunction() {
    this._window.location.assign('http://localhost:4200/');
  }
}
