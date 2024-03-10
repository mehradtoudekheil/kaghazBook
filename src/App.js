// import pages 
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"


// import tools 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import { getSugProducts } from "./database/data";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";

function App() {


const sugProducts = getSugProducts();

  // const [chooseProductId , setChooseProductId] = useState(null);
  let chooseProductId = 1;

  return (

    <MyContext.Provider value={{sugProducts , chooseProductId }}>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Product" element={<ProductPage />} />
          
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>

  );
}

export default App;
