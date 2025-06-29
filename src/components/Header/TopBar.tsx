import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <section className="bg-gray-100 py-1 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex justify-end space-x-4">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">SAVE MORE ON APP</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">SELL ON DARAZ</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">CUSTOMER CARE</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">TRACK MY ORDER</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">SIGNUP / LOGIN</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">DARAZ AFFILIATE PROGRAM</a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">ভাষা</a>
        </div>
      </div>
    </section>
  );
};