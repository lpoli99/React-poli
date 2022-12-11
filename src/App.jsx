import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/cartView";
import Finish from "./components/Finish/finish";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView/>}/>
            <Route path="/finish/:idOrder" element={<Finish/>}/>


            <Route path="*" element={<h1 className="h1Error">Uy! Esta página no existe :(.</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
