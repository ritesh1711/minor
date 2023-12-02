import React, { useEffect, useState } from 'react';

export default function Products() {
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
    <div>
      <h2>Products</h2>
      <div>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
