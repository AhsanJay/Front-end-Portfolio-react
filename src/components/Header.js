// src/components/Header.js
import React from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DownloadCVButton from './CVbutton';

function Header() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" justify="space-between">
        <Heading color="white">Hasan's Portfolio</Heading>
        <Flex align="center"  justify="center" gap={3}>

          <DownloadCVButton />
          <Button as={RouterLink} to="/contact" colorScheme="white" variant="outline">
            Contact Me
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
