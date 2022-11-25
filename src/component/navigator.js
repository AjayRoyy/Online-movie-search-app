import React from "react";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";
import Navcomp from"./navbarcomp";
import {BrowserRouter,Routes,Route} from "react-router-dom";


const Navbar = ()=>{
    return (
        <div>
        <center><BrowserRouter>
                <Navcomp />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
        </BrowserRouter>
</center>
        </div>
    )
}

export default Navbar;