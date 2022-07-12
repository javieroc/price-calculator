import { Formik, Field, FieldProps } from 'formik';
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
  Checkbox,
  HStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import {
  Cheese, Crust, FrozenPizzaPayload, Toppings,
} from '../types';
import { CONSTANTS } from '../constants';
import { Utils } from '../utils';

const schema: Yup.SchemaOf<FrozenPizzaPayload> = Yup.object().shape({
  diameter: Yup.number().min(0).required('Required'),
  quantity: Yup.number().min(0).required('Required'),
  toppings: Yup.array().required('Required'),
  cheese: Yup.mixed<Cheese>().oneOf(CONSTANTS.CHEESES).required('Required'),
  crust: Yup.mixed<Crust>().oneOf(CONSTANTS.CRUSTS).required('Required'),
});

interface Props {
  onSubmit: (values: FrozenPizzaPayload) => void
}

function FrozenPizzaForm({ onSubmit }: Props): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <VStack>
      <Heading fontSize="xl">Frozen Pizza form</Heading>
      <Box
        padding={4}
        borderColor={useColorModeValue('gray.900', 'gray.300')}
        borderWidth={4}
        borderRadius={4}
        rounded={4}
        width="full"
      >
        <Formik<FrozenPizzaPayload>
          initialValues={{
            diameter: Number.parseFloat(searchParams.get('diameter') ?? '0'),
            quantity: Number.parseFloat(searchParams.get('quantity') ?? '0'),
            toppings: searchParams.get('toppings')?.split(',') as Toppings[] ?? [],
            cheese: searchParams.get('cheese') as Cheese ?? 'Vegan',
            crust: searchParams.get('crust') as Crust ?? 'Cauliflower',
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
              <VStack align="center">
                <HStack align="flex-start">
                  <VStack spacing={4} align="flex-start" width="96">
                    <FormControl isInvalid={!!errors.diameter && touched.diameter}>
                      <FormLabel htmlFor="diameter">Diameter in Inches</FormLabel>
                      <Field
                        as={Input}
                        id="diameter"
                        name="diameter"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.diameter}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.quantity && touched.quantity}>
                      <FormLabel htmlFor="diameter">Quantity</FormLabel>
                      <Field
                        as={Input}
                        id="quantity"
                        name="quantity"
                        variant="filled"
                      />
                      <FormErrorMessage>{errors.quantity}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.cheese && touched.cheese}>
                      <FormLabel htmlFor="cheese">Cheese</FormLabel>
                      <Field as={Select} name="cheese" variant="filled">
                        {CONSTANTS
                          .CHEESES
                          .map((cheese) => <option key={cheese} value={cheese}>{cheese}</option>)}
                      </Field>
                      <FormErrorMessage>{errors.cheese}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.crust && touched.crust}>
                      <FormLabel htmlFor="crust">Crust</FormLabel>
                      <Field as={Select} name="crust" variant="filled">
                        {CONSTANTS
                          .CRUSTS
                          .map((crust) => <option key={crust} value={crust}>{crust}</option>)}
                      </Field>
                      <FormErrorMessage>{errors.crust}</FormErrorMessage>
                    </FormControl>
                  </VStack>

                  <FormControl isInvalid={!!errors.toppings && touched.toppings} width="72">
                    <FormLabel htmlFor="toppings">Toppings</FormLabel>
                    <Field name="toppings">
                      {({ field }: FieldProps) => {
                        const { onChange, value, ...rest } = field;

                        return (
                          <VStack align="flex-start">
                            {CONSTANTS.TOPPINGS.map(
                              (topping) => (
                                <Checkbox
                                  {...rest}
                                  isChecked={!!value.includes(topping)}
                                  onChange={onChange}
                                  key={topping}
                                  value={topping}
                                >
                                  {topping}
                                </Checkbox>
                              ),
                            )}
                          </VStack>
                        );
                      }}
                    </Field>
                    <FormErrorMessage>{errors.toppings}</FormErrorMessage>
                  </FormControl>
                </HStack>
                <Button type="submit" colorScheme="purple" alignSelf="flex-end">
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

export { FrozenPizzaForm };
