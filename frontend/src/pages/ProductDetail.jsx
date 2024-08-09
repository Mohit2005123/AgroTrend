import React from 'react';
import { useParams } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <MyNavbar />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">{product.price}</p>
            
            {/* Additional Details */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Additional Details:</h3>
              <p className="text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
              <p className="text-gray-600 mb-2"><strong>Stock:</strong> {product.stock} available</p>
              <p className="text-gray-600 mb-2"><strong>Condition:</strong> {product.condition}</p>
              <p className="text-gray-600 mb-2"><strong>Manufacturer:</strong> {product.manufacturer}</p>
              <p className="text-gray-600 mb-2"><strong>SKU:</strong> {product.sku}</p>
            </div>

            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Chat with the Seller
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
