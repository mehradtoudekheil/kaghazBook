// import pages 
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"
import ProductPage from "./pages/ProductPage";
import AccountRegPage from "./pages/AccountRegPage";


// import tools 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import { getSugProducts , getCategory } from "./database/data";
import { useState } from "react";

function App() {

  //get product from data.js
  let sugProducts = getSugProducts();
  let category = getCategory();

  // choosen product id for show in product page
  let chooseProductId = 1;

  // login and register condition state
  const [signStatus , setSignStatus] = useState(true); // true means signup page and false is login page 

   
  // add to cart 
  // cartIndex
  const [cartIndex , setCartIndex] = useState(0);
  // add to cart function
  const addToCartFunc = (id)=>{
    let myProduct = sugProducts;
    myProduct.map(item=>{
      if(item.id == id){

        if(item.addToCart){
          item.indexQ += 1;
        }else{
          item.addToCart = true;
          item.indexQ = 1;
        }

        
      }
    })
    sugProducts = myProduct;
  }


  return (

    <MyContext.Provider value={{sugProducts , category , chooseProductId , signStatus , setSignStatus , addToCartFunc , cartIndex , setCartIndex }}>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/signup" element={<AccountRegPage />} />
          
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>

  );
}

export default App;
