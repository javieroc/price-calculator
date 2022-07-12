import {
  Heading, Image, useColorModeValue, VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props): JSX.Element {
  const { icon, name, sku } = product;
  return (
    <Link to={`/${sku}`}>
      <VStack
        justify="center"
        padding={2}
        borderColor={useColorModeValue('gray.900', 'gray.300')}
        borderWidth={4}
        borderRadius={4}
        width="200px"
        height="200px"
      >
        <Image boxSize={28} src={icon} alt={name} />
        <Heading fontSize="2xl">{name}</Heading>
      </VStack>
    </Link>
  );
}

export { ProductCard };
