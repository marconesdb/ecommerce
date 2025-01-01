import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import AllCategories from '../assets/icons/allCategories.svg';
import AppleIcon from '../assets/icons/apple.svg';
import MeatIcon from '../assets/icons/meat.svg';
import DairyIcon from '../assets/icons/boiled-egg.svg';
import BakeryIcon from '../assets/icons/toast-bread.svg';
import BeverageIcon from '../assets/icons/cup.svg';
import FrozenIcon from '../assets/icons/snowflake.svg';
import SnackIcon from '../assets/icons/bar.svg';
import GroceryIcon from '../assets/icons/wheat.svg';
import BabyIcon from '../assets/icons/baby-boy.svg';
import HealthcareIcon from '../assets/icons/toilet-paper.svg';

interface NavbarProps {
  onDropdownToggle: (isOpen: boolean, dropdownWidth: number) => void;
}

interface MobileMenuItemProps {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDropdownToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [dropdownHome, setDropdownHome] = useState(false);
  const [dropdownShop, setDropdownShop] = useState(false);
  const [dropdownTrending, setDropdownTrending] = useState(false);
  const [dropdownSale, setDropdownSale] = useState(false);

  const [dropdownSubcategoryFruits, setDropdownSubcategoryFruits] = useState(false);
  const [dropdownSubcategoryMeats, setDropdownSubcategoryMeats] = useState(false);
  const [dropdownSubcategoryBreakfast, setDropdownSubcategoryBreakfast] = useState(false);
  const [dropdownSubcategoryBakery, setDropdownSubcategoryBakery] = useState(false);
  const [dropdownSubcategoryBeverages, setDropdownSubcategoryBeverages] = useState(false);

