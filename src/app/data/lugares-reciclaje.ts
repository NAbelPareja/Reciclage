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
    nombre: 'MULTINEGOCIOS EL GRINGO E.I.R.L',

    ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.628213900616!2d-74.2616163250823!3d-12.93160048738011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910d834f6fee4d4b%3A0x23df702104094d0c!2sMULTINEGOCIOS%20EL%20GRINGO%20E.I.R.L!5e0!3m2!1ses-419!2spe!4v1778255506490!5m2!1ses-419!2spe',
    direccion: 'Jr. Base Sur N.° 206, salida Huancayo, Chaquiwayjo, Huanta',

    descripcion:
      'Centro de reciclaje y acopio ubicado en Huanta. Recibe materiales reciclables y residuos aprovechables para contribuir al cuidado ambiental y reducir la contaminación en la ciudad.',

    materialesAceptados: [
      'Cartón',
      'Plástico',
      'Chatarra',
      'Metales',
      'Residuos reciclables'
    ],

    horario:
      'Lunes a sábado de 8:00 a.m. a 6:00 p.m.',

    fotos: [
      '/assets/reciclaje/gringo1.jpg',
      '/assets/reciclaje/gringo2.jpg',
      '/assets/reciclaje/gringo3.jpg',
      '/assets/reciclaje/gringo4.jpg'
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
      'Horario de atención municipal',

    fotos: [
      '/assets/reciclaje/muni1.jpg',
      '/assets/reciclaje/muni2.jpg',
      '/assets/reciclaje/muni3.jpg',
      '/assets/reciclaje/muni4.jpg'
    ]
  },

  {
    id:3,
    nombre: 'Punto de acopio RAEE - Claro Perú',

    ubicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.039467913452!2d-74.20415714348403!3d-13.150628027474227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91128744eca660c5%3A0x75adc634b8e823d9!2sAv.%20Amancaes%20961%2C%20Ayacucho!5e0!3m2!1ses-419!2spe!4v1778255688496!5m2!1ses-419!2spe',
    direccion: 'Av. Amancaes 961, Ayacucho',

    descripcion:
      'Centro especializado en residuos electrónicos (RAEE). Permite reciclar aparatos electrónicos en desuso para evitar contaminación tecnológica.',

    materialesAceptados: [
      'Celulares',
      'Cables',
      'Cargadores',
      'Baterías',
      'Pequeños aparatos electrónicos'
    ],

    horario:
      'Horario sujeto al establecimiento',

    fotos: [
      '/assets/reciclaje/claro1.jpg',
      '/assets/reciclaje/claro2.jpg',
      '/assets/reciclaje/claro3.jpg',
      '/assets/reciclaje/claro4.jpg'
    ]
  }

];