import React from 'react';
import Payment from '../../assets/images/Payment.svg';
import Stocks from '../../assets/images/stocks.svg';
import Quality from '../../assets/images/Quality.svg';
import Delivery from '../../assets/images/Delivery.svg';

const InfoCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 border-b min-h-[144px] md:min-h-[160px]">
      {/* Card 1 */}
      <div className="bg-white rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img src={Payment} alt="Payment" className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base lg:text-lg font-bold">Payment only online</h3>
            <p className="text-gray-500 mt-1 text-xs lg:text-sm font-normal">
              Fastgranskamet betesändedesign. Mobile checkout. Vilgt kaortopa.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img src={Stocks} alt="Stocks" className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base lg:text-lg font-bold">New stocks and sales</h3>
            <p className="text-gray-500 mt-1 text-xs lg:text-sm font-normal">
              Fastgranskamet betesändedesign. Mobile checkout. Vilgt kaortopa.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img src={Quality} alt="Quality" className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base lg:text-lg font-bold">Quality assurance</h3>
            <p className="text-gray-500 mt-1 text-xs lg:text-sm font-normal">
              Fastgranskamet betesändedesign. Mobile checkout. Vilgt kaortopa.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg p-3 md:p-4 transition-all duration-300 hover:shadow-lg cursor-pointer">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <img src={Delivery} alt="Delivery" className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base lg:text-lg font-bold">Delivery from 1 hour</h3>
            <p className="text-gray-500 mt-1 text-xs lg:text-sm font-normal">
              Fastgranskamet betesändedesign. Mobile checkout. Vilgt kaortopa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;