import Header from './components/layout/Header';
import Carrossel from './components/layout/Carrossel'


const slides = [
  {
    id: 1,
    image: "/img-carrossel-1.svg", 
    title: (
      <>
        <span className="inline-block px-3 py-1  bg-gradient-to-r from-[#8bc2a7] via-transparent to-transparent text-xs rounded text-customgreen mb-4 font-semibold">
          Weekend Discount
        </span>
        <h2 className="text-5xl font-bold text-purple-900 leading-tight mb-4">
        <span className="block">Shopping with us for</span>
        <span className="block">better quality and the </span><span className="block">best price</span>
      </h2>

      </>
    ),
    description: "We have prepared special discounts for you on grocery products.\nDon't miss these opportunities...",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    price: {
      current: "$21.67",
      original: "$26.67",
      message: "Don't miss this limited time offer"
    },
    backgroundColor: "#f3f0f9" // Cor roxa clara de fundo
  },
  // {
  //   id: 2,
  //   image: "/img-carrossel-2.svg",
  //   title: "Ofertas Especiais",
  //   description: "Até 50% de desconto em produtos selecionados",
  //   buttonText: "Ver Ofertas",
  //   buttonLink: "/ofertas",
  //   backgroundColor: "#2a2a2a"
  // },


  // {
  //   id: 3,
  //   image: "/img-carrossel-3.svg",
  //   title: "Bem-vindo à nossa loja",
  //   description: "Descubra produtos incríveis com os melhores preços",
  //   buttonText: "Comprar Agora",
  //   buttonLink: "/produtos",
  //   backgroundColor: "#1a1a1a" // Cor de fallback caso a imagem demore para carregar
  // },
  // {
  //   id: 4,
  //   image: "/img-carrossel-4.svg",
  //   title: "Ofertas Especiais",
  //   description: "Até 50% de desconto em produtos selecionados",
  //   buttonText: "Ver Ofertas",
  //   buttonLink: "/ofertas",
  //   backgroundColor: "#2a2a2a"
  // },
  // ... mais slides
];


export default function App() {
  return (
    <>
    <Header 
      deliveryTime="7:00 to 23:00"
      cartItemsCount={2}
      wishlistItemsCount={1}
    />

    
        <Carrossel slides={slides} autoPlayInterval={7000} />
    
    </>
  )
}