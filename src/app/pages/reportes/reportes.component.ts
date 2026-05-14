import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Reporte {
  id:number;
  tipo: string;
  descripcion: string;
  imagen?: string;
  ubicacion: string;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})


export class ReportesComponent {
  
  reportes = signal<Reporte[]>([]);

  nuevoReporte: Reporte = {
    id:Date.now(),
    tipo: '',
    descripcion: '',
    imagen: '',
    ubicacion: ''
  };

  isAdding = false;

  agregarReporte() {
    if (this.isAdding) {
      return;
    }

    if (!this.nuevoReporte.tipo || !this.nuevoReporte.descripcion || !this.nuevoReporte.ubicacion) {
      alert('completa todos los campos');
      return;
    }

    this.isAdding = true;

    this.reportes.update(lista => [...lista, { ...this.nuevoReporte }]);

    this.nuevoReporte = {
      id: Date.now(),
      tipo: '',
      ubicacion: '',
      imagen: '',
      descripcion: ''
    };

    this.isAdding = false;
  }

  enviarWhatsApp(reporte: Reporte) {
  const numero = '935320839';

  const mensaje = `EcoHuanta - Reporte ambiental
  Tipo: ${reporte.tipo}
  Ubicación: ${reporte.ubicacion}
  Imagen: ${reporte.imagen}
  Descripción: ${reporte.descripcion}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}

  obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const lat = posicion.coords.latitude;
        const lng = posicion.coords.longitude;

        console.log(`Latitud: ${lat}, Longitud: ${lng}`);
        this.obtenerDireccion(lat, lng);

      },

      (error) => {
        alert(error.message);
        alert('No se pudo obtener la ubicación');
      }

    );
  } else {
    alert('Tu navegador no soporta geolocalización');
  }
  }

  constructor(private http: HttpClient){}
  
  obtenerDireccion(lat:number, lng:number){

  const url =
  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  this.http.get<any>(url)
    .subscribe(res => {

      this.nuevoReporte.ubicacion =
      res.display_name;
      console.log('Dirección:', res.display_name);
    });
  }

imagenPreview: string = '';

capturarImagen(event: any){

  const archivo = event.target.files[0];

  if(archivo){

    const reader = new FileReader();

    reader.onload = () => {
      this.imagenPreview = reader.result as string;

      this.nuevoReporte.imagen = this.imagenPreview;
    };

    reader.readAsDataURL(archivo);
  }
  }
  // Tamaño del texta area, para que crezca automaticamente


  autoResize(textarea2: HTMLTextAreaElement) {

  textarea2.style.height = "auto";
  
  textarea2.style.height = textarea2.scrollHeight + "px";
  if (textarea2.scrollHeight >= 100) {
    textarea2.style.height = "100px";
  };
  console.log(textarea2.scrollHeight);

}

}
