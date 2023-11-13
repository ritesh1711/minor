import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className='bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-500 sm:h-36 md:h-48 lg:h-64'>
        <div className='container mx-auto flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-white text-2xl font-bold'>Logo</div>

            <div className='flex flex-row space-x-4 pt-4 sm:pt-12'>
              <div className='text-white text-lg font-bold'>Home</div>
              <div className='text-white text-lg font-bold'>Cart</div>
              <div className='text-white text-lg font-bold'>Login/Signup</div>
            </div>
          </div>

          <div className="flex justify-center pt-4 sm:pt-8">
            <input
              type="text"
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Search..."
            />
            <button className="bg-yellow-400 text-white px-4 py-1 rounded-r hover:bg-blue-700 focus:outline-none">
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
