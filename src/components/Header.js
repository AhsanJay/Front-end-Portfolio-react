// src/components/Header.js
import React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" justify="space-between">
        <Heading color="white">My Portfolio</Heading>
        <Button as={RouterLink} to="/contact" colorScheme="teal" variant="outline">
          Contact Me
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
