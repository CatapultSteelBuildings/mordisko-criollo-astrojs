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
      'Golden and crispy empanada filled with melted cheese, juicy pineapple chunks, and homemade artisanal ham. A timeless sweet-and-savory combination with a tropical touch that delivers bold flavor in every mouthful—satisfying and irresistible',
    ],
    image: hawaiianEmpanada,
    url: '/hawaiian-empanada',
    price: 0,
  },
  {
    code: 'shredded-beef',
    title: 'Shredded Beef Empanada',
    shortTitle: 'Shredded Beef',
    description: [
      'A hearty delight for true meat lovers. Tender, juicy, and filled with that homemade flavor that brings back memories of grandma’s kitchen. Our shredded beef is slowly cooked with traditional Colombian spices until perfectly seasoned, then wrapped in a golden, crispy crust. Every bite is a journey into authentic Colombian flavor.',
    ],
    image: shreddedBeefEmpanada,
    url: '/shredded-beef-empanada',
    price: 0,
  },
  {
    code: 'chicken-pastry',
    title: 'Chicken Pastry',
    shortTitle: 'Chicken Pastry',
    description: [
      'A classic everyone loves, taken to the next level. Fresh chicken, hand-shredded and seasoned with herbs and spices that highlight its tenderness and juiciness. Combined with a golden, crunchy crust, it becomes a light, flavorful, and absolutely irresistible pastry.',
    ],
    image: shreddedChickenEmpanada,
    url: '/shredded-chicken-empanada',
    price: 0,
  },
  {
    code: 'cheese-arepa',
    title: 'Cheese Arepa',
    shortTitle: 'Cheese Arepa',
    description: [
      'Slowly grilled to perfection, crispy on the outside and soft on the inside. When you break it open, the cheese melts and stretches, releasing an irresistible aroma that turns every bite into pure pleasure.',
    ],
    image: slowSookedBeefEmpanada,
    url: '/slow-cooked-beef-empanada',
    price: 0,
  },
  {
    code: 'meat-patty',
    title: 'Meat Patty',
    shortTitle: 'Meat Patty',
    description: [
      'Slowly grilled to perfection, crispy on the outside and soft on the inside. When you break it open, the cheese melts and stretches, releasing an irresistible aroma that turns every bite into pure pleasure.',
    ],
    image: slowSookedBeefEmpanada,
    url: '/slow-cooked-beef-empanada',
    price: 0,
  },
  {
    code: 'stuffed-potato',
    title: 'Stuffed Potato',
    shortTitle: 'Stuffed Potato',
    description: [
      'Creamy, delicately seasoned potato filled with juicy, well-seasoned beef, sealed in a golden, crispy exterior that locks in all the flavor. A timeless classic that wins you over from the very first bite.',
    ],
    image: slowSookedBeefEmpanada,
    url: '/slow-cooked-beef-empanada',
    price: 0,
  },
];
