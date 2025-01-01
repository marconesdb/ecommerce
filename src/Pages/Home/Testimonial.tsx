import React from 'react';
import Elowen from '../../assets/images/Elowen Thatcher.png';
import Darian from '../../assets/images/Darian Montgomery.png';
import Cressida from '../../assets/images/Cressida Hartwell.png';
import Silas from '../../assets/images/Silas Everly.png';

interface Store {
  name: string;
  rating: number;
  reviews: number;
  description: string;
  image?: string;
}

const getResponsiveBorderClasses = (
  index: number,
  total: number
) => {
  const positions = {
    mobile: {
      isLast: index === total - 1,
    },
    tablet: {
      isTopLeft: index === 0,
      isTopRight: index === 1,
      isBottomLeft: index === 2,
      isBottomRight: index === 3,
      isRight: index % 2 === 1,
      isBottom: index < total - 2,
    },
    desktop: {
      isFirst: index === 0,
      isLast: index === total - 1,
    }
  };

  const classes = [
    // Base styles
    'bg-white',
    'border border-gray-200 rounded-lg',
    'mb-4',
    
    // Tablet specific (sm and md)
    'sm:mb-0',
    'sm:rounded-none',
    positions.tablet.isTopLeft ? 'sm:rounded-tl-lg' : '',
    positions.tablet.isTopRight ? 'sm:rounded-tr-lg' : '',
    positions.tablet.isBottomLeft ? 'sm:rounded-bl-lg' : '',
    positions.tablet.isBottomRight ? 'sm:rounded-br-lg' : '',
    positions.tablet.isRight ? 'sm:border-l-0' : '',
    positions.tablet.isBottom ? 'sm:border-b' : '',

    // Desktop specific (lg)
    'lg:rounded-none',
    positions.desktop.isFirst ? 'lg:rounded-l-lg' : '',
    positions.desktop.isLast ? 'lg:rounded-r-lg' : '',
  ];

  return classes.filter(Boolean).join(' ');
};

const StoreCard: React.FC<Store & { index: number; total: number }> = ({
  name,
  rating,
  reviews,
  description,
  image,
  index,
  total
}) => {
  const stars = Array(5).fill(0).map((_, idx) => (
    <span key={idx} className={`text-base sm:text-lg ${idx < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
      ★
    </span>
  ));

  const borderClasses = getResponsiveBorderClasses(index, total);

  return (
    <div className={borderClasses}>
      <div className="p-4 sm:p-6 ">
        <div className="flex items-start gap-2 sm:gap-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />
          )}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">Featured</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-1 sm:mt-2">
              {stars}
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-500">{reviews}</span>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-200 my-2 sm:my-3"></div>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const StoreGrid: React.FC = () => {
  const stores = [
    { name: 'Elowen Thatcher', rating: 4, reviews: 41, description: 'Good quality product can only be found in good stores', image: Elowen },
    { name: 'Darian Montgomery', rating: 4, reviews: 37, description: 'All kinds of grocery products are available in our store.', image: Darian },
    { name: 'Cressida Hartwell', rating: 3, reviews: 35, description: 'Our work can definitely support the local economy.', image: Cressida },
    { name: 'Silas Everly', rating: 3, reviews: 30, description: 'Save your time – save your money – shop from our grocery store.', image: Silas }
  ];

  return (
    <div className="mx-auto px-8 mb-16 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xs:gap-4">
        {stores.map((store, index) => (
          <StoreCard
            key={store.name}
            {...store}
            index={index}
            total={stores.length}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreGrid;