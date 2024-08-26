import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

function Intro() {
  return (
    <>
      <Heading as="h1" size="xl" mb={2} mt={4}>Summary</Heading>
        <Box p={4} borderWidth={2} borderRadius="md" shadow="md" maxW="960px" mx="auto">
            <Text>
                Innovative and results-driven Front-End Engineer with over two years of professional experience, specializing in HTML,
                CSS, JavaScript, Bootstrap, jQuery, and Knockout.js. Proven track record of delivering pixel-perfect, user-friendly
                interfaces for various industries, including healthcare and banking. Adept at collaborating with cross-functional teams to
                translate client requirements into engaging, responsive, and accessible web applications.
            </Text>
        </Box>
    </>
  );
}

export default Intro;