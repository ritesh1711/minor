import React from 'react';
import logo from './DiGi eXpress (2).png'; // Adjust the image filename based on your actual filename

const Navbar = () => {
  return (
    <div>
      <header className='bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-500 sm:h-36 md:h-38 lg:h-38'>
        <div className='container mx-auto flex flex-row'>
          <div className='flex flex-row justify-between items-center'>
            <div className='ml-12 mt-7'>
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-24" // Set the height and width according to your design
              />
            </div>


            <div className="flex justify-center sm:pt-8 pr-10 lg:pt-5  lg:pl-96">
            <input
              type="text"
              className=" sm:w-1/2 md:w-1/3 lg:w-96 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Search..."
            />
            <button className="bg-yellow-400 text-white px-4 py-1 rounded-r hover:bg-blue-700 focus:outline-none">
              Search
            </button>
          </div>

            <div className='flex flex-row space-x-4 pt-4 sm:pt-5 lg:pl-56 '>
              <div className='text-white text-lg font-bold'>Home</div>
              <div className='text-white text-lg font-bold'>Cart</div>
              <div className='text-white text-lg font-bold'>Login/Signup</div>
            </div>
          </div>

          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
