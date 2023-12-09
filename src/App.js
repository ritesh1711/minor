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
import Speaker from './product/Speaker';
import Projectors from './product/Projectors';
import Monitors from './product/Monitors';
import Microwave from './product/Microwave';
import Iron from './product/Iron';
import Gyser from './product/Gyser';
import Fans from './product/Fans';
import Desktops from './product/Desktops';
import Wearables from './product/Wearables';
import Water from './product/Water';
import Vacuum from './product/Vacuum';
import Toaster from './product/Toaster';







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
            <Route path="/Speaker" element={<Speaker />} />
            <Route path="/Projectors" element={<Projectors />} />
            <Route path="/Monitors" element={<Monitors />} />
            <Route path="/Microwave" element={<Microwave />} />
            <Route path="/Iron" element={<Iron />} />
            <Route path="/Gyser" element={<Gyser />} />
            <Route path="/Fans" element={<Fans />} />
            <Route path="/Desktops" element={<Desktops />} />
            <Route path="/Wearables" element={<Wearables />} />
            <Route path="/Water" element={<Water />} />
            <Route path="/Vacuum" element={<Vacuum />} />
            <Route path="/Toaster" element={<Toaster />} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
