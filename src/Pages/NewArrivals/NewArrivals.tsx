// Home.tsx
import React from 'react';
import ProductCategories from '../NewArrivals/ProductCategories';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Carrossel from '../Home/Carrossel'

const NewArrivals: React.FC = () => {
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
      <Carrossel isDropdownOpen={false}/>
      <ProductCategories/> 
      
      </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
    
    

  );
};

export default NewArrivals;
