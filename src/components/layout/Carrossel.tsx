import React, { useState, useEffect, useCallback } from 'react';

interface CarouselSlide {
  id: number;
  image: string;
  title?: React.ReactNode | string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundColor?: string;
  price?: {
    current: string;
    original: string;
    message: string;
  };
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, nextSlide]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full min-h-[507px]">
      <div className="absolute inset-0">
        <div 
          className="relative w-full h-full transition-all duration-500 ease-in-out"
          style={{ 
            backgroundColor: slides[currentIndex].backgroundColor,
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Background Overlay para garantir legibilidade do texto */}
          <div className="absolute inset-0 " />

          {/* Conteúdo do Slide */}
          <div className="relative container mx-auto h-full px-32 py-16">
            <div className="flex flex-col justify-center h-full max-w-2xl">
              {/* Título e Descrição */}
              <div className="space-y-4">
                {slides[currentIndex].title}
                
                {slides[currentIndex].description && (
                  <p className="text-gray-600 text-lg whitespace-pre-line">
                    {slides[currentIndex].description}
                  </p>
                )}
              </div>

              {/* Área do Preço e Botão */}
              <div className="mt-8 flex items-center space-x-4">
                {slides[currentIndex].buttonText && (
                  <a
                    href={slides[currentIndex].buttonLink || '#'}
                    className="inline-block bg-purple-700 text-white px-8 py-4 rounded-lg 
                             font-semibold hover:bg-purple-800 transition-colors"
                  >
                    {slides[currentIndex].buttonText}
                  </a>
                )}
                
              {slides[currentIndex].price && (
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2"> {/* Alinhamento centralizado */}
                <span className="text-red-600 text-[28px] font-bold">
                  {slides[currentIndex].price.current}
                </span>
                <span className="text-black line-through text-[20px] mt-[3px]"> {/* Ajuste de margem */}
                  {slides[currentIndex].price.original}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <span className="text-sm text-gray-600 text-center">
                  {slides[currentIndex].price.message}
                </span>
              </div>
            </div>
          )}



              </div>
            </div>
          </div>

          {/* Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full
                     hover:bg-white transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full
                     hover:bg-white transition-colors"
          >
            →
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors
                          ${index === currentIndex ? 'bg-purple-700' : 'bg-purple-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
