// Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <Wrapper>
      <div className="login-form col-lg-3">
        <h2 className='text-center'>Login</h2>
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
            Login
          </Button>
          <Button href='/register' className='ms-2' variant="primary" type="submit">
            Signup
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
export default Login;
