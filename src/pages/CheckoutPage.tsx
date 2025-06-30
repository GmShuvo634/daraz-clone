import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building, Home } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { TopBar } from '../components/Header/TopBar';
import { Navbar } from '../components/Header/Navbar';
import { Footer } from '../components/Footer/Footer';

interface ShippingInfo {
  fullName: string;
  phoneNumber: string;
  region: string;
  city: string;
  area: string;
  address: string;
  building: string;
  colony: string;
  deliveryType: 'home' | 'office';
}

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [promotionCode, setPromotionCode] = useState('');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    phoneNumber: '',
    region: '',
    city: '',
    area: '',
    address: '',
    building: '',
    colony: '',
    deliveryType: 'home'
  });

  const subtotal = getTotalPrice();
  const deliveryFee = 60;
  const total = subtotal + deliveryFee;

  const handleInputChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Validate required fields
    const requiredFields = ['fullName', 'phoneNumber', 'region', 'city', 'area', 'address'];
    const missingFields = requiredFields.filter(field => !shippingInfo[field as keyof ShippingInfo]);
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would typically save the shipping info and proceed to payment
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  const handleProceedToPay = () => {
    handleSave();
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Shipping Information Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center space-x-2 mb-6">
                <button
                  onClick={() => navigate('/cart')}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="text-xl font-semibold">Delivery Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first and last name"
                    value={shippingInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Region
                  </label>
                  <select
                    value={shippingInfo.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Please choose your region</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="khulna">Khulna</option>
                    <option value="barisal">Barisal</option>
                    <option value="rangpur">Rangpur</option>
                    <option value="mymensingh">Mymensingh</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Please enter your phone number"
                    value={shippingInfo.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <select
                    value={shippingInfo.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Please choose your city</option>
                    <option value="dhaka-north">Dhaka North</option>
                    <option value="dhaka-south">Dhaka South</option>
                    <option value="gazipur">Gazipur</option>
                    <option value="narayanganj">Narayanganj</option>
                    <option value="savar">Savar</option>
                  </select>
                </div>

                {/* Building/House No/Floor/Street */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Building / House No / Floor / Street
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter"
                    value={shippingInfo.building}
                    onChange={(e) => handleInputChange('building', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area
                  </label>
                  <select
                    value={shippingInfo.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Please choose your area</option>
                    <option value="banani">Banani</option>
                    <option value="gulshan">Gulshan</option>
                    <option value="dhanmondi">Dhanmondi</option>
                    <option value="uttara">Uttara</option>
                    <option value="mirpur">Mirpur</option>
                    <option value="mohammadpur">Mohammadpur</option>
                  </select>
                </div>

                {/* Colony/Suburb/Locality/Landmark */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Colony / Suburb / Locality / Landmark
                  </label>
                  <input
                    type="text"
                    placeholder="Please enter"
                    value={shippingInfo.colony}
                    onChange={(e) => handleInputChange('colony', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  placeholder="For Example: House# 123, Street# 123, ABC Road"
                  value={shippingInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Delivery Type */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select a label for effective delivery:
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleInputChange('deliveryType', 'office')}
                    className={`flex items-center space-x-2 px-4 py-2 border rounded-md transition-colors ${
                      shippingInfo.deliveryType === 'office'
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Building className="h-4 w-4" />
                    <span>OFFICE</span>
                  </button>
                  <button
                    onClick={() => handleInputChange('deliveryType', 'home')}
                    className={`flex items-center space-x-2 px-4 py-2 border rounded-md transition-colors ${
                      shippingInfo.deliveryType === 'home'
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Home className="h-4 w-4" />
                    <span>HOME</span>
                  </button>
                </div>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-colors mt-6"
              >
                SAVE
              </button>
            </div>

            {/* Package Info */}
            <div className="bg-white p-4 rounded-lg border mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Package 1 of 1</h3>
                <span className="text-sm text-gray-600">Shipped by TECH MAX BD</span>
              </div>

              <div className="border border-blue-500 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">৳60</span>
                  <span className="text-sm font-medium">Standard Delivery</span>
                </div>
                <p className="text-xs text-gray-600">Guaranteed by 3-6 Jul</p>
              </div>

              {/* Product in package */}
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedVariant}`} className="flex items-center space-x-4 mt-4 p-4 border rounded">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
                    {item.selectedVariant && (
                      <p className="text-xs text-gray-600">Color: {item.selectedVariant}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-orange-600">৳{item.price}</span>
                      <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-4">
            {/* Promotion */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-3">Promotion</h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter Store/Daraz Code"
                  value={promotionCode}
                  onChange={(e) => setPromotionCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors">
                  APPLY
                </button>
              </div>
            </div>

            {/* Invoice and Contact Info */}
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Invoice and Contact Info</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items Total ({items.length} items)</span>
                  <span className="font-medium">৳{subtotal}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">৳{deliveryFee}</span>
                </div>

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-orange-600">৳{total}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">VAT included, where applicable</p>
                </div>
              </div>

              <button
                onClick={handleProceedToPay}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition-colors mt-4"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};