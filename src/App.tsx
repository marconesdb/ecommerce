import React, { useState } from 'react';
import Header from './components/layout/Header';  // Importação do componente Header
import Navbar from './components/layout/Navbar';  // Importação do componente Navbar
import Carousel from './components/layout/Carrossel';  // Importação do componente Carousel

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
    </div>
  );
};

export default App
