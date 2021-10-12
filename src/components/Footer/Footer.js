import React from 'react';
import './Footer.css';
import {FaFacebookSquare, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-primary text-white p-3">
                <h4>Follow Us On</h4>
                 <p>
                 <FaFacebookSquare className="icon"/>                  
                  <FaTelegram className="icon"/>
                  <FaLinkedin className="icon"/>
                 
                 </p>
            </footer>
        </div>
    );
};

export default Footer;