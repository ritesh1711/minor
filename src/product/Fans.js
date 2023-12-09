import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

// Set the root element for accessibility
// eslint-disable-next-line no-unused-vars
const modalAppElement = Modal.setAppElement('#root');

export default function Fans() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://digi-express-homepage-api.onrender.com/product');

        if (!response.ok) {
          console.error('Failed to fetch products. Status:', response.status, response.statusText);
          setLoading(false);
          return;
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Product added to cart: ${productId}`);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center font-extrabold text-4xl mb-8">Fans</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products && products.map((product, index) => (
            product.category === 'Fans' ? (
              <motion.div
                key={product._id}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={product.image}
                  className="h-48 w-48 mx-auto mb-4 object-contain"
                  alt={product.name}
                />
                <p className="text-xl font-semibold mb-2">{product.name}</p>
                <p className="text-gray-600 mb-2">{product.brand}</p>
                <p className="text-gray-600 mb-2">{product.model}</p>
                <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleAddToCart(product._id)}
                >
                  Add to Cart
                </button>
                <button
                  className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => openModal(product)}
                >
                  View Specifications
                </button>
              </motion.div>
            ) : null
          ))}
        </div>
      )}

      {/* Modal for Specifications */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Specifications"
      >
        {selectedProduct && (
          <div className="flex flex-row">
            <div>
              <h2 className="text-xl font-semibold mb-4">{selectedProduct.name} Specifications</h2>
              <p><strong>Brand:</strong> {selectedProduct.brand}</p>
              <p><strong>Model:</strong> {selectedProduct.model}</p>
              <p><strong>Price:</strong> {selectedProduct.price}</p>
              <p><strong>Specifications:</strong> {selectedProduct.specifications}</p>
              <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
                Close
              </button>
            </div>
            <div>
              <img
                src={selectedProduct.image}
                className="h-48 w-48 mx-auto mb-4 object-contain"
                alt={selectedProduct.name}
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
