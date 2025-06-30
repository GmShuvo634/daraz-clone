import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductInfo } from './ProductInfo';
import { ProductReviews } from './ProductReviews';
import { Product } from '../../types/product';
import { ProductReviews as ProductReviewsType } from '../../types/review';

interface ProductDetailsProps {
  product: Product & {
    images?: string[];
    description?: string;
    specifications?: Record<string, string>;
    variants?: string[];
    inStock?: boolean;
    stockCount?: number;
    rating?: number;
    reviewCount?: number;
  };
  reviews: ProductReviewsType;
  onBack?: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  reviews,
  onBack
}) => {
  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={onBack}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Watches Sunglasses Jewellery</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Watches</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Men</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600">Sports</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={productImages} productName={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Description */}
        {product.description && (
          <div className="bg-white p-6 rounded-lg border mb-8">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && (
          <div className="bg-white p-6 rounded-lg border mb-8">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">{key}:</span>
                  <span className="text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
};