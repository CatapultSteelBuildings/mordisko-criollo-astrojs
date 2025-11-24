import type { Product } from '../interfaces/Product.interface';

import hawaiianEmpanada from '@assets/images/products/empanada-01.webp';
import shreddedBeefEmpanada from '@assets/images/products/empanada-02.webp';
import shreddedChickenEmpanada from '@assets/images/products/empanada-03.webp';
import slowSookedBeefEmpanada from '@assets/images/products/empanada-04.webp';

export const empanadaEnglish: Product[] = [
  {
    code: 'hawaiian',
    title: 'Hawaiian Empanada',
    shortTitle: 'Hawaiian',
    description: [
      'The perfect balance of sweet and savory in every bite. Juicy pineapple chunks melt into creamy cheese, wrapped inside our golden, crispy crust. A tropical explosion of freshness and flavor that will make you close your eyes in pure delight.',
    ],
    shortDescription:
      'The perfect tropical mix. Juicy pineapple chunks combined with melted mozzarella cheese and premium ham. A sweet & savory delight.',
    image: hawaiianEmpanada,
    url: '/hawaiian-empanada',
    price: 0,
  },
  {
    code: 'shredded-beef',
    title: 'Shredded Beef Empanada',
    shortTitle: 'Shredded Beef',
    description: [
      'Tender, juicy, and packed with that homemade flavor you’ll never forget. Our shredded beef is slow-cooked with traditional spices until it reaches absolute perfection, then tucked inside a crispy golden crust. Each bite takes you straight to the heart of authentic Colombian flavor.',
    ],
    shortDescription:
      'The classic choice. Selected beef, slow-cooked and hand-shredded, seasoned with our secret "hogao" (Creole sauce). Juicy inside, crispy outside.',
    image: shreddedBeefEmpanada,
    url: '/shredded-beef-empanada',
    price: 0,
  },
  {
    code: 'shredded-chicken',
    title: 'Shredded Chicken Empanada',
    shortTitle: 'Shredded Chicken',
    description: [
      'A classic everyone loves — but better. Fresh chicken, hand-shredded and seasoned with herbs and spices to highlight its tenderness and juiciness. Combined with our crunchy, golden dough, it becomes a light, flavorful, and absolutely irresistible empanada.',
    ],
    shortDescription:
      'Light and flavorful. Fresh chicken breast, hand-shredded and seasoned with fine herbs and natural spices. A lighter but filling option.',
    image: shreddedChickenEmpanada,
    url: '/shredded-chicken-empanada',
    price: 0,
  },
  {
    code: 'slow-cooked-beef',
    title: 'Slow-Cooked Beef Empanada',
    shortTitle: 'Slow-Cooked Beef',
    description: [
      'A bold choice for true meat lovers. This flank steak is slow-cooked until it’s melt-in-your-mouth tender, then carefully shredded to create the perfect filling. Rich, juicy, and unforgettable, this empanada delivers deep, authentic flavor in every bite.',
    ],
    shortDescription:
      'Our premium specialty. Flank steak braised for 8 hours until tender, enhanced with a rich, deep-flavored stew. A bold taste for true meat lovers.',
    image: slowSookedBeefEmpanada,
    url: '/slow-cooked-beef-empanada',
    price: 0,
  },
];
