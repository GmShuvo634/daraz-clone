import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../types/product';

interface ProductInfoProps {
  product: Product & {
    description?: string;
    specifications?: Record<string, string>;
    variants?: string[];
    inStock?: boolean;
    stockCount?: number;
    rating?: number;
    reviewCount?: number;
  };
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || '');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    // You could add a toast notification here
  };

  const incrementQuantity = () => {
    if (product.stockCount && quantity < product.stockCount) {
      setQuantity(prev => prev + 1);
    } else if (!product.stockCount) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-xl md:text-2xl font-medium text-gray-800 leading-tight">
          {product.name}
        </h1>
        
        {/* Rating and Reviews */}
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= (product.rating || 4.4)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating || 4.4}
            </span>
          </div>
          <span className="text-sm text-blue-600 hover:underline cursor-pointer">
            {product.reviewCount || 156} Reviews
          </span>
          <span className="text-sm text-gray-500">|</span>
          <span className="text-sm text-gray-600">
            {product.inStock !== false ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-2xl md:text-3xl font-bold text-orange-600">
            ৳{product.price}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through">
                ৳{product.originalPrice}
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
        {product.originalPrice && (
          <p className="text-sm text-gray-600">
            You save: ৳{product.originalPrice - product.price}
          </p>
        )}
      </div>

      {/* Variants */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Color:</h3>
          <div className="flex space-x-2">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 border rounded-md text-sm transition-colors ${
                  selectedVariant === variant
                    ? 'border-orange-500 bg-orange-50 text-orange-600'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity:</h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={decrementQuantity}
                className="p-2 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="p-2 hover:bg-gray-100 transition-colors"
                disabled={product.stockCount ? quantity >= product.stockCount : false}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {product.stockCount && (
              <span className="text-sm text-gray-600">
                {product.stockCount} pieces available
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleAddToCart}
            disabled={product.inStock === false}
            className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Buy Now
          </button>
        </div>

        {/* Wishlist and Share */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-md transition-colors ${
              isWishlisted
                ? 'border-red-500 text-red-500 bg-red-50'
                : 'border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            <span className="text-sm">
              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:border-gray-400 transition-colors">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Delivery</span>
          <span className="text-sm font-medium">Dhaka, Dhaka North, Banani Road No. 12 - 19</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Standard Delivery</span>
          <span className="text-sm font-medium">৳60 | 5-9 days</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Cash on Delivery Available</span>
        </div>
      </div>

      {/* Return Policy */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Return & Warranty</span>
          <span className="text-sm font-medium">7 days easy return</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Change of mind is not applicable
        </p>
      </div>
    </div>
  );
};