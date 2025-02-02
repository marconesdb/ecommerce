// Home.tsx
import React from 'react';
import Carousel from './Carrossel';
import InfoCard from './InfoCard';
import ProductCarousel from './ProductCarousel';
import ProductCards from './ProductCard';
import FeaturedProducts from './FeaturedProducts';
import ProductGrid from './ProductGrid';
import BannerSection from './BannerSection';
import ProductCardBanner from './ProductCardBanner';
import BannerPromo from './BannerPromo';
import Testimonial from './Testimonial';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header e Navbar */}
      <Header 
        deliveryTime="7:00 to 23:00"
        cartItemsCount={2}
        wishlistItemsCount={1} 
      />
      <Navbar/>
      
      {/* Main */}
      <main>
      <div className="w-full mx-auto py-6">
      <Carousel isDropdownOpen={false} />
      <InfoCard />
      <ProductCarousel />
      <ProductCards />
      <FeaturedProducts />
      <ProductGrid />
      <BannerSection />
      <ProductCardBanner />
      <BannerPromo />
      <Testimonial />
    </div>
      
      </main>

      {/* Footer */}
      <Footer />
    </div>
    
  );
};

export default Home;
