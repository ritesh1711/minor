import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ imageUrl, altText, category, linkTo }) => (
  <div className='bg-red-600' style={{ position: 'relative' }}>
    <img
      src={imageUrl}
      alt={altText}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '24px' }}>
      <div className='text-4xl pb-56 font-bold pt-8'>
        {category}
      </div>
      <Link to={linkTo}>
        <div className='pl-4'>
          <button className='bg-red-600 rounded text-2xl font-bold w-40 h-12 pl-4 pb-10'>VIEW MORE</button>
        </div>
      </Link>
    </div>
  </div>
);

export default function Products() {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Laptop'
          category='LAPTOPS'
          linkTo='/laptop'
        />

        <ProductCategory
          imageUrl='https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Mobile'
          category='MOBILE PHONES'
          linkTo='/phones'
        />

        <ProductCategory
          imageUrl='https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Television'
          category='TELEVISIONS'
          linkTo='/Tv'
        />
      </div>

      <div className='flex flex-row justify-between'>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1520783155484-157cf5431a06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Washing Machines'
          category='Washing Machines'
          linkTo='/washing' // Removed the space in the link
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1551728365-5718e375630e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Refrigerator'
          category='Refrigerator'
          linkTo='/Refrigerator'
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1522202801620-eb6f71f5bf05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Tablets'
          category='Tablets'
          linkTo='/Tablets'
        />
      </div>
    </div>
  );
}
