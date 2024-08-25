// src/components/Contact.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, Alert, AlertIcon } from '@chakra-ui/react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://backend-port-mu.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };
  

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>Contact Me</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="teal" isFullWidth>Send Message</Button>
      </form>
      {status && (
        <Alert status={status.includes('successfully') ? 'success' : 'error'} mt={4}>
          <AlertIcon />
          {status}
        </Alert>
      )}
    </Box>
  );
}

export default Contact;
