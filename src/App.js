import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login'; 
import Products from './products';
import Laptop from './product/laptop';
import Tv from './product/tv';
import Phones from './product/phones';
import { CartProvider } from './components/contextreducer';
import Washing from './product/washing';
import Refrigerator from './product/Refrigerator';
import Tablets from './product/Tablets';



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/washing" element={<Washing />} />
            <Route path="/Refrigerator" element={<Refrigerator />} />
            <Route path="/Tablets" element={<Tablets />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
