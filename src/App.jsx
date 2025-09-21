import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Payment from './components/Payment';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AppContent = () => {
  const location = useLocation();
  const hideLayoutRoutes = ['/register'];

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      {!hideLayoutRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        {/* <Route path='/register' element={<Register/>}/> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      {!hideLayoutRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
