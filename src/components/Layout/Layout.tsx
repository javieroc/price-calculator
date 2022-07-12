import {
  Box,
  IconButton,
  Flex,
  Heading,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
      <Flex
        bg={useColorModeValue('white', 'gray.900')}
        justify="space-between"
        borderBottomWidth="2px"
        borderBottomColor={useColorModeValue('yellow.300', 'gray.700')}
        padding={2}
      >
        <Link to="/">
          <Heading
            fontSize="3xl"
          >
            Price Calculator
          </Heading>
        </Link>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Color toggle"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
}

export { Layout };
