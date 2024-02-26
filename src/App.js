// import pages 
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"


// import tools 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./context/MyContext";
import { getSugProducts } from "./database/data";


function App() {


const sugProducts = getSugProducts();



  return (

    <MyContext.Provider value={{sugProducts}}>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Cart" element={<CartPage />} />
          
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>

  );
}

export default App;
