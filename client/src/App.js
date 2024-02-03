// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup'; // Import the Signup component
import Login from './login'; // Import the Signup component
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
