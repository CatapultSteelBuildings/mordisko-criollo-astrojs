import type { Product } from '../interfaces/Product.interface';

import empanadaHawaiana from '@assets/images/products/empanada-01.webp';
import empanadaCarneDesmechada from '@assets/images/products/empanada-02.webp';
import empanadaPolloDesmechado from '@assets/images/products/empanada-03.webp';
import empanadaSobreBarriga from '@assets/images/products/empanada-04.webp';

export const empanadaSpanish: Product[] = [
  {
    code: 'hawaiian',
    title: 'Empanada Hawaiana',
    description: [
      'La combinación que nunca pasa de moda: un toque tropical que fusiona lo dulce y lo salado en cada mordisco. Jugosos trocitos de piña se mezclan con queso fundido y el sabor único de nuestra receta casera, creando una explosión de frescura y cremosidad que te hará cerrar los ojos de puro placer.',
    ],
    shortDescription:
      'El equilibrio tropical perfecto. Jugosos trozos de piña calada mezclados con abundante queso doble crema fundido y jamón seleccionado.',
    image: empanadaHawaiana,
    url: '/empanada-hawaiana',
    price: 0,
  },
  {
    code: 'shredded-beef',
    title: 'Empanada de Carne Desmechada',
    description: [
      'Tierna, jugosa y con ese sabor casero que recuerda a la cocina de abuela. Nuestra carne desmechada se cocina lentamente con especias criollas hasta alcanzar la perfección, para luego abrazar la masa crujiente y dorada. Cada bocado es un viaje al auténtico sabor colombiano.',
    ],
    shortDescription:
      'La clásica infaltable. Carne de res seleccionada, cocinada lentamente y desmechada a mano, guisada con nuestro hogao criollo secreto.',
    image: empanadaCarneDesmechada,
    url: '/empanada-carne-desmechada',
    price: 0,
  },
  {
    code: 'shredded-chicken',
    title: 'Empanada de Pollo Desmechado',
    description: [
      'El clásico que todos aman, pero llevado a otro nivel. Pollo fresco, desmechado a mano, sazonado con hierbas y especias que resaltan su suavidad y jugosidad. Al combinarse con la masa dorada y crocante, nace una empanada ligera, sabrosa y absolutamente irresistible.',
    ],
    shortDescription:
      'Suave y llena de sabor. Pechuga de pollo fresca desmechada, sazonada con hierbas finas y especias naturales. La opción más ligera.',
    image: empanadaPolloDesmechado,
    url: '/empanada-pollo-desmechado',
    price: 0,
  },
  {
    code: 'flank-steak',
    title: 'Empanada de Sobrebarriga',
    description: [
      'Una delicia contundente para los amantes de la buena carne. La sobrebarriga se cocina lentamente hasta quedar suave, jugosa y llena de sabor, luego se desmecha con paciencia para convertirse en el relleno perfecto. Su sabor profundo y auténtico conquista corazones y convierte cualquier momento en una experiencia inolvidable.',
    ],
    shortDescription:
      'Nuestra especialidad premium. Corte de sobrebarriga braseada por 8 horas hasta deshacerse, potenciada con un guiso profundo y sustancioso.',
    image: empanadaSobreBarriga,
    url: '/empanada-sobre-barriga',
    price: 0,
  },
];
