import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { pages } from './models/pages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'portfolio';
  pages = pages;

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
