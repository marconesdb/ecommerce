import React from 'react';
import bannerImage1 from '../../assets/images/banner-section-1.svg';
import bannerImage2 from '../../assets/images/banner-section-2.svg';
import { ArrowRight } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
  highlightText: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, buttonText, imageUrl, highlightText }) => {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-col bg-white rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-0 mr-8 ml-8"
      style={{
        height: '350px', // Substitua por 100px a mais que a altura original desejada
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex-1 bg-opacity-80 p-4 rounded-lg">
        <span className="text-customBrown font-bold text-sm bg-warmBeige rounded-full p-2">{highlightText}</span>
        <h2 className="text-[28px] font-bold text-gray-900 mt-2 sm:w-[300px] md:w-[150px] lg:w-[300px] break-words sm:break-normal text-sm  sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl whitespace-normal">
          {title}
        </h2>
        <p className="text-gray-500 mt-2 text-[13px]">{subtitle}</p>
        <button className="mt-3 flex items-center gap-2 text-sm font-bold bg-white text-black p-2 border border-gray-300 hover:text-white rounded-full hover:bg-purple-600">
          {buttonText} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const BannerSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Banner
          highlightText="Only This Week"
          title="Make your grocery shopping easy with us"
          subtitle="Only this week. Don’t miss..."
          buttonText="Shop Now"
          imageUrl={bannerImage1}
        />
        <Banner
          highlightText="Only This Week"
          title="Get your everyday needs here with us"
          subtitle="A different kind of grocery store"
          buttonText="Shop Now"
          imageUrl={bannerImage2}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
          <h2 className="text-[18px] font-bold">Best Sellers</h2>
          <p className="text-gray-600 text-sm text-[13px]">
            Some of the new products arriving this weeks
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold hover:bg-purple-600 border border-gray-300 hover:text-white rounded-full px-4 py-2">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
