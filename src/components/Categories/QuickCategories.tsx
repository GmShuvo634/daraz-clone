import React from 'react';

const quickCategories = [
  {
    name: 'Mall',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isGif: true
  },
  {
    name: 'Free Shipping',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isGif: true
  },
  {
    name: 'Grocery',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isGif: true
  },
  {
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isGif: true
  },
  {
    name: 'Beauty & Glamour',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isGif: true
  }
];

export const QuickCategories: React.FC = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {quickCategories.map((category) => (
            <a 
              key={category.name}
              href="#"
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 mb-3 overflow-hidden rounded-full">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h6 className="text-sm font-medium text-gray-700 text-center group-hover:text-orange-600 transition-colors">
                {category.name}
              </h6>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};