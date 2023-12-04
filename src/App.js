import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login'; // assuming this is your login component
import Products from './products';
import Laptop from './product/laptop';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/laptop" element={<Laptop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
