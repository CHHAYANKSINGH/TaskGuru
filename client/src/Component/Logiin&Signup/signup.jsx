// Signup.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

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
      const response = axios.post('http://localhost:3001/register', formData);
      console.log('Signup successful!', response.data);
    } catch (error) {
      console.error('Error during signup:', error.response.data);
    }
  };

  return (
    <Wrapper>
      <div className="login-form col-lg-3">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId="formPassword">
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
          <Button variant="primary" className='ms-2' href="/login" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
   .login-form{
      margin: 0 auto;
      margin-top: 10%;
      border: 1px solid #e1e1e1;
      padding: 20px;
      border-radius: 10px;
  }
`

export default Signup;
