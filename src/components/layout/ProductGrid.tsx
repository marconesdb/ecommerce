import React from 'react';
import { Heart, Star } from 'lucide-react';
import Bananas from '../../assets/images/Bananas.svg';
import Lays from '../../assets/images/Lays.svg';
import Pepperoni from '../../assets/images/Pepperoni.svg';
import GroundBeef from '../../assets/images/GroundBeef.svg';
import Fluoride from '../../assets/images/Fluoride.svg';
import FireSmith from '../../assets/images/FireSmith.svg';
import Organic from '../../assets/images/Organic.svg';
import Coldsale from '../../assets/images/Coldsale.svg';

interface Product {
  discount?: number;
  image: string;
  additionalImage?: string;
  title: string;
  rating?: number;
  price: number;
  oldPrice?: number;
  timeRemaining?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

interface ProductCardProps {
  products?: Product[];
  renderImage?: (product: Product) => React.ReactNode;
  renderTitle?: (product: Product) => React.ReactNode;
  renderPrice?: (product: Product) => React.ReactNode;
  renderRating?: (product: Product) => React.ReactNode;
  renderTimer?: (product: Product) => React.ReactNode;
  renderButton?: () => React.ReactNode;
  renderExtraContent?: (product: Product) => React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  products = [], 
  renderImage = (product: Product) => (
    <div className="flex flex-col items-center justify-center h-60 w-full">
      <div className="h-44 w-full max-w-[300px] flex items-center justify-center">
        <img 
          src={product.image || "https://via.placeholder.com/250"} 
          alt={product.title} 
          className="mt-10 ml-0 md:ml-12 max-h-96 max-w-full object-contain"
        />
      </div>
      {product.additionalImage && (
        <div className="w-16 h-4 flex items-center justify-center">
          <img 
            src={product.additionalImage} 
            alt={`Additional image for ${product.title}`} 
            className="mt-16 mr-0 md:mr-6 max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  ),
  renderTitle = (product: Product) => (
    <h3 className="ml-2 mt-1 text-sm font-semibold">
      {product.title}
    </h3>
  ),
  renderPrice = (product: Product) => (
    <div className="mt-4 ml-2">
      <span className="text-red-500 text-[22px] font-bold">
        ${product.price.toFixed(2)}
      </span>
      {product.oldPrice && (
        <span className="line-through text-slate-800 text-[16px] font-medium ml-2">
          ${product.oldPrice.toFixed(2)}
        </span>
      )}
    </div>
  ),
  renderRating = (product: Product) => (
    <div className="flex ml-2">
      {Array(5).fill(null).map((_star, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < (product.rating || 0) ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i < (product.rating || 0) ? "currentColor" : "none"}
        />
      ))}
    </div>
  ),
  renderTimer = (product: Product) => (
    product.timeRemaining && (
      <div className="mr-0 md:mr-28 mt-12 text-sm text-gray-500 w-full">
        <div className="flex -mt-8 justify-start mb-2 items-center flex-wrap md:flex-nowrap">
          {Object.entries(product.timeRemaining).map(([unit, value]) => (
            <React.Fragment key={unit}>
              <div
                className="m-1 md:mr-1 md:ml-1 flex flex-col items-center justify-start w-6 h-8 p-2 border border-gray-200 bg-gray-100 rounded"
              >
                <span className="text-[12px] font-semibold">{value}</span> 
              </div>
              {unit === 'minutes' && ' :' }
            </React.Fragment>
          ))}
          <div className="ml-2 md:ml-6 text-xs md:text-base">Remains until the end of the offer</div>
        </div>
      </div>
    )
  ),
  renderButton = () => (
    <button
      className="mb-10 font-medium border border-purple-500 text-purple-500 rounded-full mt-4 h-[40px] w-full sm:w-[150px] md:w-[185px] lg:w-[150px] xl:w-[230px] p-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
    >
      Add to cart <span className='ml-4 sm:ml-4 md:ml-10 lg:ml-6 text-[20px] mb-1'> +</span>
    </button>
  ),
  renderExtraContent = () => null
}) => {
  const displayProducts: Product[] = products.length > 0 
    ? products 
    : [
        {
          discount: 41,
          image: Bananas,
          additionalImage: Organic,
          title: "Marketside Fresh Organic Bananas, Bunch",
          rating: 3,
          price: 0.89,
          oldPrice: 1.99,
          timeRemaining: {
            days: 74,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
        {
          discount: 55,
          image: Lays,
          title: "Lay's Classic Potato Snack Chips, Party Size, 13 oz Bag",
          rating: 3,
          price: 1.00,
          oldPrice: 1.99,
          timeRemaining: {
            days: 74,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
        {
          discount: 16,
          image: Pepperoni,
          additionalImage: Coldsale,
          title: "Great Value Classic Crust Pepperoni Microwave Frozen",
          rating: 5,
          price: 1.99,
          oldPrice: 3.99,
          timeRemaining: {
            days: 74,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
        {
          discount: 67,
          image: GroundBeef,
          title: "All Natural 85_15 Ground Beef–1lb",
          rating: 4,
          price: 7.75,
          oldPrice: 8.75,
          timeRemaining: {
            days: 74,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
        {
          discount: 29,
          image: Fluoride,
          title: "ACT Anticavity Fluoride Mouthwash With Zero Alcoho",
          rating: 4,
          price: 2.33,
          oldPrice: 4.33,
          timeRemaining: {
            days: 74,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
        {
          discount: 28,
          image: FireSmith,
          title: "FireSmith Flame Grilled Chicken Breast – Deli Fresh Sliced",
          rating: 3,
          price: 15.91,
          oldPrice: 17.91,
          timeRemaining: {
            days: 45,
            hours: 6,
            minutes: 55,
            seconds: 51,
          },
        },
      ];

  return (
    <div className="-mt-8 flex justify-center items-center w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 mr-4 ml-4">
        {displayProducts.map((product, index) => (
          <div
            key={index}
            className={`xs:mt-4 border p-4 flex flex-col w-full max-w-[614px] h-auto transition-shadow 
              sm:last:rounded-br-lg
              ${index === 0 ? 'xs:rounded-lg' : ''}
              ${index === 0 ? 'sm:rounded-tl-lg' : ''}
              ${index === 1 ? 'xs:rounded-lg' : ''}
              ${index === 1 ? 'sm:rounded-tr-lg' : ''}
              ${index === 2 ? 'xs:rounded-lg' : ''}
              ${index === 2 ? 'lg:rounded-tr-lg' : ''}
              ${index === 1 ? 'lg:rounded-none' : ''}
              ${index === 3 ? 'xs:rounded-lg' : ''}
              ${index === 3 ? 'lg:rounded-bl-lg' : ''}
              ${index === 4 ? 'xs:rounded-lg' : ''}
              ${index === 4 ? 'sm:rounded-bl-lg' : ''}
              ${index === 4 ? 'lg:rounded-none' : ''}
              ${index === 5 ? 'xs:rounded-lg' : ''}
              ${index === 5 ? 'sm:rounded-br-lg' : ''}`}
          >
            <div className="flex flex-col sm:flex-row relative">
              <div className="w-full sm:w-1/3 flex flex-col justify-start items-center relative">
                {product.discount && (
                  <div className="absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                    {product.discount}%
                  </div>
                )}
                
                <Heart 
                  size={18} 
                  className="absolute top-0 right-0 sm:left-24 xl:left-32 lg:left-28  md:left-30  w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer transition-colors" 
                />
                
                {renderImage(product)}
              </div>

              <div className="w-full sm:w-2/3 sm:pl-8 flex flex-col justify-between sm:ml-4 mt-4 sm:mt-0">
                {renderTitle(product)}
                {renderPrice(product)}
                {renderRating(product)}
                {renderButton()}
                
                {renderExtraContent(product)}
              </div>
            </div>

            <div className="pt-4">
              {renderTimer(product)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;