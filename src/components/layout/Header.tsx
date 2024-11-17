import React, { useState } from 'react';
import { Search, MapPin, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/icons/User.svg';

interface HeaderProps {
  deliveryTime?: string;
  cartItemsCount?: number;
  wishlistItemsCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  deliveryTime = "7:00 to 23:00",
  cartItemsCount = 0,
  wishlistItemsCount = 0
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-purple-700 text-white py-2 px-4 text-center text-sm">
        <span className="font-semibold md:inline block">FREE delivery & 40% Discount for next 3 orders!</span>
        <span className="hidden md:inline ml-4 text-customWhite text-xs">
          Until the end of the sale: 
          <span className="font-bold text-lg mx-1">47</span>days
          <span className="font-bold text-lg mx-1">06</span>hours
          <span className="font-bold text-lg mx-1">55</span>min
          <span className="font-bold text-lg mx-1">51</span>sec
        </span>
      </div>

      {/* Secondary Nav - Hidden on mobile */}
      <div className="hidden md:block bg-white border-b py-2  md:px-6">
        <div className="container max-w-full mx-auto flex justify-between items-center text-sm">
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-700 text-customGray">About Us</a>
            <a href="#" className="hover:text-purple-700 text-customGray">My account</a>
            <a href="#" className="hover:text-purple-700 text-customGray">Wishlist</a>
            <span>|</span>
            <span className="text-customGray">We deliver to you every day from <span className="text-customOrange font-bold">{deliveryTime}</span></span>
          </div>
          <div className="space-x-4">
            <select className="bg-transparent text-customGray">
              <option>English</option>
            </select>
            <select className="bg-transparent text-customGray">
              <option>USD</option>
            </select>
            <a href="#" className="hover:text-purple-700 text-customGray">Order Tracking</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-3 px-2 md:py-4  shadow-sm md:px-6">
        <div className="container max-w-full mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={logo} alt="JinStore Logo" className="h-6 md:h-10" />
              </a>
            </div>

            {/* Location and Delivery Info - Shown on both mobile and desktop */}
            <div className="flex items-center text-gray-600 ml-2 md:ml-4">
              <MapPin size={18} className="shrink-0" />
              <span className="ml-1 md:ml-2 text-xs md:text-sm">
                Deliver to 
                <span className="block text-customBlack">all</span>
              </span>
            </div>

            {/* Search Bar - Hidden on mobile, shown in mobile menu */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-gray-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Search className="text-gray-400" size={20} />
                </button>
              </div>
            </div>

            {/* User Actions - Modified for mobile visibility */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="/account" className="flex items-center hover:text-purple-700">
                <img src={userIcon} alt="User Icon" className="h-5 w-5 md:h-6 md:w-6" />
                <div className="flex flex-col ml-1 md:ml-2 text-gray-600">
                  <span className="text-[10px] md:text-sm">Sign In</span>
                  <span className="text-[10px] md:text-sm text-customBlack">Account</span>
                </div>
              </a>
              <div className="flex space-x-2 md:space-x-3">
                <a href="/wishlist" className="relative hover:text-purple-700">
                  <Heart size={18} className="md:w-6 md:h-6" />
                  {wishlistItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-[10px] md:text-xs rounded-full w-3 h-3 md:w-4 md:h-4 flex items-center justify-center">
                      {wishlistItemsCount}
                    </span>
                  )}
                </a>
                <a href="/cart" className="relative hover:text-purple-700">
                  <ShoppingCart size={18} className="md:w-6 md:h-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-[10px] md:text-xs rounded-full w-3 h-3 md:w-4 md:h-4 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Search - Always visible on mobile */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 bg-gray-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="text-gray-400" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="py-2 px-4">
            <a href="#" className="block py-2 hover:text-purple-700 text-customGray text-sm">About Us</a>
            <a href="#" className="block py-2 hover:text-purple-700 text-customGray text-sm">My account</a>
            <a href="#" className="block py-2 hover:text-purple-700 text-customGray text-sm">Wishlist</a>
            <a href="#" className="block py-2 hover:text-purple-700 text-customGray text-sm">Order Tracking</a>
            <div className="py-2 space-y-2">
              <select className="block w-full bg-transparent text-customGray py-1 text-sm">
                <option>English</option>
              </select>
              <select className="block w-full bg-transparent text-customGray py-1 text-sm">
                <option>USD</option>
              </select>
            </div>
            <div className="py-2 text-customGray text-sm">
              Delivery hours: <span className="text-customOrange font-bold">{deliveryTime}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;