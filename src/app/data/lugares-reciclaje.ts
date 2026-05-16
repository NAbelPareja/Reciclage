export interface LugarReciclage {
    id:number;
    nombre: string;
    ubicacion: string;
    direccion: string;
    descripcion: string;
    materialesAceptados: string[];
    horario: string;
    fotos: string[];
}

export const lugaresReciclaje: LugarReciclage[] = [

  {
    id:1,
    nombre: 'ASOCIACIÓN DE RECICLADORES BELLA ESMERALDA',

    ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.628213900616!2d-74.2616163250823!3d-12.93160048738011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910d834f6fee4d4b%3A0x23df702104094d0c!2sMULTINEGOCIOS%20EL%20GRINGO%20E.I.R.L!5e0!3m2!1ses-419!2spe!4v1778255506490!5m2!1ses-419!2spe',
    direccion: 'Jr. Base Sur N.° 206, salida Huancayo, Chaquiwayjo, Huanta',

    descripcion:
      'Centro de reciclaje y acopio ubicado en Huanta. Recibe materiales reciclables y residuos aprovechables para contribuir al cuidado ambiental y reducir la contaminación en la ciudad.',

    materialesAceptados: [
      'Cartón',
      'Papel Bond',
      'Cuadernos',
    ],

    horario:
      'Lunes a sábado de 8:00 a.m. a 6:00 p.m.',

    fotos: [
      '/reciclage/reciclage1/img1.jpeg',
      '/z-1-f-2.jpg',
      '/z-1-f-3.jpg',
      '/z-1-f-4.jpg'
    ]
  },

  {
    id:2,
    nombre: 'Municipalidad Provincial de Huanta',

    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5084722749484!2d-74.25063232508218!3d-12.939282087373114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910d824739da7381%3A0xc643d319305f400e!2sMunicipalidad%20Provincial%20de%20Huanta!5e0!3m2!1ses-419!2spe!4v1778255606143!5m2!1ses-419!2spe",
    direccion: 'Jr. Razuhuilca 183, Plaza Principal de Huanta',

    descripcion:
      'Entidad encargada de supervisar programas de reciclaje, segregación de residuos y centros de acopio formalizados en la provincia de Huanta.',

    materialesAceptados: [
      'Papel',
      'Cartón',
      'Vidrio',
      'Plástico',
      'Metales'
    ],

    horario:
      'Solo en campañas',

    fotos: [
      '/z-1-f-1.jpg',
      '/z-1-f-2.jpg',
      '/z-1-f-3.jpg',
      '/z-1-f-4.jpg'
    ]
  },


];