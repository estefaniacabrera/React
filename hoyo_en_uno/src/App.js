import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
          <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
