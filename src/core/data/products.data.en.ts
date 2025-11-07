import type { Product } from '../interfaces/Product.interface';

import hawaiianEmpanada from '@assets/images/products/empanada-01.webp';
import shreddedBeefEmpanada from '@assets/images/products/empanada-02.webp';
import shreddedChickenEmpanada from '@assets/images/products/empanada-03.webp';
import shreddedFlankSteakEmpanada from '@assets/images/products/empanada-04.webp';

export const empanadaEnglish: Product[] = [
  {
    title: 'Hawaiian Empanada',
    description: [
      'The perfect balance of sweet and savory in every bite. Juicy pineapple chunks melt into creamy cheese, wrapped inside our golden, crispy crust. A tropical explosion of freshness and flavor that will make you close your eyes in pure delight.',
    ],
    image: hawaiianEmpanada,
    url: '/hawaiian-empanada',
    price: 0,
  },
  {
    title: 'Shredded Beef Empanada',
    description: [
      'Tender, juicy, and packed with that homemade flavor you’ll never forget. Our shredded beef is slow-cooked with traditional spices until it reaches absolute perfection, then tucked inside a crispy golden crust. Each bite takes you straight to the heart of authentic Colombian flavor.',
    ],
    image: shreddedBeefEmpanada,
    url: '/shredded-beef-empanada',
    price: 0,
  },
  {
    title: 'Shredded Chicken Empanada',
    description: [
      'A classic everyone loves — but better. Fresh chicken, hand-shredded and seasoned with herbs and spices to highlight its tenderness and juiciness. Combined with our crunchy, golden dough, it becomes a light, flavorful, and absolutely irresistible empanada.',
    ],
    image: shreddedChickenEmpanada,
    url: '/shredded-chicken-empanada',
    price: 0,
  },
  {
    title: 'Shredded Beef Empanada',
    description: [
      'A bold choice for true meat lovers. This flank steak is slow-cooked until it’s melt-in-your-mouth tender, then carefully shredded to create the perfect filling. Rich, juicy, and unforgettable, this empanada delivers deep, authentic flavor in every bite.',
    ],
    image: shreddedFlankSteakEmpanada,
    url: '/shredded-beef-empanada',
    price: 0,
  },
];
