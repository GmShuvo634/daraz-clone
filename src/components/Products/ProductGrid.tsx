import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types/product';

interface ProductGridProps {
  title: string;
  products: Product[];
  showCompany?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products,
  showCompany = false
}) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
              Shop More
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-b-lg p-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCompany={showCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};