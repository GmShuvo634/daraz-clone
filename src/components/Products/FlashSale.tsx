import React from 'react';
import { Clock } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Countdown } from '../ui/Countdown';
import { Product } from '../../types/product';

const flashSaleProducts: Product[] = [
  {
    id: 1,
    name: '1 Pair Arm hand Sleeves For Fashion cycling biking...',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 134,
    originalPrice: 550,
    discount: 70
  },
  {
    id: 2,
    name: 'Wireless Bluetooth Headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 89,
    originalPrice: 299,
    discount: 70
  },
  {
    id: 3,
    name: 'Smart Watch Fitness Tracker',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 199,
    originalPrice: 399,
    discount: 50
  },
  {
    id: 4,
    name: 'Portable Phone Charger',
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 45,
    originalPrice: 89,
    discount: 49
  },
  {
    id: 5,
    name: 'Gaming Mouse RGB',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 67,
    originalPrice: 120,
    discount: 44
  },
  {
    id: 6,
    name: 'USB-C Cable Fast Charging',
    image: 'https://images.pexels.com/photos/163117/phone-old-year-built-1955-163117.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    price: 25,
    originalPrice: 50,
    discount: 50
  }
];

export const FlashSale: React.FC = () => {
  // Set target date to 2 days, 14 hours, 30 minutes, 45 seconds from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(targetDate.getHours() + 14);
  targetDate.setMinutes(targetDate.getMinutes() + 30);
  targetDate.setSeconds(targetDate.getSeconds() + 45);

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-orange-600">FlashSale</h2>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600">Ending in:</span>
                <Countdown
                  targetDate={targetDate}
                  size="sm"
                 />
              </div>
            </div>
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
              Shop More
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="bg-white rounded-b-lg p-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {flashSaleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};