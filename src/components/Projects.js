// src/components/Projects.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Link, Button } from '@chakra-ui/react';

const projects = [
  {
    title: 'Banking Application UI Development ',
    description: 'Developed and enhanced UIs for two banking applications, including a project focused on OBDX UI creation. Integrated responsive design techniques to ensure optimal performance across devices and platforms. ',
    url: '#'
  },
  {
    title: 'Hospital System Web Applications',
    description: 'Designed and implemented front-end interfaces for US hospital systems, focusing on usability, accessibility, and performance. Worked closely with stakeholders to deliver custom features tailored to client needs.',
    url: '#'
  },
  // Add more projects here
];

function Projects() {
  return (
    <>
      <Heading as="h3" size="xl" mb={4} mt={6} >Projects</Heading>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {projects.map((project, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{project.title}</Heading>
              <Text mt={4}>{project.description}</Text>
              <Link href={project.url} isExternal>
                <Button mt={4} colorScheme="teal">View Project</Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Projects;
