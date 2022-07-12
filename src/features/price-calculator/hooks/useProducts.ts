import { Product } from '../types';
import IceCreamImage from '../../../assets/ice-cream.png';
import PizzaImage from '../../../assets/pizza.png';

function useProducts() {
  const products: Product[] = [
    {
      icon: IceCreamImage,
      name: 'Ice Cream',
      sku: 'ice-cream',
    },
    {
      icon: PizzaImage,
      name: 'Frozen Pizza',
      sku: 'frozen-pizza',
    },
  ];

  const getProduct = (sku: string) => products.find((product) => product.sku === sku);

  return { products, getProduct };
}

export { useProducts };
