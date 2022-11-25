import React from "react";
import { Link } from "react-router-dom";

const Navcomp = ()=>{
    return (
        <div>
            <ul>
                <Link to = "/"><li>Home</li></Link>
                <Link to = "/about"><li>About</li></Link>
                <Link to = "/dashboard"><li>Dashboard</li></Link>
            </ul>
        </div>
    )
}


export default Navcomp;