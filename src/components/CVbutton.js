import React from 'react';
import { Button } from '@chakra-ui/react';

function DownloadCVButton() {
  return (
    <Button 
      as="a"
      href="/cv.pdf"
      download="My_CV.pdf"
      colorScheme="white"
      variant="outline"
    >
      Download CV
    </Button>
  );
}

export default DownloadCVButton;
