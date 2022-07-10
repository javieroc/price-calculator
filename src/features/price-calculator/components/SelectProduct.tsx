import { Flex, Heading, VStack } from '@chakra-ui/react';
import { Product } from '../types';
import IceCreamImage from '../../../assets/ice-cream.png';
import PizzaImage from '../../../assets/pizza.png';
import { ProductCard } from './ProductCard';

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

function SelectProduct(): JSX.Element {
  return (
    <VStack marginTop={8}>
      <Heading fontSize="3xl">Select SKU</Heading>
      <Flex gap={8} justify="center">
        {products.map((product) => <ProductCard product={product} key={product.sku} />)}
      </Flex>
    </VStack>
  );
}

export { SelectProduct };
