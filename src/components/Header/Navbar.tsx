import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { CartIcon } from './CartIcon';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 py-3">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-4xl font-bold">
              daraz
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 items-center space-x-4 max-w-2xl mx-8">
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="Search in Daraz"
                className="w-full px-4 py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-md transition-colors">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <CartIcon />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search in Daraz"
              className="w-full px-4 py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="absolute right-0 top-0 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-md transition-colors">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};