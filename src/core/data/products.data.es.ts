import type { Product } from '../interfaces/Product.interface';

import empanadaHawaiana from '@assets/images/products/empanada-01.webp';
import empanadaCarneDesmechada from '@assets/images/products/empanada-02.webp';
import empanadaPolloDesmechado from '@assets/images/products/empanada-03.webp';
import empanadaSobreBarriga from '@assets/images/products/empanada-04.webp';

export const empanadaSpanish: Product[] = [
  {
    code: 'hawaiian',
    title: 'Empanada Hawaiana',
    shortTitle: 'Hawaiana',
    description: [
      'La combinación que nunca pasa de moda: un toque tropical que fusiona lo dulce y lo salado en cada mordisco. Jugosos trocitos de piña se mezclan con queso fundido y el sabor único de nuestra receta casera, creando una explosión de frescura y cremosidad que te hará cerrar los ojos de puro placer.',
    ],
    image: empanadaHawaiana,
    url: '/empanada-hawaiana',
    price: 0,
  },
  {
    code: 'shredded-beef',
    title: 'Empanada de Carne Desmechada',
    shortTitle: 'Carne Desmechada',
    description: [
      'Una delicia contundente para los amantes de la buena carne,Tierna, jugosa y con ese sabor casero que recuerda a la cocina de abuela. Nuestra carne desmechada se cocina lentamente con especias criollas hasta alcanzar la perfección, para luego abrazar la masa crujiente y dorada. Cada bocado es un viaje al auténtico sabor colombiano.',
    ],
    image: empanadaCarneDesmechada,
    url: '/empanada-carne-desmechada',
    price: 0,
  },
  {
    code: 'chicken-pastry',
    title: 'Pastel de pollo',
    shortTitle: 'Pastel de pollo',
    description: [
      'El clásico que todos aman, pero llevado a otro nivel. Pollo fresco, desmechado a mano, sazonado con hierbas y especias que resaltan su suavidad y jugosidad. Al combinarse con la masa dorada y crocante, nace una empanada ligera, sabrosa y absolutamente irresistible.',
    ],
    image: empanadaPolloDesmechado,
    url: '/pastel-de-pollo',
    price: 0,
  },
  {
    code: 'cheese-arepa',
    title: 'Arepa de Queso',
    shortTitle: 'Arepa de Queso',
    description: [
      'Arepa de queso tradicional, dorada por fuera y suave por dentro, rellena de queso fundido que se derrite en cada mordisco. Perfecta para cualquier momento.',
    ],
    image: empanadaSobreBarriga,
    url: '/empanada-sobre-barriga',
    price: 0,
  },
  {
    code: 'meat-patty',
    title: 'Torta de Carne',
    shortTitle: 'Torta de Carne',
    description: [
      'Torta de carne colombiana preparada con carne sazonada, dorada por fuera y jugosa por dentro. Ideal para quienes buscan un sabor intenso y tradicional.',
    ],
    image: empanadaSobreBarriga,
    url: '/empanada-sobre-barriga',
    price: 0,
  },
  {
    code: 'stuffed-potato',
    title: 'Papa Rellena',
    shortTitle: 'Papa Rellena',
    description: [
      'Papa rellena colombiana con carne jugosa y bien condimentada, cubierta por una capa crujiente y dorada. Un clásico irresistible de la cocina tradicional.',
    ],
    image: empanadaSobreBarriga,
    url: '/empanada-sobre-barriga',
    price: 0,
  },
];
