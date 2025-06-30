import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  showCompany?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showCompany = false
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="group block bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow text-left w-full"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        {showCompany && product.company && (
          <div className="flex items-center space-x-2 mb-2">
            {product.companyLogo && (
              <img
                src={product.companyLogo}
                alt={product.company}
                className="w-6 h-6 rounded"
              />
            )}
            <span className="text-xs text-gray-600">{product.company}</span>
          </div>
        )}
        <p className="text-sm text-gray-700 line-clamp-2 mb-2">
          {product.name}
        </p>
        <p className="text-lg font-bold text-orange-600 mb-1">
          ${product.price}
        </p>
        {product.originalPrice && product.discount && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="text-xs bg-red-500 text-white px-1 rounded">
              -{product.discount}%
            </span>
          </div>
        )}
      </div>
    </button>
  );
};