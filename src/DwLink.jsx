//navlink for aboout contact and contact
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const DwLink = () => {
    let navigate = useNavigate();

    let handleLogin=()=>{
        navigate("/login")
       
    }   
    return (
        <div>
       <NavLink to="/about" style={{marginRight:"20px"}}>
        About
        </NavLink>
        <NavLink to="/contact" style={{marginRight:"20px"}}>
        Contact
        </NavLink>
        <NavLink to="/product" style={{marginRight:"20px" }}>
        Product
        </NavLink>
        <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default DwLink
/* 
navlink  for navigation links
to="/about" tells React Router to go to /about path
buttonlink=>use navigate hook */