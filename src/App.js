// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Box>
        <Header />
        <Container maxW="container.lg" mt={10}>
          <VStack spacing={8}>
            <Routes>
              <Route path="/" element={<><Skills /><Projects /></>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </VStack>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
