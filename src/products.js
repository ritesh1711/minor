import React from 'react';

export default function Products() {
  return (
    <div className='flex flex-row justify-between'>
      <div className='bg-red-600' style={{ position: 'relative' }}>
        <img
          src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Laptop'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '24px' }}>
          <div className='text-4xl pb-56 font-bold'>
            LAPTOPS
          </div>
          <div className='pl-4'>
            <button className='bg-red-600 rounded text-2xl font-bold w-40 h-12 pl-4'>VIEW MORE</button>
          </div>
        </div>
      </div>

      <div className='bg-red-600' style={{ position: 'relative' }}>
        <img
          src='https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Mobile'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '24px' }}>
          <div className='text-4xl pb-48 pr-10 font-bold pl-12'>
            MOBILE PHONES
          </div>
          <div className='pl-10 pb-8 pt-4'>
            <button className='bg-red-600 rounded text-2xl font-bold w-40 h-12 pl-4 '>VIEW MORE</button>
          </div>
        </div>
      </div>

      <div className='bg-red-600' style={{ position: 'relative' }}>
        <img
          src='https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Television'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '24px' }}>
          <div className='text-4xl pb-56 font-bold pl-6'>
            TELEVISIONS
          </div>
          <div className='pl-4'>
            <button className='bg-red-600 rounded text-2xl font-bold w-40 h-12 pl-4'>VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
