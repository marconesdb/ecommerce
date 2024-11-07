import React, { useState } from 'react';
import { Search, MapPin, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/logo.svg';
import userIcon from '../../assets/icons/User.svg';
import appleIcon from '../../assets/icons/apple.svg';
import meatIcon from '../../assets/icons/meat.svg';
import boiledeggIcon from '../../assets/icons/boiled-egg.svg';
import toastbreadIcon from '../../assets/icons/toast-bread.svg';
import snowflakeIcon from '../../assets/icons/snowflake.svg';
import barIcon from '../../assets/icons/bar.svg';
import  wheatIcon from '../../assets/icons/wheat.svg';
import  scoopIcon from '../../assets/icons/scoop.svg';
import  toiletPaperIcon from '../../assets/icons/toilet-paper.svg';
import  babyBoyIcon from '../../assets/icons/baby-boy.svg'; 

import allCategoriesIcon from '../../assets/icons/allCategories.svg';
import { ChevronRight } from 'lucide-react';


type DropdownMenu = 'categories' | 'home' | 'shop' | 'trending' | 'sale' | null;

interface HeaderProps {
  deliveryTime?: string;
  cartItemsCount?: number;
  wishlistItemsCount?: number;
}


interface Subcategory {
  name: string;
  link: string;
}


interface Category {
  name: string;
  link: string;
  subcategories?: Subcategory[];
}


const Header: React.FC<HeaderProps> = ({
  deliveryTime = "7:00 to 23:00",
  cartItemsCount = 0,
  wishlistItemsCount = 0
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<DropdownMenu>(null);
  

  const categories: Category[] = [
    { name: 'Fruits & Vegetables', link: '/Fruits', subcategories: [
        { name: 'Fresh Fruits', link: '/fresh-fruits' },
        { name: 'Fresh Vegetables', link: '/fresh-vegetables' },
        { name: 'Organic Produce', link: '/organic-produce' },
      ]
    },
    

    { 
      name: 'Meats & Seafood', 
      link: '/meat-fish', 
      subcategories: [
        { name: 'Fresh Meat', link: '/meat-fish/fresh-meat' },
        { name: 'Frozen Meat', link: '/meat-fish/frozen-meat' },
        { name: 'Fresh Fish', link: '/meat-fish/fresh-fish' },
        { name: 'Frozen Seafood', link: '/meat-fish/frozen-seafood' },
        { name: 'Marinated', link: '/meat-fish/marinated' }
      ]
    },
    { 
      name: 'Breakfast & Dairy', 
      link: '/breakfast-dairy', 
      subcategories: [
        { name: 'Milk', link: '/breakfast-dairy/milk' },
        { name: 'Cheese', link: '/breakfast-dairy/cheese' },
        { name: 'Yogurt', link: '/breakfast-dairy/yogurt' },
        { name: 'Butter & Margarine', link: '/breakfast-dairy/butter-margarine' },
        { name: 'Eggs', link: '/breakfast-dairy/eggs' }
      ]
    },
    { 
      name: 'Breads & Bakery', 
      link: '/snacks', 
      subcategories: [
        { name: 'Loaves', link: '/snacks/loaves' },
        { name: 'Buns & Rolls', link: '/snacks/buns-rolls' },
        { name: 'Pastries', link: '/snacks/pastries' },
        { name: 'Cakes', link: '/snacks/cakes' },
        { name: 'Cookies & Biscuits', link: '/snacks/cookies-biscuits' }
      ]
    },
    { 
      name: 'Beverages', 
      link: '/beverages', 
      subcategories: [
        { name: 'Juices', link: '/beverages/juices' },
        { name: 'Soft Drinks', link: '/beverages/soft-drinks' },
        { name: 'Water', link: '/beverages/water' },
        { name: 'Tea & Coffee', link: '/beverages/tea-coffee' },
        { name: 'Energy Drinks', link: '/beverages/energy-drinks' }
      ]
    },
    { name: 'Frozen Foods', link: '/beauty-health' },
    { name: 'Biscuits & Snacks', link: '/beauty-health' },
    { name: 'Grocery & Staples', link: '/beauty-health' },
    { name: 'Baby & Pregnancy', link: '/beauty-health' },
    { name: 'Healthcare', link: '/beauty-health' },
    { name: 'Baby', link: '/beauty-health' },
  ];

  const homeMenu = [
    { name: 'Home Style 1', link: '/home-1' },
    { name: 'Home Style 2', link: '/home-2' },
    { name: 'Home Style 3', link: '/home-3' }
  ];

  const shopMenu = [
    { name: 'Shop Grid', link: '/shop-grid' },
    { name: 'Shop List', link: '/shop-list' },
    { name: 'Shop Single', link: '/shop-single' },
    { name: 'Shopping Cart', link: '/cart' },
    { name: 'Checkout', link: '/checkout' }
  ];

  const trendingMenu = [
    { name: 'New Arrivals', link: '/new-arrivals' },
    { name: 'Best Sellers', link: '/best-sellers' },
    { name: 'Sale Items', link: '/sale' }
  ];

  interface CategoryIcons {
    [key: string]: string;
  }
  
  const categoryIcons: CategoryIcons = {
    'Fruits & Vegetables': appleIcon,
    'Meats & Seafood': meatIcon,
    'Breakfast & Dairy': boiledeggIcon,
    'Breads & Bakery': toastbreadIcon,
    'Beverages': appleIcon,
    'Frozen Foods': snowflakeIcon,
    'Biscuits & Snacks': barIcon,
    'Grocery & Staples': wheatIcon,
    'Baby & Pregnancy': scoopIcon,
    'Healthcare': toiletPaperIcon,
    'Baby': babyBoyIcon,
    // Outros ícones
  };

  const handleDropdown = (menu: DropdownMenu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };



  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const handleSubcategoryToggle = (categoryName: string) => {
    setActiveSubcategory(activeSubcategory === categoryName ? null : categoryName);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-purple-700 text-white py-2 px-4 text-center text-sm ">
        <span className='font-semibold'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</span>
        <span className="ml-16 text-customWhite text-[12px]">
          Until the end of the sale: <span className='font-bold text-[18px]'>47</span> <span className='text-[11px]'>days</span> <span className='font-bold text-[18px]'>06</span> <span className='text-[11px]'>hours</span> <span className='font-bold text-[18px]'>55</span> <span className='text-[11px]'>minutes</span> <span className='font-bold text-[18px]'>51</span> <span className='text-[11px]'>sec</span>
        </span>
      </div>

      {/* Secondary Nav */}
      <div className="bg-white border-b py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-700 text-customGray ">About Us</a>
            <a href="#" className="hover:text-purple-700 text-customGray">My account</a>
            <a href="#" className="hover:text-purple-700 text-customGray">Wishlist</a> <span>|</span>
            <span className='text-customGray'>We deliver to you every day from <span className="text-customOrange font-bold">{deliveryTime}</span></span>
          </div>
          <div className="space-x-4">
            <select className="bg-transparent text-customGray">
              <option className=''>English</option>
            </select>
            <select className="bg-transparent text-customGray">
              <option className='text-customGray'>USD</option>
            </select>
            <a href="#" className="hover:text-purple-700 text-customGray">Order Tracking</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
            <img src={logo} alt="JinStore Logo" className="h-10 mr-4" />
            </a>
            <div className="flex items-center text-gray-600 ml-4">
              <MapPin size={30} />
              <span className="ml-4">Deliver to <span className='block text-customBlack'> all</span></span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <a href="/account" className="flex items-center hover:text-purple-700">
            <img src={userIcon} alt="User Icon" className="h-6 w-6 text-customBlack" />
            <div className="flex flex-col ml-2 mr-2 text-gray-600">
            <span className="text-sm">Sign In</span>
            <span className="ml-1 text-customBlack">Account</span>
          </div>

            </a>
            <a href="/wishlist" className="relative hover:text-purple-700">
              <Heart />
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </a>
            <a href="/cart" className="relative hover:text-purple-700">
              <ShoppingCart />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
      {/* Navigation with Dropdowns */}
      <nav className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-8 h-12">
            {/* All Categories Dropdown */}
            <div className="relative group">
      <button 
        className="flex items-center space-x-2 hover:text-purple-700"
        onClick={() => handleDropdown('categories')}
      >
        <img src={allCategoriesIcon} alt="Category Icon" className="h-5 w-5 text-gray-500" />
        <span className="font-semibold">All Categories</span>
        <ChevronDown size={16} />
      </button>
      {activeDropdown === 'categories' && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-1 py-2 z-50">
          {categories.map((category) => (
            <div key={category.name} className="relative" onMouseEnter={() => setActiveSubcategory(category.name)}
            onMouseLeave={() => setActiveSubcategory(null)}>
              <a
                href={category.link}
                className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleSubcategoryToggle(category.name)}
              >
                <div className="w-6 h-6 mr-3 bg-white rounded-md">
                  <img src={categoryIcons[category.name]} alt={category.name} />
                </div>
                <span className="flex-1">{category.name}</span>
                {category.subcategories && (
                  <ChevronRight size={16} className={`${activeSubcategory === category.name ? 'rotate-90' : ''}`} />
                )}
              </a>
              {activeSubcategory === category.name && category.subcategories && (
                <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md mt-0 py-2 z-50">
                  {category.subcategories.map((subcategory) => (
                    <a
                      key={subcategory.name}
                      href={subcategory.link}
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      {subcategory.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    

            {/* Home Dropdown */}
            <div className="relative">
              <button 
                className="hover:text-purple-700 font-semibold flex items-center"
                onClick={() => handleDropdown('home')}
              >
                Home <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'home' && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-50">
                  {homeMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
         
            {/* Shop Dropdown */}
            <div className="relative">
              <button 
                className="hover:text-purple-700 font-semibold flex items-center"
                onClick={() => handleDropdown('shop')}
              >
                Shop <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'shop' && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-50">
                  {shopMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                
              )}
            </div>
            
            <a href="/fruits-vegetables" className="hover:text-purple-700 font-semibold">Fruits & Vegetables</a>
            <a href="/beverages" className="hover:text-purple-700 font-semibold">Beverages</a>
            <a href="/blog" className="hover:text-purple-700 font-semibold">Blog</a>
            <a href="/contact" className="hover:text-purple-700 font-semibold">Contact</a>
            
            <div className="ml-auto flex items-center space-x-4">
              {/* Trending Products Dropdown */}
              <div className="relative">
                <button 
                  className="hover:text-purple-700 font-semibold flex items-center"
                  onClick={() => handleDropdown('trending')}
                >
                  Trending Products <ChevronDown size={16} className="ml-1" />
                </button>
                {activeDropdown === 'trending' && (
                  <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-50">
                    {trendingMenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Almost Finished with Sale Badge */}
              <div className="relative flex items-center">
                <a href="/almost-finished" className="px-2 py-1 rounded text-sm bg-gradient-to-r from-[#DC2626] to-[#EA580C] bg-clip-text text-transparent font-semibold text-[15px]">
                  Almost Finished
                </a>
                

              <div className="relative flex items-center">
                <div className="relative">
                  <div className="flex items-center">
                    <button 
                      className="bg-gradient-to-r from-[#DC2626] to-[#EA580C] font-bold text-[10px] pl-2 pr-2 pt-1 pb-1 rounded text-white mr-1"
                    >
                      SALE
                    </button>
                    <div onClick={() => handleDropdown('sale')}>
                      <ChevronDown size={16} className="ml-1 text-customOrange cursor-pointer" />
                    </div>
                  </div>
                  {activeDropdown === 'sale' && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-50">
                      <a href="/flash-sale" className="block px-4 py-2 hover:bg-gray-50">Flash Sale</a>
                      <a href="/clearance" className="block px-4 py-2 hover:bg-gray-50">Clearance</a>
                      <a href="/special-offers" className="block px-4 py-2 hover:bg-gray-50">Special Offers</a>
                    </div>
                  )}
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header