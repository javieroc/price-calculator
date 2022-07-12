import { Flex, Heading } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCalculate } from '../hooks';
import { SKU } from '../types';
import { FrozenPizzaForm } from './FrozenPizzaForm';
import { IceCreamForm } from './IceCreamForm';

function ProductForm(): JSX.Element {
  const { sku } = useParams<{ sku: SKU }>();
  const [result, setResult] = useState('');

  const calculate = useCalculate(sku ?? 'ice-cream');

  const forms: Record<SKU, ReactElement> = {
    'ice-cream': <IceCreamForm onSubmit={(values) => {
      setResult(calculate(values).toFixed(2));
    }}
    />,
    'frozen-pizza': <FrozenPizzaForm onSubmit={(values) => {
      setResult(calculate(values).toFixed(2));
    }}
    />,
  };

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      marginTop={8}
    >
      {forms[sku ?? 'ice-cream']}
      <Heading fontSize="3xl">
        Result
        {' '}
        {result}
      </Heading>
    </Flex>
  );
}

export { ProductForm };
