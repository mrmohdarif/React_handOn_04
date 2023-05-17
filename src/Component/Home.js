import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>This is  Home</h1>
        <ul>
            <Link to="/">
            <li>
                Home 
            </li>
            </Link>
            <Link to="/contact-us">
              <li>ContactUs</li>           
            </Link>
            <Link to="about-us">
            <li>AboutUs</li>
            </Link>
            <Link to="/product">
            <li>
                Student Details
            </li>
            </Link>
        </ul>
        </>
    )
}
export default Home;