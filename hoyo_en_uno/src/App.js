import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/NavBar/Footer';



function App() {
  return (
    <CartContextProvider >
      <BrowserRouter>
          <Footer/>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
            <Route path="detalle/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
