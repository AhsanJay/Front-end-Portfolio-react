// src/components/Skills.js
import React from 'react';
import { Box, Heading, SimpleGrid, Text, Tag } from '@chakra-ui/react';

const skills = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Fundamental' },
  { name: 'SCSS', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Intermediate' },
  { name: 'Knockout.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'React.js', level: 'Intermediate' },
  { name: 'Angular.js', level: 'Basic' },
];

function Skills() {
  return (
    <>
      <Heading as="h3" size="xl" mb={4}>Skills</Heading>
      <Box>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={5}>
          {skills.map((skill, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize={{ base: 'lg', md: 'xl' }}>{skill.name}</Heading>
              <Text mt={4}>
                <Tag colorScheme="teal" >{skill.level}</Tag>
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Skills;
