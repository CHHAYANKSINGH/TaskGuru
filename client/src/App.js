import './App.css';
import Signup from './Component/Logiin&Signup/signup';
import Login from './Component/Logiin&Signup/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Sidebar from './Component/DashBoard/SideBar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='signup' element={<Signup />} />
        <Route path='/' element={<Sidebar />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
