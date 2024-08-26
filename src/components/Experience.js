import React from 'react'
import { Text, Heading } from '@chakra-ui/react'

const Experience = () => {
    return (
        <>
            <Heading as="h1" size="xl" mb={2} mt={6}>Experience</Heading>
            <Text p={4} bg="teal.500" color='white' borderRadius='8'>
                <b>• Designed and developed responsive,</b> interactive, and user-focused front-end interfaces for multiple U.S.
                hospital systems, ensuring adherence to industry standards and best practices. <br />
                <b>• Led front-end development for two major banking applications,</b> including the creation and enhancement of
                UIs, notably contributing to the OBDX UI development project. <br />
                <b>• Collaborated closely with back-end developers,</b>project managers, and UX/UI designers to deliver seamless
                user experiences, resulting in a 20% increase in user satisfaction across client projects. <br />
                <b>• Implemented Bootstrap and custom CSS to establish consistent and scalable design systems,</b> achieving a
                30% reduction in development time. <br />
                <b>• Utilized Knockout.js to build dynamic, data-driven web applications,</b> enhancing the performance and
                interactivity of client projects.
            </Text>
        </>
    )
}

export default Experience
