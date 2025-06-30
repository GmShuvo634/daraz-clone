import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';
import { TopBar } from '../components/Header/TopBar';
import { Navbar } from '../components/Header/Navbar';
import { Footer } from '../components/Footer/Footer';
import { sampleReviews } from '../data/reviews';
import { mallProducts, justForYouProducts } from '../data/products';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find product from both arrays
  const allProducts = [...mallProducts, ...justForYouProducts];
  const product = allProducts.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Enhanced product data for demo
  const enhancedProduct = {
    ...product,
    images: [
      product.image,
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop'
    ],
    description: 'This premium sports watch combines style and functionality with water resistance and LED display. Perfect for active lifestyles and outdoor adventures. Features include multiple time zones, stopwatch, alarm, and durable construction.',
    specifications: {
      'Brand': 'Arctic Hunter',
      'Model': '4-in-1 Waterproof Travel Duffel',
      'Material': 'Nylon',
      'Water Resistance': 'Yes',
      'Color Options': 'Black, Navy, Gray',
      'Dimensions': '50cm x 30cm x 25cm',
      'Weight': '1.2kg',
      'Warranty': '1 Year'
    },
    variants: ['Black', 'Navy', 'Gray'],
    inStock: true,
    stockCount: 15,
    rating: 4.4,
    reviewCount: 156
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      <ProductDetails
        product={enhancedProduct}
        reviews={sampleReviews}
        onBack={() => navigate('/')}
      />
      <Footer />
    </div>
  );
};