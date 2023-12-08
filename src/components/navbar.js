import React from 'react';
import logo from './DiGi eXpress (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>
      <header className='bg-black sm:h-36 md:h-38 lg:h-38'>
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
          <div className='flex items-center justify-center sm:justify-start'>
            <img src={logo} alt="Logo" className="h-36 w-40" />
            <div className='text-4xl text-white font-extrabold pl-5 pt-5'>
              <i>DiGiexpress</i>
            </div>
          </div>

          <Link to="/products" className='text-3xl text-red-700 hover:text-cyan-300'>
              <button className="focus:outline-none">
                Menu
              </button>
            </Link>

          <div className="flex justify-center sm:justify-end sm:pt-8 pr-10 lg:pt-5 lg:pl-64">
            <input
              type="text"
              className="w-full sm:w-64 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Search..."
            />
            <button className="bg-yellow-400 text-white px-4 py-1 ml-2 rounded hover:bg-blue-700 focus:outline-none">
              Search
            </button>
          </div>

          <div className='flex flex-row space-x-4 pt-4 sm:pt-5 lg:pl-4'>
            <Link to="/" className='text-3xl text-red-700 hover:text-cyan-300'>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </Link>
            <Link to="/cart" className='text-3xl text-red-700 hover:text-cyan-300'>
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </Link>
            <Link to="/register" className='text-3xl text-red-700 hover:text-cyan-300'>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </Link>

            {/* Add the button for navigating to the product listing page */}
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
