// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ImageSlider from './components/ImageSlider';
import Intro from './components/Intro';
import Experience from './components/Experience';
import AdditionalEx from './components/AdditionalEx';
function App() {
  return (
    <Router>
      <Box>
        <Header />
        <ImageSlider />
        <Container maxW="container.xxl" mt={10}>
          <VStack spacing={8}>
            <Routes>
              <Route path="/" element={<>
              <Intro />
              <Experience />
              <Skills />
              <AdditionalEx />
              <Projects />
              </>} />
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
