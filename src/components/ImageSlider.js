import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';

const images = [
  { src: image1, alt: 'Slide 1' },
  { src: image2, alt: 'Slide 2' },
  { src: image3, alt: 'Slide 3' },
  { src: image4, alt: 'Slide 4' }
];

const ImageSlider = () => {
  const settings = {
    dots: true,               
    infinite: true,          
    speed: 500,              
    slidesToShow: 1,          
    slidesToScroll: 1,       
    arrows: false,            
    autoplay: true,           
    autoplaySpeed: 5000,     
  };

  return (
    <Box maxW="full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} position="relative">
            <Image
              src={image.src}
              alt={image.alt}
              objectFit="cover"
              boxSize="full"
              h="auto"
              maxH="calc(100vh - 100px)" 
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
