import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const categories = [
  'Electronic Devices',
  'TV & Home Appliances',
  'Health & Beauty',
  'Babies & Toys',
  'Groceries & Pets',
  'Home & Lifestyle',
  "Women's Fashion",
  "Men's Fashion",
  'Watches & Accessories',
  'Sports & Outdoor',
  'Automotive & Motorbike'
];

export const CategoryMenu: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="hidden md:block bg-white border-r border-gray-200 p-2">
      <ul className="space-y-1">
        {categories.map((category) => (
          <li 
            key={category}
            className="relative"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <a 
              href="#" 
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded"
            >
              {category}
              <ChevronRight className="h-4 w-4" />
            </a>
            
            {/* Submenu would appear here on hover */}
            {hoveredCategory === category && (
              <div className="absolute left-full top-0 w-64 bg-white border border-gray-200 shadow-lg z-10 rounded">
                <div className="p-4">
                  <p className="text-sm text-gray-600">Subcategories for {category}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};