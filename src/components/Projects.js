// src/components/Projects.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Link, Button } from '@chakra-ui/react';

const projects = [
  {
    title: 'Project One',
    description: 'A project description goes here.',
    url: '#'
  },
  {
    title: 'Project Two',
    description: 'A project description goes here.',
    url: '#'
  },
  // Add more projects here
];

function Projects() {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Projects</Heading>
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
  );
}

export default Projects;