  const dropdownTimeouts = useRef<{ [key: string]: ReturnType<typeof setTimeout> | null }>({
    dropdownHome: null,
    dropdownShop: null,
    dropdownTrending: null,
    dropdownSale: null,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (dropdown: string, setDropdownState: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (dropdownTimeouts.current[dropdown]) {
      clearTimeout(dropdownTimeouts.current[dropdown]!);
    }
    setDropdownState(true);
  };

  const handleMouseLeave = (dropdown: string, setDropdownState: React.Dispatch<React.SetStateAction<boolean>>) => {
    dropdownTimeouts.current[dropdown] = setTimeout(() => {
      setDropdownState(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsDropdownOpen(true);
    const dropdownWidth = dropdownRef.current ? dropdownRef.current.offsetWidth : 0;
    onDropdownToggle(true, dropdownWidth);
  };

  const handleDropdownMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
      onDropdownToggle(false, 0);
    }, 200);
  };

  const categories = [
    { icon: AppleIcon, label: 'Fruits & Vegetables' },
    { icon: MeatIcon, label: 'Meats & Seafood' },
    { icon: DairyIcon, label: 'Breakfast & Dairy' },
    { icon: BakeryIcon, label: 'Breads & Bakery' },
    { icon: BeverageIcon, label: 'Beverages' },
    { icon: FrozenIcon, label: 'Frozen Foods' },
    { icon: SnackIcon, label: 'Biscuits & Snacks' },
    { icon: GroceryIcon, label: 'Grocery & Staples' },
    { icon: BabyIcon, label: 'Baby & Pregnancy' },
    { icon: HealthcareIcon, label: 'Healthcare' },
  ];

  // Mobile menu item component with proper typing
  const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ label, children, isOpen, toggleOpen }) => {
    return (
      <div className="border-b border-gray-100">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={toggleOpen}
        >
          <span className="font-medium">{label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="bg-gray-50 px-4 py-2">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed top-46 left-0 right-0 bg-white z-50 border-b w-full">
      <div className="container max-w-full mx-auto">
        <nav className="relative flex items-center justify-between h-16 w-full md:px-6">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
           {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <img 
                src={AllCategories} 
                alt="Menu" 
                className="w-6 h-6"
              />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center gap-8 ">
            {/* All Categories Dropdown */}
            <div className="relative ">
              <div
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                className="flex items-center gap-2 py-2 rounded-md hover:bg-gray-200 cursor-pointer "
              >
                <img src={AllCategories} alt="Categoria" className="w-5 h-5" />
                <span className="font-medium ">All Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-b-md mt-4"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => {
                        if (category.label === 'Fruits & Vegetables') setDropdownSubcategoryFruits(true);
                        if (category.label === 'Meats & Seafood') setDropdownSubcategoryMeats(true);
                        if (category.label === 'Breakfast & Dairy') setDropdownSubcategoryBreakfast(true);
                        if (category.label === 'Breads & Bakery') setDropdownSubcategoryBakery(true);
                        if (category.label === 'Beverages') setDropdownSubcategoryBeverages(true);
                      
                      }}
                      onMouseLeave={() => {
                        if (category.label === 'Fruits & Vegetables') setDropdownSubcategoryFruits(false);
                        if (category.label === 'Meats & Seafood') setDropdownSubcategoryMeats(false);
                        if (category.label === 'Breakfast & Dairy') setDropdownSubcategoryBreakfast(false);
                        if (category.label === 'Breads & Bakery') setDropdownSubcategoryBakery(false);
                        if (category.label === 'Beverages') setDropdownSubcategoryBeverages(false);
                      
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                      >
                        <img src={category.icon} alt={category.label} className="w-5 h-5" />
                        <span>{category.label}</span>
                        {category.label === 'Fruits & Vegetables' && (
                          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${dropdownSubcategoryFruits ? '-rotate-90' : '-rotate-0'}`} />
                        )}
                        {category.label === 'Meats & Seafood' && (
                          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${dropdownSubcategoryMeats ? '-rotate-90' : '-rotate-0'}`} />
                        )}
                        {category.label === 'Breakfast & Dairy' && (
                          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${dropdownSubcategoryBreakfast ? '-rotate-90' : '-rotate-0'}`} />
                        )}
                        {category.label === 'Breads & Bakery' && (
                          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${dropdownSubcategoryBakery ? '-rotate-90' : '-rotate-0'}`} />
                        )}
                        {category.label === 'Beverages' && (
                          <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${dropdownSubcategoryBeverages ? '-rotate-90' : '-rotate-0'}`} />
                        )}
                      </a>

                      {/* Subcategory dropdowns */}
                      {category.label === 'Fruits & Vegetables' && dropdownSubcategoryFruits && (
                        <div className="absolute left-64 top-0 bg-white shadow-lg w-48">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fresh Fruits</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Organic Vegetables</a>
                        </div>
                      )}
                      {category.label === 'Meats & Seafood' && dropdownSubcategoryMeats && (
                        <div className="absolute left-64 top-0 bg-white shadow-lg w-48">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fresh Meats</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Seafood</a>
                        </div>
                      )}
                      {category.label === 'Breakfast & Dairy' && dropdownSubcategoryBreakfast && (
                        <div className="absolute left-64 top-0 bg-white shadow-lg w-48">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cereals</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Milk & Cheese</a>
                        </div>
                      )}
                      {category.label === 'Breads & Bakery' && dropdownSubcategoryBakery && (
                        <div className="absolute left-64 top-0 bg-white shadow-lg w-48">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Fresh Bread</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cakes & Pastries</a>
                        </div>
                      )}
                      {category.label === 'Beverages' && dropdownSubcategoryBeverages && (
                        <div className="absolute left-64 top-0 bg-white shadow-lg w-48">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Soft Drinks</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Juices</a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Left side navigation items */}
            <div className="flex items-center gap-8">
              <div
                className="relative flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('dropdownHome', setDropdownHome)}
                onMouseLeave={() => handleMouseLeave('dropdownHome', setDropdownHome)}
              >
                <a href="#" className="text-purple-600 font-medium">Home</a>
                <ChevronDown className="text-gray-500" size={16} />
                {dropdownHome && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-md mt-2 w-40 rounded-md z-50"
                    onMouseEnter={() => handleMouseEnter('dropdownHome', setDropdownHome)}
                    onMouseLeave={() => handleMouseLeave('dropdownHome', setDropdownHome)}
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Option 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Option 2</a>
                  </div>
                )}
              </div>

              <div
                className="relative flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('dropdownShop', setDropdownShop)}
                onMouseLeave={() => handleMouseLeave('dropdownShop', setDropdownShop)}
              >
                <a href="#" className="text-gray-600 hover:text-purple-600">Shop</a>
                <ChevronDown className="text-gray-500" size={16} />
                {dropdownShop && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-md mt-2 w-40 rounded-md z-50"
                    onMouseEnter={() => handleMouseEnter('dropdownShop', setDropdownShop)}
                    onMouseLeave={() => handleMouseLeave('dropdownShop', setDropdownShop)}
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shop Category 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shop Category 2</a>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-600 hover:text-purple-600">Fruits & Vegetables</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Beverages</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Blog</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
            </div>

            {/* Right side menus */}
            <div className="flex items-center gap-8 ml-auto">
              <div
                className="relative flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('dropdownTrending', setDropdownTrending)}
                onMouseLeave={() => handleMouseLeave('dropdownTrending', setDropdownTrending)}
              >
                <a href="#" className="text-gray-600 hover:text-purple-600">Trending Products</a>
                <ChevronDown className="text-gray-500" size={16} />
                {dropdownTrending && (
                  <div
                    className="absolute top-full right-0 bg-white shadow-md mt-2 w-40 rounded-md z-50"
                    onMouseEnter={() => handleMouseEnter('dropdownTrending', setDropdownTrending)}
                    onMouseLeave={() => handleMouseLeave('dropdownTrending', setDropdownTrending)}
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Trending Item 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Trending Item 2</a>
                  </div>
                )}
              </div>

              <a href="/almost-finished" className="px-2 py-1 rounded text-sm bg-gradient-to-r from-[#DC2626] to-[#EA580C] bg-clip-text text-transparent font-semibold text-[15px]">
                Almost Finished
              </a>

              <div
                className="relative flex items-center gap-1"
                onMouseEnter={() => handleMouseEnter('dropdownSale', setDropdownSale)}
                onMouseLeave={() => handleMouseLeave('dropdownSale', setDropdownSale)}
              >
                <button className="bg-gradient-to-r from-[#DC2626] to-[#EA580C] font-bold text-[10px] pl-2 pr-2 pt-1 pb-1 rounded text-white mr-1">
                  SALE
                </button>
                <ChevronDown className="text-gray-500" size={16} />
                {dropdownSale && (
                  <div
                    className="absolute top-full right-0 bg-white shadow-md mt-2 w-40 rounded-md z-50"
                    onMouseEnter={() => handleMouseEnter('dropdownSale', setDropdownSale)}
                    onMouseLeave={() => handleMouseLeave('dropdownSale', setDropdownSale)}
                  >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sale Option 1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sale Option 2</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="fixed top-[calc(106px+4rem)] left-0 w-full bg-white shadow-lg lg:hidden overflow-y-auto h-[calc(100vh-160px-4rem)] mt-8 sm:mt-4 md:mt-12">
              {/* All Categories Section */}
              <MobileMenuItem
                label="All Categories"
                isOpen={isDropdownOpen}
                toggleOpen={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="py-2">
                      <div className="flex items-center gap-3">
                        <img src={category.icon} alt={category.label} className="w-5 h-5" />
                        <span>{category.label}</span>
                      </div>
                      {/* Mobile Subcategories */}
                      {category.label === 'Fruits & Vegetables' && (
                        <div className="ml-8 mt-2 space-y-1">
                          <a href="#" className="block py-1 text-gray-600">Fresh Fruits</a>
                          <a href="#" className="block py-1 text-gray-600">Organic Vegetables</a>
                        </div>
                      )}
                      {category.label === 'Meats & Seafood' && (
                        <div className="ml-8 mt-2 space-y-1">
                          <a href="#" className="block py-1 text-gray-600">Fresh Meats</a>
                          <a href="#" className="block py-1 text-gray-600">Seafood</a>
                        </div>
                      )}
                      {category.label === 'Breakfast & Dairy' && (
                        <div className="ml-8 mt-2 space-y-1">
                          <a href="#" className="block py-1 text-gray-600">Cereals</a>
                          <a href="#" className="block py-1 text-gray-600">Milk & Cheese</a>
                        </div>
                      )}
                      {category.label === 'Breads & Bakery' && (
                        <div className="ml-8 mt-2 space-y-1">
                          <a href="#" className="block py-1 text-gray-600">Fresh Bread</a>
                          <a href="#" className="block py-1 text-gray-600">Cakes & Pastries</a>
                        </div>
                      )}
                      {category.label === 'Beverages' && (
                        <div className="ml-8 mt-2 space-y-1">
                          <a href="#" className="block py-1 text-gray-600">Soft Drinks</a>
                          <a href="#" className="block py-1 text-gray-600">Juices</a>
                        </div>
                      )}


                      {category.label === 'Frozen Foods'}
                      {category.label === 'Biscuits & Snacks'}
                      {category.label === 'Grocery & Staples'}
                      {category.label === 'Baby e Pregnancy'}
                      {category.label === 'HealtHcare'}
                    </div>
                  ))}
                </div>
              </MobileMenuItem>

              {/* Other Mobile Menu Items */}
              <MobileMenuItem
                label="Home"
                isOpen={dropdownHome}
                toggleOpen={() => setDropdownHome(!dropdownHome)}
              >
                <div className="space-y-2">
                  <a href="#" className="block py-1">Home Option 1</a>
                  <a href="#" className="block py-1">Home Option 2</a>
                </div>
              </MobileMenuItem>

              <MobileMenuItem
                label="Shop"
                isOpen={dropdownShop}
                toggleOpen={() => setDropdownShop(!dropdownShop)}
              >
                <div className="space-y-2">
                  <a href="#" className="block py-1">Shop Category 1</a>
                  <a href="#" className="block py-1">Shop Category 2</a>
                </div>
              </MobileMenuItem>

              {/* Static Mobile Menu Items */}
              <div className="p-4 border-b border-gray-100">
                <a href="#" className="block py-2">Fruits & Vegetables</a>
                <a href="#" className="block py-2">Beverages</a>
                <a href="#" className="block py-2">Blog</a>
                <a href="#" className="block py-2">Contact</a>
              </div>

              {/* Trending and Sale sections for mobile */}
              <MobileMenuItem
                label="Trending Products"
                isOpen={dropdownTrending}
                toggleOpen={() => setDropdownTrending(!dropdownTrending)}
              >
                <div className="space-y-2">
                  <a href="#" className="block py-1">Trending Item 1</a>
                  <a href="#" className="block py-1">Trending Item 2</a>
                </div>
              </MobileMenuItem>

              <div className="p-4 space-y-4">
                <a href="/almost-finished" className="block text-center py-2 rounded bg-gradient-to-r from-[#DC2626] to-[#EA580C] bg-clip-text text-transparent font-semibold">
                  Almost Finished
                </a>
                <button className="w-full bg-gradient-to-r from-[#DC2626] to-[#EA580C] font-bold text-sm py-2 rounded text-white">
                  SALE
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;