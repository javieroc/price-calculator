import { Flex, Heading, VStack } from '@chakra-ui/react';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks';

function SelectProduct(): JSX.Element {
  const { products } = useProducts();
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
