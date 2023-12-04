import React, { useEffect, useState } from 'react';

export default function Laptop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://digi-express-homepage-api.onrender.com/product');

        if (!response.ok) {
          // Log the response status and message
          console.error('Failed to fetch products. Status:', response.status, response.statusText);
          return;
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        // Log any other exceptions that might occur
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className='text-center font-extrabold text-3xl'>LAPTOPS</h2>
      {products && (
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            product.category === "laptop" ? (
              <div key={product._id} className="p-24">
                <img
        src={product.image}
        className="h-48 w-48 mx-auto"
        
      />
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>{product.model}</p>
                <p>{product.price}</p>
              </div>
            ) : null
          ))}
        </div>
      )}
    </div>
  );
}
