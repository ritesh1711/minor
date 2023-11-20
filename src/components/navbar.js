import React from 'react';
import logo from './DiGi eXpress (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className='bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-500 sm:h-36 md:h-38 lg:h-38'>
        <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
          <div className='flex items-center justify-center sm:justify-start'>
            <img src={logo} alt="Logo" className="h-24 w-24" />
            <div className='text-4xl font-extrabold pl-5 pt-5'>
              <i>DiGiexpress</i>
            </div>
          </div>

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
            <div className='text-3xl hover:text-cyan-300'>
              <FontAwesomeIcon icon={faHome} className="icon" />
            </div>
            <div className='text-3xl hover:text-cyan-300'>
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </div>
            <div className='text-3xl hover:text-cyan-300'>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
