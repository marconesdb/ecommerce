import React from 'react';
import AppleJuice from '../../assets/images/AppleJuice.svg';
import GreatValue from '../../assets/images/GreatValue.svg';
import SimplyOrange from '../../assets/images/SimplyOrange.svg';
import Margherita from '../../assets/images/Margherita.svg';
import Cantaloupe from '../../assets/images/Cantaloupe.svg';
import AngelSoft from '../../assets/images/AngelSoft.svg';
import Organic from '../../assets/images/Organic.svg'
import Coldsale from '../../assets/images/Coldsale.svg'

interface ProductCardProps {
  image: string;
  additionalImage?: string;
  title: string;
  rating?: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  isFirstCard?: boolean;
  isLastCard?: boolean;
}

const Star = ({ className, fill }: { className?: string; fill?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className}
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  additionalImage,
  title,
  rating = 0,
  originalPrice,
  discountedPrice,
  discount,
  isFirstCard = false,
  isLastCard = false,
}) => {
  const borderRadiusClasses = `
    ${isFirstCard ? 'lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg lg:rounded-r-none' : ''}
    ${isLastCard ? 'lg:rounded-tr-lg lg:rounded-br-lg rounded-lg lg:rounded-l-none' : ''}
    ${!isFirstCard && !isLastCard ? 'rounded-lg lg:rounded-none' : ''}
  `;

  const renderRating = () => (
    <div className="flex ml-2">
      {Array(5).fill(null).map((_star, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  return (
    <div className={`bg-white overflow-hidden border border-gray-300 h-[400px]  flex flex-col xs:w-[400px]${borderRadiusClasses}`}>
      <div className="relative mt-4">
        <img src={image} alt={title} className="w-full h-40 object-contain" />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white ml-2 px-2 py-1 rounded-full text-xs">
            {discount}%
          </div>
        )}
      </div>

      <div className="h-6 px-4 pt-2 flex items-center">
        {additionalImage && (
          <img 
            src={additionalImage} 
            alt="Imagem adicional" 
            className="w-16 h-4 object-contain" 
          />
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[14px] font-medium h-12 line-clamp-2">{title}</h3>
          {renderRating()}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-red-500 font-bold text-[22px]">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-black font-medium line-through ml-2">
              ${originalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <button className="w-full text-purple-600 font-medium py-2 px-2 mt-4 border border-purple-600 rounded-full transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductCards: React.FC = () => {
  const productData = [
    {
      image: AppleJuice,
      additionalImage: Organic, 
      title: '100 Percent Apple Juice – 64 floz Bottle',
      rating: 4,
      originalPrice: 1.99,
      discountedPrice: 0.50,
      discount: 75,
    },
    {
      image: GreatValue,
      additionalImage: Coldsale,
      title: 'Great Value Rising Crust Frozen Pizza, Supreme',
      rating: 4,
      originalPrice: 9.99,
      discountedPrice: 8.99,
      discount: 11,
    },
    {
      image: SimplyOrange,
      title: 'Simply Orange Pulp Free Juice – 52 floz',
      rating: 5,
      originalPrice: 4.13,
      discountedPrice: 2.45,
      discount: 41,
    },
    {
      image: Margherita,
      additionalImage: Coldsale,
      title: 'California Pizza Kitchen Margherita, Crispy Thin Crus…',
      rating: 4,
      originalPrice: 14.77,
      discountedPrice: 11.77,
      discount: 21,
    },
    {
      image: Cantaloupe,
      additionalImage: Organic,
      title: 'Cantaloupe Melon Fresh Organic Cut',
      rating: 5,
      originalPrice: 2.98,
      discountedPrice: 1.25,
      discount: 59,
    },
    {
      image: AngelSoft,
      title: 'Angel Soft Toilet Paper, 9 Mega Rolls',
      rating: 4,
      originalPrice: 17.12,
      discountedPrice: 14.12,
      discount: 18,
    },
  ];

  return (
    <div className="w-full h-full bg-white mb-8">
      <div className="px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4 lg:gap-0 w-full    ">
          {productData.map((product, index) => (
            <div key={index} className="lg:flex-1 xs:flex justify-center">
              <ProductCard
                image={product.image}
                additionalImage={product.additionalImage}
                title={product.title}
                rating={product.rating}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                discount={product.discount}
                isFirstCard={index === 0}
                isLastCard={index === productData.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;