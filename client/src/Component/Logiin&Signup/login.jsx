// Login.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data === 'exist') {
        console.log('Login successful!', response.data);
        navigate('/')
      } else {
        console.error('Invalid password:', response);
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
  };

  return (
    <Wrapper>
      <div className="login-form col-lg-3">
        <h2 className='text-center'>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId="formemail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
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
            Login
          </Button>
          <Button href='/' className='ms-2' variant="primary" type="submit">
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
`;

export default Login;
