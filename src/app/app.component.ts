import { Component, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'; 
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'EcoHuanta';
  currentRoute = '';

  constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.urlAfterRedirects.replace('/', '');
    }
  });
}
  
}

