import React from 'react';
import fruitsVegetables from '../../assets/images/Fruits & Vegetables.svg'
import babyPregnancy from '../../assets/images/Baby & Pregnancy.svg'
import beverages from '../../assets/images/Beverages.svg'
import meatsSeafood from '../../assets/images/Meats & Seafood.svg'
import biscuitsSnacks from '../../assets/images/Biscuits & Snacks.svg'
import breadsBakery from '../../assets/images/Breads & Bakery.svg'
import breakfastDairy from '../../assets/images/Breaksfast & Dairy.svg'
import frozenFoods from '../../assets/images/Frozen Foods.svg'
import groceryStaples from '../../assets/images/Grocery & Staples.svg'

interface Category {
  title: string;
  image: string;
}

const categories: Category[] = [
  {
    title: 'Fruits & Vegetables',
    image: fruitsVegetables
  },
  {
    title: 'Baby & Pregnancy',
    image: babyPregnancy
  },
  {
    title: 'Beverages',
    image: beverages
  },
  {
    title: 'Meats & Seafood',
    image: meatsSeafood
  },
  {
    title: 'Biscuits & Snacks',
    image: biscuitsSnacks
  },
  {
    title: 'Breads & Bakery',
    image: breadsBakery
  },
  {
    title: 'Breakfast & Dairy',
    image: breakfastDairy
  },
  {
    title: 'Frozen Foods',
    image: frozenFoods
  },
  {
    title: 'Grocery & Staples',
    image: groceryStaples
  }
];

const ProductCategories: React.FC = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center p-4 mb-2 transition-transform duration-200 ease-in-out group-hover:scale-105">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm text-center font-medium  group-hover:text-purple-600">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;