import { ArrowRight } from 'lucide-react';
import banner01 from '../../assets/images/banner-01.svg';
import banner02 from '../../assets/images/banner-02.svg';
import banner03 from '../../assets/images/banner-03.svg';

interface Product {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    tag: "Only This Week",
    title: "Quality eggs at an affordable price",
    description: "Eat one every day",
    imageUrl: banner01,
  },
  {
    tag: "Only This Week",
    title: "Snacks that nourishes our mind and body",
    description: "Shine the morning...",
    imageUrl: banner02,
  },
  {
    tag: "Only This Week",
    title: "Unbeatable quality, unbeatable prices.",
    description: "Only this week, Don't miss...",
    imageUrl: banner03,
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="relative flex-shrink-0 w-full md:w-1/3">
    <div className="relative h-64 rounded-lg overflow-hidden group shadow">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0">
        <div className="absolute top-4 p-4 text-white">
          <span className="text-sm font-medium text-orange-400">{product.tag}</span>
          <h3 className="text-[22px] font-bold mt-1 text-black w-[250px] break-words">{product.title}</h3>
          <p className="text-sm opacity-90 mt-1 text-[13px] text-customGray">{product.description}</p>
          <button className="mt-3 flex items-center gap-2 text-sm font-bold bg-white text-black p-2 border border-gray-300 rounded-full hover:bg-purple-600">
            Shop Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProductCarousel = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-center md:justify-start md:ml-8 md:mr-16">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <p className="text-gray-600 text-sm mt-2">
            Don't miss this opportunity at a special discount just for this week.
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold hover:bg-purple-600 border border-gray-300 rounded-full px-4 py-2">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;