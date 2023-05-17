import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Component/Home';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import Notfound from "./Component/Notfound";
import Product from "./Component/Product";
import ProductDetail from "./Component/ProductDetail";
function Routercomponent(){
   return(
     <BrowserRouter>
     <Routes>
        {/* static Route */}

        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/about-us" elememt={<AboutUs/>}/>
        <Route path="/product" element={<Product/>}/>

{/*         
        page not found route */}

        <Route path="*" element={<Notfound/>}/>

          <Route path="/product-details/:productId" element={<ProductDetail/>}/>
     </Routes>
     </BrowserRouter>
   )
}
export default Routercomponent;