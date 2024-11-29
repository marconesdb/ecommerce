import React from "react";
import bannerPromo1 from '../../assets/images/desconto50.svg';
import bannerPromo2 from '../../assets/images/promo.svg';
import { ArrowRight } from 'lucide-react';
const BannerPromo: React.FC = () => {
  return (
    <div>
      <div className="relative flex items-center justify-between bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
        {/* Texto */}
        <div className="z-10">
          <h2 className="text-orange-600 font-bold text-lg md:text-xl">
            In store or online your health & safety is our top priority
          </h2>
          <p className="text-gray-600 mt-2">
            The only supermarket that makes your life easier, makes you enjoy life
            and makes it better
          </p>
        </div>
        {/* Contêiner das imagens */}
        <div className="absolute inset-0 flex justify-end pointer-events-none">
          {/* Imagem 1 */}
          <div
            className="flex-1 bg-contain bg-no-repeat bg-right"
            style={{
              backgroundImage: `url(${bannerPromo1})`,
            }}
          ></div>
          {/* Imagem 2 */}
          <div
            className="flex-1 overflow-hidden "
            style={{
              clipPath: 'circle(100% at center)', // Ajuste o valor e a forma para a área desejada
              backgroundImage: `url(${bannerPromo2})`,
              backgroundPosition: 'top',
              backgroundSize: 'cover', // Use 'cover' ou 'contain' conforme necessário
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
        </div>
      
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
          <h2 className="text-[18px] font-bold">Popular Companies</h2>
          <p className="text-gray-600 text-sm text-[13px]">
          Some of the new products arriving this weeks
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold hover:bg-purple-600 border border-gray-300  hover:text-white rounded-full px-4 py-2">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BannerPromo;
