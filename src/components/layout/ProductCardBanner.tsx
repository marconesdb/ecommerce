import React from 'react';
import { Heart } from 'lucide-react';
import Philadelphia from '../../assets/images/Philadelphia.svg';
import Cantaloupe from '../../assets/images/Cantaloupe.svg';
import PearlMilling from '../../assets/images/PearlMilling.svg';
import ProteinShake from '../../assets/images/ProteinShake.svg';
import ProductBannerCard01 from '../../assets/images/ProductBannerCard02.svg';
import GreatValue from '../../assets/images/GreatValue.svg';
import Margherita from '../../assets/images/Margherita.svg';
import ThomasBagels from '../../assets/images/ThomasBagels.svg';
import Baguettes from '../../assets/images/Baguettes.svg';
import ProductBannerCard02 from '../../assets/images/ProductBannerCard01.svg';
import Coldsale from '../../assets/images/Coldsale.svg';
import Organic from '../../assets/images/Organic.svg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ArrowRight} from 'lucide-react';

// Componente de Estrelas (mantido igual)
interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  const maxStars = 5;
  const filledStars = Math.min(rating, maxStars);

  return (
    <div className={`flex justify-start items-center space-x-1 h-8 ${className}`}>
      {Array.from({ length: maxStars }, (_, index) =>
        index < filledStars ? (
          <AiFillStar key={index} className="text-yellow-500 w-5 h-5" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-400 w-5 h-5" />
        )
      )}
    </div>
  );
};

interface CardProps {
  


  bgColor: string;
  height: string;
  colSpan: string;
  tagText: string;
  subtitle: string;
  content: string;
  buttonText: string;
  hasImage?: boolean;
  imageUrl?: string;
  additionalImageUrl?: string;
  isBackgroundImage?: boolean;
  backgroundImageUrl?: string;
  discount?: number;
  icon?: React.ReactNode;
  rating?: number;
  discountedPrice?: number;
  originalPrice?: number;
}

const ResponsiveGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Philadelphia Original Cream Cheese Spread – 12oz',
      hasImage: true,
      imageUrl: Philadelphia,
      discount: 20,
      icon: <Heart size={18} className="w-6 h-6 mt-4 ml-16" />,
      rating: 4,
      discountedPrice: 6.99,
      originalPrice: 19.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Cantaloupe Melon Fresh Organic Cut',
      hasImage: true,
      imageUrl: Cantaloupe,
      additionalImageUrl: Organic,
      discount: 15,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 3,
      discountedPrice: 5.99,
      originalPrice: 12.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-3',
      tagText: 'Only This Week',
      subtitle: 'Only this week. Don\'t miss...',
      content: 'With your favorite food, we will make your mood',
      buttonText: 'Shop Now',
      isBackgroundImage: true,
      backgroundImageUrl: ProductBannerCard01,
      discount: 25,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Pearl Milling Company Original Syrup – 24 floz',
      hasImage: true,
      imageUrl: PearlMilling,
      discount: 10,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 3,
      discountedPrice: 14.99,
      originalPrice: 40.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Real Plant-Powered Protein Shake – Double Chocolate – 4pk_44 floz',
      hasImage: true,
      imageUrl: ProteinShake,
      discount: 30,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 4,
      discountedPrice: 11.99,
      originalPrice: 27.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      content: 'Great Value Rising Crust Frozen Pizza, Supreme',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      hasImage: true,
      imageUrl: GreatValue,
      additionalImageUrl: Coldsale,
      discount: 5,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 4,
      discountedPrice: 9.99,
      originalPrice: 26.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'California Pizza Kitchen Margherita, Crispy Thin Crust',
      hasImage: true,
      imageUrl: Margherita,
      additionalImageUrl: Coldsale,
      discount: 20,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 4,
      discountedPrice: 12.99,
      originalPrice: 36.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-3',
      tagText: 'Only This Week',
      subtitle: 'A different kind of grocery store',
      content: 'We are always here to help you with your grocery',
      buttonText: 'Shop Now',
      isBackgroundImage: true,
      backgroundImageUrl: ProductBannerCard02,
      discount: 35,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Thomas Everything Bagels-20oz_6ct',
      hasImage: true,
      imageUrl: ThomasBagels,
      discount: 14,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 4,
      discountedPrice: 8.99,
      originalPrice: 18.99,
    },
    {
      bgColor: '',
      height: 'h-96 lg:h-[450px]',
      colSpan: 'col-span-2',
      tagText: '', // Added empty string
      subtitle: '', // Added empty string
      buttonText: '', // Added empty string
      content: 'Take And Bake Baguettes–14oz_2ct',
      hasImage: true,
      imageUrl: Baguettes,
      discount: 40,
      icon: <Heart size={18} className="mt-4 ml-16 w-6 h-6" />,
      rating: 4,
      discountedPrice: 21.99,
      originalPrice: 36.99,
    },
  ];

  return (
    <div className=" flex-wrap xs:flex-col xs:items-center xs:justify-center grid grid-cols-1 md:grid-cols-4  xs:px-8 p-4 mr-4 ml-4  xs:max-w-[470px] items-center justify-center xs:mx-auto sm:grid-cols-2 xs:gap-y-8  lg:grid-cols-6">
  {cards.map((card, index) => {
    

     // Update column spans for SM screens
     const updatedColSpan = card.isBackgroundImage 
     ?  'sm:col-span-2 md:col-span-4 lg:col-span-2' 
          : 'sm:col-span-1 md:col-span-2 lg:col-span-1';
     
    let roundedClass = '';
    if (index === 0) roundedClass = 'rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg  ';
    if (index === 1) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg sm:rounded-tr-lg lg:rounded-none';
    if (index === 2) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg  ';
    if (index === 3) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg  ';
    if (index === 4) roundedClass = 'xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg xs:rounded-tl-lg lg:rounded-tr-lg';
    if (index === 5) roundedClass = 'sm:rounded-bl-none xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg lg:rounded-bl-lg';
    if (index === 6) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg';
    if (index === 7) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg';
    if (index === 8) roundedClass = 'xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg sm:rounded-bl-lg';
    if (index === 9) roundedClass = 'rounded-br-lg xs:rounded-tl-lg xs:rounded-tr-lg xs:rounded-br-lg  xs:rounded-bl-lg';

    return (
      <div
            key={index}
            className={`${card.bgColor} ${card.height} ${updatedColSpan} ${roundedClass} flex flex-col items-center justify-start text-black text-center border border-gray-300 relative`}
            style={{
              backgroundImage: card.isBackgroundImage ? `url(${card.backgroundImageUrl})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}     
    >
        {card.isBackgroundImage && (
          <div className="absolute -top-24 left-0 w-full h-full flex flex-col justify-center pl-4 ">
            <div className="text-orange-600 font-medium py-1 rounded-full text-xs text-left w-full mt-8 ">
              {card.tagText}
            </div>
            <div className="font-bold text-base text-customBlack text-[24px] text-left w-full mt-4">
              {card.content}
            </div>
            <div className="text-customGray font-medium text-left w-full text-[13px] mt-4">
              {card.subtitle}
            </div>

            <button className="mt-4 self-start flex items-center gap-2 text-xs xs:text-sm font-bold bg-white text-black p-1.5 xs:p-2 sm:p-2 border border-gray-300 hover:bg-purple-600 hover:text-white rounded-full">
              {card.buttonText}
              <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4" />
            </button>
          </div>
        )}

        {card.hasImage && (
          <div className="relative flex items-center justify-center w-full xs:flex-col xs:items-center">
            <img
              src={card.imageUrl}
              alt={`Card ${index + 1}`}
              className="w-40 h-40 object-cover rounded mt-4"
            />
            {card.icon && (
              <div className="absolute top-2 right-2 xs:top-1 xs:right-4 text-gray-500 hover:text-red-500 cursor-pointer transition-colors">
                {card.icon}
              </div>
            )}
            {card.discount && (
              <div className="absolute top-2 left-2 xs:top-1 xs:left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm mt-4">
                {card.discount}%
              </div>
            )}

            
            {card.additionalImageUrl && (
              <img
                src={card.additionalImageUrl}
                alt={`Additional image for Card ${index + 1}`}
                className="w-16 h-4 mt-40 object-cover rounded absolute left-4"
              />
            )} 
          </div>   
        )}

        

        <div className="absolute bottom-4 w-full px-4 ">
        {/* Adicionar o card.content aqui */}
        {[0, 1, 3, 4, 5, 6, 8, 9].includes(index) && card.content && (
            <div className="font-medium text-base text-customBlack text-[24px] text-left w-full h-10  lg:h-28">
              {card.content}
            </div>
          )}

            
          {card.rating && (
            <div className="w-full mt-2 lg:mt-2">
              <StarRating rating={card.rating} />
              <div className="h-12 flex flex-col justify-center">
                <div className="flex items-baseline space-x-2">
                  <span className="text-red-500 font-bold text-[22px]">
                    ${card.discountedPrice?.toFixed(2)}
                  </span>
                  {card.originalPrice && (
                    <span className="text-black font-medium line-through">
                      ${card.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              <div className="h-12 flex justify-center mt-2">
                <button className="font-medium border border-purple-500 text-purple-500 rounded-full h-[40px] w-[98%] p-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98] lg:p-1">
                  Add to cart <span className="ml-4 text-[20px] mb-1">+</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  })}
</div>

  );
};

export default ResponsiveGrid;