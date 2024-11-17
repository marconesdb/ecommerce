import React, { useState, useEffect, useCallback } from 'react';
import '../../App.css';

interface CarouselProps {
  isDropdownOpen: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ isDropdownOpen }) => {
  const slides = [
    {
      id: 1,
      content: (
        <div className="relative h-full w-full overflow-hidden">
        {/* Main content container - Adjusted padding for better mobile display */}
        <div className="flex h-full w-full px-4 sm:px-8 md:px-8 py-2 sm:py-6 md:py-12">
          {/* Left content section - Added better mobile spacing */}
          <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3 md:space-y-4">
            {/* Badge - Adjusted for better mobile display */}
            <span className="w-fit rounded-lg px-2 sm:px-4 py-0.5 text-[10px] sm:text-sm text-green-800 bg-gradient-to-r from-[#8bc2a7] via-transparent to-transparent font-semibold">
              Weekend Discount
            </span>

            {/* Heading - Reduced size on mobile */}
            <h2 className="max-w-xs sm:max-w-md text-base sm:text-2xl md:text-4xl font-bold text-purple-900 leading-tight">
              Shopping with us for better <span className='block md:inline'>quality and the best price</span>
            </h2>

            {/* Description - Adjusted size and line height for mobile */}
            <p className="max-w-xs sm:max-w-md text-[10px] sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-normal">
              We have prepared special discounts for you <span className='block md:inline'>
                on grocery products.
                Don't miss these opportunities...
              </span>
            </p>

            {/* CTA Section - Improved mobile layout */}
            <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Button - Adjusted size for mobile */}
              <button className="w-20 sm:w-32 rounded-lg bg-purple-600 px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm text-white hover:bg-purple-700 font-bold">
                Shop Now
              </button>

              {/* Price and offer text container */}
              <div className="flex flex-col space-y-0.5 sm:space-y-1">
                {/* Price display - Adjusted sizes */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm sm:text-xl md:text-2xl font-bold text-red-500">$21.67</span>
                  <span className="text-xs sm:text-lg text-black line-through">$26.67</span>
                </div>

                {/* Offer text - Adjusted size */}
                <p className="text-[8px] sm:text-sm text-gray-500">
                  Don't miss this limited time offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ),
      imageUrl: "/img-carrossel-1.svg",
      bgStyle: ""
    },

    {
      id: 2,
      content: (
        <div className="relative h-full w-full overflow-hidden">
        {/* Main content container - Adjusted padding for better mobile display */}
        <div className="flex h-full w-full px-4 sm:px-8 md:px-8 py-2 sm:py-6 md:py-12">
          {/* Left content section - Added better mobile spacing */}
          <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3 md:space-y-4">
            {/* Badge - Adjusted for better mobile display */}
            <span className="w-fit rounded-lg px-2 sm:px-4 py-0.5 text-[10px] sm:text-sm text-green-800 bg-gradient-to-r from-[#8bc2a7] via-transparent to-transparent font-semibold">
              Weekend Discount
            </span>

            {/* Heading - Reduced size on mobile */}
            <h2 className="max-w-xs sm:max-w-md text-base sm:text-2xl md:text-4xl font-bold text-purple-900 leading-tight">
              Get the best quality <span className='block md:inline'>products at the lowest prices</span>
            </h2>

            {/* Description - Adjusted size and line height for mobile */}
            <p className="max-w-xs sm:max-w-md text-[10px] sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-normal">
              We have prepared special discounts for you <span className='block md:inline'>
                on grocery products.
                Don't miss these opportunities...
              </span>
            </p>

            {/* CTA Section - Improved mobile layout */}
            <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Button - Adjusted size for mobile */}
              <button className="w-20 sm:w-32 rounded-lg bg-purple-600 px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm text-white hover:bg-purple-700 font-bold">
                Shop Now
              </button>

              {/* Price and offer text container */}
              <div className="flex flex-col space-y-0.5 sm:space-y-1">
                {/* Price display - Adjusted sizes */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm sm:text-xl md:text-2xl font-bold text-red-500">$27.99</span>
                  <span className="text-xs sm:text-lg text-black line-through">$56.67</span>
                </div>

                {/* Offer text - Adjusted size */}
                <p className="text-[8px] sm:text-sm text-gray-500">
                  Don't miss this limited time offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ),
      imageUrl: "/img-carrossel-2.svg",
      bgStyle: ""
    },


    {
      id: 3,
      content: (
        <div className="relative h-full w-full overflow-hidden">
        {/* Main content container - Adjusted padding for better mobile display */}
        <div className="flex h-full w-full px-4 sm:px-8 md:px-8 py-2 sm:py-6 md:py-12">
          {/* Left content section - Added better mobile spacing */}
          <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3 md:space-y-4">
            {/* Badge - Adjusted for better mobile display */}
            <span className="w-fit rounded-lg px-2 sm:px-4 py-0.5 text-[10px] sm:text-sm text-green-800 bg-gradient-to-r from-[#8bc2a7] via-transparent to-transparent font-semibold">
              Weekend Discount
            </span>

            {/* Heading - Reduced size on mobile */}
            <h2 className="max-w-xs sm:max-w-md text-base sm:text-2xl md:text-4xl font-bold text-purple-900 leading-tight">
              Get the best quality <span className='block md:inline'>products at the lowest prices</span>
            </h2>

            {/* Description - Adjusted size and line height for mobile */}
            <p className="max-w-xs sm:max-w-md text-[10px] sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-normal">
              We have prepared special discounts for you <span className='block md:inline'>
                on grocery products.
                Don't miss these opportunities...
              </span>
            </p>

            {/* CTA Section - Improved mobile layout */}
            <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Button - Adjusted size for mobile */}
              <button className="w-20 sm:w-32 rounded-lg bg-purple-600 px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm text-white hover:bg-purple-700 font-bold">
                Shop Now
              </button>

              {/* Price and offer text container */}
              <div className="flex flex-col space-y-0.5 sm:space-y-1">
                {/* Price display - Adjusted sizes */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm sm:text-xl md:text-2xl font-bold text-red-500">$47.99</span>
                  <span className="text-xs sm:text-lg text-black line-through">$66.67</span>
                </div>

                {/* Offer text - Adjusted size */}
                <p className="text-[8px] sm:text-sm text-gray-500">
                  Don't miss this limited time offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ),
      imageUrl: "/img-carrossel-3.svg",
      bgStyle: ""
    },



    {
      id: 4,
      content: (
        <div className="relative h-full w-full overflow-hidden">
        {/* Main content container - Adjusted padding for better mobile display */}
        <div className="flex h-full w-full px-4 sm:px-8 md:px-8 py-2 sm:py-6 md:py-12">
          {/* Left content section - Added better mobile spacing */}
          <div className="flex flex-1 flex-col justify-center space-y-1.5 sm:space-y-3 md:space-y-4">
            {/* Badge - Adjusted for better mobile display */}
            <span className="w-fit rounded-lg px-2 sm:px-4 py-0.5 text-[10px] sm:text-sm text-customBrown bg-customPeach '#ffedd5', font-semibold">
              Only This Week
            </span>

            {/* Heading - Reduced size on mobile */}
            <h2 className="max-w-xs sm:max-w-md text-base sm:text-2xl md:text-4xl font-bold text-black leading-tight">
              Grocery <span className='block md:inline'>store with different</span>
            </h2>

            <p className="max-w-xs sm:max-w-md text-base sm:text-2xl md:text-3xl font-bold text-black leading-tight">
              treasures
            </p>


            {/* Description - Adjusted size and line height for mobile */}
            <p className="max-w-xs sm:max-w-md text-[10px] sm:text-sm md:text-base text-gray-600 leading-snug sm:leading-normal">
              We have prepared special discounts for you <span className='block md:inline'>
                on grocery products...
              </span>
            </p>

            {/* CTA Section - Improved mobile layout */}
            <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Button - Adjusted size for mobile */}
              <button className="w-20 sm:w-32 flex items-center justify-center gap-2 rounded-full bg-white px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm text-black hover:bg-customBrown font-bold whitespace-nowrap">
              Shop Now <span>→</span>
            </button>
    
            </div>
          </div>
        </div>
      </div>
      ),
      imageUrl: "/img-carrossel-4.svg",
      bgStyle: ""
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [goToNextSlide]);

  return (
    <div className={`transition-all duration-300 ease-in-out ${isDropdownOpen ? 'ml-custom' : 'ml-0'}`}>
      {/* Adjusted height for better mobile display */}
      <div className={`mt-2 sm:mt-6 md:mt-16 relative w-full h-[280px] sm:h-[340px] md:h-[435px] 2xl:h-[600px]  ${slides[currentSlide].bgStyle} rounded-lg overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
        />

        <div className="relative z-10 w-full h-full flex px-2 sm:px-4">
          {slides[currentSlide].content}

          <button
            onClick={goToPreviousSlide}
            className="absolute top-1/2 left-1 sm:left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 sm:p-3 rounded-full backdrop-blur-sm transition text-xs sm:text-base"
          >
            ❮
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-1 sm:right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 sm:p-3 rounded-full backdrop-blur-sm transition text-xs sm:text-base"
          >
            ❯
          </button>

          <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-0.5 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1 sm:w-2 h-1 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white w-2 sm:w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;