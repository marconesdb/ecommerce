import Header from './components/layout/Header';


export default function App() {
  return (
    <>
    <Header 
      deliveryTime="7:00 to 23:00"
      cartItemsCount={2}
      wishlistItemsCount={1}
    />
    </>
  )
}