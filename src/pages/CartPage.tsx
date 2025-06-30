import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, Heart, MapPin } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { TopBar } from '../components/Header/TopBar';
import { Navbar } from '../components/Header/Navbar';
import { Footer } from '../components/Footer/Footer';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<number[]>(items.map(item => item.id));
  const [voucherCode, setVoucherCode] = useState('');

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const selectedItemsData = items.filter(item => selectedItems.includes(item.id));
  const subtotal = selectedItemsData.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingFee = selectedItemsData.length > 0 ? 60 : 0;
  const total = subtotal + shippingFee;

  const handleProceedToCheckout = () => {
    if (selectedItems.length === 0) return;
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBar />
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started</p>
            <button
              onClick={() => navigate('/')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Select All Header */}
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === items.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm font-medium">
                    SELECT ALL ({items.length} ITEM{items.length !== 1 ? 'S' : ''})
                  </span>
                </label>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-1"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>DELETE</span>
                </button>
              </div>
            </div>

            {/* Store Section */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === items.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="font-medium">TECH MAX BD</span>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {items.map((item) => (
                  <div key={`${item.id}-${item.selectedVariant}`} className="p-4">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 mt-2"
                      />
                      
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded border"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                          {item.name}
                        </h3>
                        
                        {item.selectedVariant && (
                          <p className="text-xs text-gray-600 mb-2">
                            Color: {item.selectedVariant}
                          </p>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-bold text-orange-600">
                              ৳{item.price}
                            </span>
                            
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                              <Heart className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            {/* Location */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-3">Location</h3>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Add Shipping Address</span>
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({selectedItems.length} items)</span>
                  <span className="font-medium">৳{subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="font-medium">৳{shippingFee}</span>
                </div>

                <div className="flex space-x-2 pt-2">
                  <input
                    type="text"
                    placeholder="Enter Voucher Code"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors">
                    APPLY
                  </button>
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-600">৳{total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                disabled={selectedItems.length === 0}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 rounded-md font-medium transition-colors mt-4"
              >
                PROCEED TO CHECKOUT ({selectedItems.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};