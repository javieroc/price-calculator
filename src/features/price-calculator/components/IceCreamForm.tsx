import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Select,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { Flavor, IceCreamPayload } from '../types';
import { CONSTANTS } from '../constants';
import { Utils } from '../utils';

const schema: Yup.SchemaOf<IceCreamPayload> = Yup.object().shape({
  volume: Yup.number().min(0).required('Required'),
  flavor: Yup.mixed<Flavor>()
    .oneOf(['Chocolate', 'Vanilla', 'Strawberry', 'Neapolitan'])
    .required('Required'),
  milk: Yup.number().min(0).required('Required'),
});

interface Props {
  onSubmit: (values: IceCreamPayload) => void
}

function IceCreamForm({ onSubmit }: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <VStack>
      <Heading fontSize="xl">Ice Cream form</Heading>
      <Box
        width="72"
        padding={4}
        borderColor={useColorModeValue('gray.900', 'gray.300')}
        borderWidth={4}
        borderRadius={4}
        rounded={4}
      >
        <Formik<IceCreamPayload>
          initialValues={{
            volume: Number.parseFloat(searchParams.get('volume') ?? '0'),
            flavor: searchParams.get('flavor') as Flavor ?? 'Chocolate',
            milk: Number.parseFloat(searchParams.get('milk') ?? '2.12'),
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            const params = Utils.serializeFormQuery(values);
            setSearchParams(params);
            onSubmit(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.volume && touched.volume}>
                  <FormLabel htmlFor="volume">Volume in Gallons</FormLabel>
                  <Field
                    as={Input}
                    id="volume"
                    name="volume"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.volume}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.flavor && touched.flavor}>
                  <FormLabel htmlFor="flavor">Flavor</FormLabel>
                  <Field as={Select} name="flavor" variant="filled">
                    {CONSTANTS
                      .FLAVORS
                      .map((flavor) => <option key={flavor} value={flavor}>{flavor}</option>)}
                  </Field>
                  <FormErrorMessage>{errors.flavor}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.milk && touched.milk}>
                  <FormLabel htmlFor="volume">Wholesale Milk Cost per Gallon </FormLabel>
                  <Field
                    as={Input}
                    id="milk"
                    name="milk"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.milk}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Calculate
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}

export { IceCreamForm };
