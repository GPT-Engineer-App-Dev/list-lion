import { Flex, Box, Link, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex as="nav" bg="blue.500" color="white" align="center" justify="space-between" p={3} wrap="wrap">
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="lg" fontWeight="bold">Todo App</Text>
        </Link>
      </Box>
      <Box display={isLargerThan768 ? 'flex' : 'none'} alignItems="center">
        <Link as={RouterLink} to="/" p={2}>Home</Link>
        <Link as={RouterLink} to="/about" p={2}>About</Link>
        <Link as={RouterLink} to="/contact" p={2}>Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;