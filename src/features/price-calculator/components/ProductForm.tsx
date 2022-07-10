import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function ProductForm(): JSX.Element {
  const { sku } = useParams<{ sku: string }>();

  return (
    <Heading>{sku}</Heading>
  );
}

export { ProductForm };
