import { Component } from '@angular/core';
import { lugaresReciclaje } from '../../data/lugares-reciclaje';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-reciclaje',
  imports: [CommonModule],
  templateUrl: './reciclaje.component.html',
  styleUrl: './reciclaje.component.css'
})



export class ReciclajeComponent {
  lugaresReciclaje = lugaresReciclaje;

  constructor(private sanitizer: DomSanitizer) {}

  obtenerMapa(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

}


