// Signup.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';

const Signup = () => {
  const [validationErrors, setValidationErrors] = useState([]);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
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
      setValidationErrors([]);
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!formData.email) {
        setValidationErrors((errors) => [...errors, 'Email is required']);
      } else if (!emailRegex.test(formData.email)) {
        setValidationErrors((errors) => [...errors, 'Email does not appear to be a valid email address']);
      }

      if (!formData.username) {
        setValidationErrors((errors) => [...errors, 'Username is required']);
      }

      if (!formData.password) {
        setValidationErrors((errors) => [
          ...errors,
          'Password required',
          "Password Can't be blanked",
        ]);
      }

      if (!formData.number || formData.number.length !== 10) {
        setValidationErrors((errors) => [...errors,
          'Number Required',
          'Number should be 10 digits',
        ]);
      }

      if (validationErrors.length > 0) {
        return;
      }

      const response = await axios.post('http://localhost:8001/createaccount', {
        email: formData.email,
        password: formData.password,
        username: formData.username,
        number: formData.number,
      });

      if (response && response.data) {
        console.log('Signup successful!', response.data);
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
    }
  };



  return (
    <Wrapper>

      {validationErrors.length > 0 && (
        <div className='create_error col-lg-3'>
          <h2 className='create_error_title d-flex'>
            <span>
              <i className='fa-solid fa-exclamation me-2'></i>
            </span>
            There was an error processing your signup
          </h2>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

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
          <Form.Group className='mb-3' controlId="formnumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your number"
              name="number"
              value={formData.number}
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
display: flex;
justify-content: space-around;
margin-top: 3%;
   .login-form{
      /* margin: 0 auto; */
      /* margin-top: 10%; */
      border: 1px solid #e1e1e1;
      padding: 20px;
      border-radius: 10px;
    }
    .create_content_right{
      margin-top: 1.5rem;
    }
    .create_content_right h3{
      color: #000;
      font-weight: 600;
      font-size: 1.6rem;
    }
    .create_content_right p{
      color: #000;
    }
    .create_error{
      box-shadow: 0 2px 8px rgba(0,0,0,.1);
      overflow: hidden;
      height: 100%;
    margin-bottom: 30px;
    border: rgba(227,227,227);
    border-radius: 8px;
}

.create_error_title{
    align-items: center;
    color: #fff;
    background-color: rgba(212,2,66);
    padding: 10px 20px;
    font-size: 1.2rem;
}
.create_error li{
    list-style-type: disc;
}
`

export default Signup;
