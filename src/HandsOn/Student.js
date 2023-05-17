import React  from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Student(){
    return(
        <>
        <Nav/>
        <div className="student_btn">
            <span>Student Details</span>
            <button className="btn">Add New Student</button>
        </div>
        <table className="Table">
            <thead> 
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                     <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                <tr>
                    <td>MOHD ARIF</td>
                    <td>22</td>
                    <td>EA21</td>
                    <td><Link>Edit</Link></td>
                    
                </tr>
                
            </tbody>
        </table>
        </>
    )
}

export default Student;