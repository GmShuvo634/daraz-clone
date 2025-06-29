import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How to Buy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-8">Earn With Daraz</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Daraz University</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell on Daraz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join the Daraz Affiliate Program</a></li>
            </ul>
          </div>

          {/* Daraz */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Daraz</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Daraz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Daraz Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Amar Daraz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">dMart</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Daraz App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Daraz Exclusives</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hungrynaki Food Delivery</a></li>
            </ul>
          </div>

          {/* App Download */}
          <div className="md:col-span-2">
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 bg-white rounded-lg p-2">
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600">QR Code</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <span className="text-orange-500 font-semibold">Happy Shopping</span>
                </div>
                <p className="text-gray-300 mb-4">Download App</p>
                <div className="flex space-x-2">
                  <div className="w-32 h-10 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs">App Store</span>
                  </div>
                  <div className="w-32 h-10 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            Created by <a href="#" className="text-orange-500 hover:text-orange-400">Gouranga Das Samrat</a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};