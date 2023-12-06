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
import Phones from './product/phones'; // Corrected the component name

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/phones" element={<Phones />} /> {/* Corrected the component name */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
