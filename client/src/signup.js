// Signup.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // If using Bootstrap components
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Replace the URL with your actual signup endpoint
      const response = axios.post('http://localhost:3001/register', formData);
      console.log('Signup successful!', response.data);
      // You can handle the success response here (e.g., redirect to another page)
    } catch (error) {
      console.error('Error during signup:', error.response.data);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <a href="/login">Login</a>
    </div>
  );
};

export default Signup;
