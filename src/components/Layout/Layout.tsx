import {
  Box, Button, Flex, Heading, useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
      <Flex
        bg={useColorModeValue('white', 'gray.900')}
        justify="space-between"
        borderBottomWidth="2px"
        borderBottomColor={useColorModeValue('yellow.300', 'gray.700')}
        padding={2}
      >
        <Heading
          fontSize="3xl"
        >
          Logo
        </Heading>
        <Button>Toggle</Button>
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
}

export { Layout };
