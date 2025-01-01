import React, { useState } from 'react';
import Header from './components/Header';  // Importação do componente Header
import Navbar from './components/Navbar';  // Importação do componente Navbar
import Footer from './components/Footer'
import Carousel from '../src/Pages/Home/Carrossel';  // Importação do componente Carousel
import InfoCard from '../src/Pages/Home/InfoCard'
import ProductCarousel from '../src/Pages/Home/ProductCarousel';
import ProductCards from '../src/Pages/Home/ProductCard';
import FeaturedProducts from '../src/Pages/Home/FeaturedProducts';
import ProductGrid from '../src/Pages/Home/ProductGrid'
import BannerSection from '../src/Pages/Home/BannerSection';
import ProductCardBanner from '../src/Pages/Home/ProductCardBanner';
import BannerPromo from '../src/Pages/Home/BannerPromo';
import Testimonial from '../src/Pages/Home/Testimonial'


const App: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header e Navbar */}
      <Header 
        deliveryTime="7:00 to 23:00"
        cartItemsCount={2}
        wishlistItemsCount={1} 
      />
      <Navbar onDropdownToggle={setIsDropdownOpen} />

      {/* Conteúdo principal com o carrossel */}
      <main className="w-full mx-auto  py-6">
        <Carousel isDropdownOpen={isDropdownOpen} />
      </main>
      <InfoCard />
      <ProductCarousel/>
      <ProductCards />
      <FeaturedProducts />
      <ProductGrid />
      <BannerSection/>
      <ProductCardBanner />
      <BannerPromo/>
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default App
