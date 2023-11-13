import React from 'react'

export default function navbar() {
  return (
    <div>
      <header className='bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-500 h-36'>
        <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div>logo</div>

          <div className='flex flex-row justify-between pt-12'>
            <div className='pr-20 text-4xl font-extrabold'>home</div>
            <div className='pr-20 text-4xl font-extrabold'>products</div>
            <div className='pr-20 text-4xl font-extrabold'>cart</div>
            <div className='pr-20 text-4xl font-extrabold'>login</div>
            <div className='pr-20 text-4xl font-extrabold'>signup</div>
          </div>

        </div>
        <div >
        <div className="flex-1 text-center pt-3">
          <input
            type="text"
            className="w-1/4 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 "
            placeholder="Search..."/>
          <button className="bg-yellow-400 text-white px-4 py-1 rounded-r hover:bg-blue-700 focus:outline-none">
            Search
          </button> 
        </div>
        </div>
        </div>
      </header>
    </div>
  )
}
