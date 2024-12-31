import { ArrowRight } from 'lucide-react';
import bannerPromo1 from '../../assets/images/desconto50.svg';
import bannerPromo2 from '../../assets/images/promo.png';

const BannerPromo = () => {
  return (
    <div className="w-full px-2 xs:px-8 sm:px-8 md:px-8 lg:px-8 xl:px-8">
      {/* Main Banner */}
      <div className="relative flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 
                      items-center justify-between 
                      bg-gradient-to-r from-orange-50 to-orange-100 
                      p-3 xs:p-4 sm:p-5 md:p-5 lg:p-7 xl:p-8 
                      rounded-lg overflow-hidden">
        {/* Text Content */}
        <div className="z-10 w-full xs:w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 
                        mb-4 xs:mb-4 sm:mb-4 md:mb-0 lg:mb-0 xl:mb-0
                        px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
          <h2 className="text-orange-600 font-bold 
                         text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-[22px] xl:text-[24px]
                         leading-tight">
            In store or online your health & safety is our top priority
          </h2>
          <p className="text-gray-600 
                        mt-1 xs:mt-1 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-3
                        text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
            The only supermarket that makes your life easier, makes you enjoy life
            and makes it better
          </p>
        </div>

        {/* Images Container */}
        <div className="absolute inset-0 flex justify-end pointer-events-none 
                        opacity-30 xs:opacity-40 sm:opacity-50 md:opacity-75 lg:opacity-100 xl:opacity-100">
          {/* Image 1 */}
          <div
            className="hidden md:block flex-1 bg-contain bg-no-repeat 
                       bg-right xs:bg-right sm:bg-right md:bg-right lg:bg-right xl:bg-right"
            style={{
              backgroundImage: `url(${bannerPromo1})`,
            }}
          ></div>
          {/* Image 2 */}
          <div
            className="flex-1 overflow-hidden"
            style={{
              clipPath: 'circle(100% at center)',
              backgroundImage: `url(${bannerPromo2})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 
                      items-start xs:items-start sm:items-start md:items-center lg:items-center xl:items-center 
                      justify-between 
                      px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 
                      py-3 xs:py-3 sm:py-4 md:py-4 lg:py-4 xl:py-5 
                      mt-3 xs:mt-3 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-5
                      space-y-3 xs:space-y-3 sm:space-y-3 md:space-y-0 lg:space-y-0 xl:space-y-0">
        {/* Left Content */}
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 
                        items-start xs:items-start sm:items-start md:items-center lg:items-center xl:items-center 
                        gap-1 xs:gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 
                        w-full xs:w-full sm:w-full md:w-auto lg:w-auto xl:w-auto">
          <h2 className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-[18px] xl:text-[20px] 
                         font-bold">
            Popular Companies
          </h2>
          <p className="text-gray-600 
                        text-xs xs:text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-[14px]">
            Some of the new products arriving this weeks
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center gap-2 
                          text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 
                          font-bold hover:bg-purple-600 
                          border border-gray-300 hover:text-white 
                          rounded-full 
                          px-3 xs:px-3 sm:px-4 md:px-4 lg:px-4 xl:px-5 
                          py-1.5 xs:py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2.5
                          w-full xs:w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 
                          justify-center xs:justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start 
                          transition-colors duration-300">
          View All <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4" />
        </button>
      </div>
    </div>
  );
};

export default BannerPromo;