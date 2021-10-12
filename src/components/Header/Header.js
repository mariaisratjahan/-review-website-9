import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
             
            <nav className="header-container">
            <h1 className="p-4 text-primary">Language Learning Platform</h1>
               <NavLink className="nav-text" to="/home">Home</NavLink>
               <NavLink className="nav-text " to="/about">About Us</NavLink> 
               <NavLink className="nav-text " to="/services">Services</NavLink> 
               <NavLink className="nav-text " to="/contact">Contact Us</NavLink>  
            </nav>
        </div>
    );
};

export default Header;