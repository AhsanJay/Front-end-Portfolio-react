// src/components/Header.js
import React from 'react';
import { Flex, Heading, Box, Button, Collapse, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DownloadCVButton from './CVbutton';

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="teal.500" p={4} shadow="md">
      <Flex align="center" justify="space-between" wrap="wrap">
        <Heading as={RouterLink} to="/" color="white" fontSize={{ base: 'lg', md: 'xl' }} mb={{ base: 2, md: 0 }}>
          Hasan's Portfolio
        </Heading>

        <Flex align="center" gap={3} direction={{ base: 'column', md: 'row' }}>
          {isSmallScreen && (
            <Button
              onClick={onToggle}
              colorScheme="white"
              variant="outline"
              display={{ base: 'inline-block', md: 'none' }}
              mb={{ base: 2, md: 0 }} // No hover effect on small screens
            >
              {isOpen ? 'Close Menu' : 'Menu'}
            </Button>
          )}

          <Flex
            display={{ base: 'none', md: 'flex' }}
            align="center"
            gap={3}
          >
            <DownloadCVButton />
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="white"
              variant="outline"
            >
              Contact Me
            </Button>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box
            p={4}
            display={{ base: 'block', md: 'none' }}
            bg="teal.600"
            color="white"
            mt={2}
            borderRadius="md"
            shadow="md"
          >
            <Flex direction="column" gap={3}>
              <DownloadCVButton />
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="white"
                variant="outline"
              >
                Contact Me
              </Button>
            </Flex>
          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
}

export default Header;
