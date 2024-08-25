// src/components/Skills.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Tag } from '@chakra-ui/react';

const skills = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'Tailwind CSS', level: 'Fundamental' },
  { name: 'SCSS', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Intermediate' },
  { name: 'Knockout.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'React.js', level: 'Advanced' },
  { name: 'Angular.js', level: 'Basic' },
];

function Skills() {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Skills</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {skills.map((skill, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{skill.name}</Heading>
            <Text mt={4}>
              <Tag colorScheme="teal">{skill.level}</Tag>
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Skills;
