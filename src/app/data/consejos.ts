
export interface Consejo {
    id: number;
    titulo: string;
    imagen: string;
    pautas: string[];
    consejo: string;
    }

export const consejosR: Consejo[] = [
    {
        id: 1,
        titulo: 'Reciclaje',
        imagen: '/consejos/reciclaje.jpg',
        pautas: [
            'Separar residuos orgánicos e inorgánicos',
            'Lavar botellas antes de reciclar',
            'Reutilizar bolsas',
            'Compactar botellas plásticas'
        ],
        consejo: 'Clasifica papel, plástico, vidrio y residuos orgánicos para facilitar el reciclaje.'
    },

    {
        id:2,
        titulo: 'Ahorro de agua',
        imagen: '/consejos/agua.jpg',
        pautas: [
            'Cerrar el caño al cepillarse',
            'Reutilizar agua de lluvia',
            'Reparar fugas',
        ],
        consejo: 'Cerrar el grifo mientras te cepillas puede ahorrar hasta 12 litros de agua.'
    },

    {
        id:3,
        titulo: 'Cuidado del medio ambiente',
        imagen: '/consejos/medio-ambiente.jpg',
        pautas: [
            'Evitar quemar basura',
            'Plantar árboles',
            'Reducir uso de plástico',
        ],
        consejo: 'Sembrar árboles ayuda a mejorar la calidad del aire y reducir el calor urbano.'
    },

    {
        id:4,
        titulo: 'Residuos electrónicos',
        imagen: '/consejos/raee.jpg',
        pautas: [
            'No tirar pilas a la basura',
            'Reciclar celulares viejos',
            'Usar centros RAEE',
         ],
        consejo: 'Las baterías y aparatos electrónicos contienen materiales contaminantes.'
    }
        ]
  