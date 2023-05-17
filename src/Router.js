import React from "react";
import Home from "./HandsOn/Home";
import Student from "./HandsOn/Student";
import Contact from "./HandsOn/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function Router(){
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </BrowserRouter>
    )
}
export default Router;