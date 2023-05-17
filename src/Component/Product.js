import React from "react";
import { Link } from "react-router-dom";
const data=[
    {
        id:1,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2022
    },
    {
         id:2,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2023
    },

    {
        id:3,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2024
    },

    {
        id:4,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2025
    },

    {
        id:5,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2026
    },

    {
        id:6,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2027
    },

    {
        id:7,
        Name:"MOHD ARIF",
        Course:"BCA",
        Year:2028
    }


]


function Product(){
    return(
        <>
        <h1>Student Details</h1>
        <ul>
           { data.map((item)=>{
            return(
                <li key={item.id}>
                    <div>
                    <p>{item.Name}</p>
                    <p>{item.Year}</p>
                    <p>{item.Course}</p>
                    </div>
                    <Link to={`/product-details/:${`item.id`}`}>
                    <button>Show Details</button>
                    </Link>
                   
                </li>
            )
           })

           }
        </ul>
        
        </>
    )
}
export default Product;