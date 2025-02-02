import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NewArrivals from './Pages/NewArrivals/NewArrivals';

// Importe os outros componentes conforme necessário

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newarrivals' element={<NewArrivals />} />
        {/* Defina as outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;