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
        <div className='pl-4 pb-12'>
          <button className='bg-red-600 rounded-2xl text-2xl font-bold w-40 h-12 pl-4 '>VIEW MORE</button>
        </div>
      </Link>
    </div>
  </div>
);

export default function Products() {
  return (
    
    <div>
      <div className='flex flex-row justify-between rounded '>
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

      <div className='bg-black h-10'>
        hello
      </div>

      <div className='flex flex-row justify-between '>
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

      <div className='bg-black h-10'>
        hello
      </div>


      <div className='flex flex-row justify-between '>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Speaker and media players'
          category='Speaker and media players'
          linkTo='/Speaker' // Removed the space in the link
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Projectors'
          category='Projectors'
          linkTo='/Projectors'
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Monitors'
          category='Monitors'
          linkTo='/Monitors'
        />
      </div>

      <div className='bg-black h-10'>
        hello
      </div>

      <div className='flex flex-row justify-between  '>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1526868452228-6590028c2fac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Microwave and oven'
          category='Microwave and oven'
          linkTo='/Microwave' 
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Iron'
          category='Iron'
          linkTo='/Iron'
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1479669732031-affb2ce2d265?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Gyser'
          category='Gyser'
          linkTo='/Gyser'
        />
      </div>

      <div className='bg-black h-10'>
        hello
      </div>

      <div className='flex flex-row justify-between  '>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1590341758888-a5ac1fe37a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Fans'
          category='Fans'
          linkTo='/Fans' 
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1619597455322-4fbbd820250a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%Wearables'
          altText='Desktops'
          category='Desktops'
          linkTo='/Desktops'
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1511370235399-1802cae1d32f?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Wearables'
          category='Wearables'
          linkTo='/Wearables'
        />
      </div>

      <div className='bg-black h-10'>
        hello
      </div>

      <div className='flex flex-row justify-between  '>
        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1668548153847-da64d033ed09?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Water Purifiers'
          category='Water Purifiers'
          linkTo='/Water' 
        />

        <ProductCategory
          imageUrl='https://plus.unsplash.com/premium_photo-1664372899494-774422f7ce61?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Vacuum Cleaners'
          category='Vacuum Cleaners'
          linkTo='/Vacuum'
        />

        <ProductCategory
          imageUrl='https://images.unsplash.com/photo-1613221699807-4940ba9b83f4?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          altText='Toaster'
          category='Toaster'
          linkTo='/Toaster'
        />
      </div>




    </div>
  );
}
