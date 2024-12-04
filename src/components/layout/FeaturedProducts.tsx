import React from 'react';
import bannerFruit from '../../assets/images/bannerFruit.svg';
import bannerAlpro from '../../assets/images/bannerAlpro.svg';
import Reyond from '../../assets/images/bannerReyond.svg';
import Oatbox from '../../assets/images/bannerOaltbox.svg';
import { ArrowRight } from 'lucide-react';

interface Product {
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative w-full max-w-[580px] mx-auto h-[400px] xs:h-[350px] sm:h-[400px] md:h-[380px] lg:h-[450px] overflow-hidden rounded-lg group ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      >
        <div className="absolute inset-0" />
      </div>
      
      <div className="relative h-full p-3 xs:p-4 sm:p-6 text-white">
        <div className="space-y-2 xs:space-y-3 sm:space-y-4">
          <div className="text-orange-600 text-xs xs:text-sm py-1 rounded-full w-fit">
            {product.badge}
          </div>
          
          <h3 className="text-sm xs:text-base sm:text-[18px] md:text-[16px] font-bold leading-tight text-black">
            {product.title}
          </h3>
          
          <p className="text-xs xs:text-sm md:text-[12px] opacity-90 text-customGray">
            {product.description}
          </p>
          
          <button className="mt-2 xs:mt-3 sm:mt-3 flex items-center gap-2 text-xs xs:text-sm font-bold bg-white text-black p-1.5 xs:p-2 sm:p-2 border border-gray-300 hover:text-white rounded-full hover:bg-purple-600">
            Shop Now <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  const products: Product[] = [
    {
      badge: "Only This Week",
      title: "Provides you experienced quality products",
      description: "Feed your family the best",
      imageUrl: bannerFruit,
    },
    {
      badge: "Only This Week",
      title: "Shopping with us for better quality and the best price",
      description: "Only this week. Don't miss...",
      imageUrl: bannerAlpro,
    },
    {
      badge: "Only This Week",
      title: "Get the best quality products at the lowest prices",
      description: "A different kind of grocery store",
      imageUrl: Reyond,
    },
    {
      badge: "Only This Week",
      title: "Where you get your all favorite brands under one roof",
      description: "Only this week. Don't miss...",
      imageUrl: Oatbox,
    },
  ];

  return (
    <div className="w-full px-[28px] xs:px-6 sm:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 sm:mt-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 mb-4 sm:mb-0">
          <h2 className="text-sm xs:text-base sm:text-[18px] font-bold">Featured Products</h2>
          <p className="text-gray-600 text-xs xs:text-sm sm:text-[13px] hidden sm:block">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold hover:bg-purple-600 border border-gray-300  hover:text-white rounded-full px-4 py-2">
        View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;