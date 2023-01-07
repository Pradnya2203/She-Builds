import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="main-navbar">
            <p>Logo</p>
            <div className='link'>
                <Link className='home' to="/">Home</Link>
                <Link className='reg' to="/register_complaint">Register Complaint</Link>
                <Link className='oth' to="/other_complaint">Other Complaints</Link>
                <Link className='your' to="/your_complaint">Your Complaints</Link>
            </div>
            <div className='contact'>
                <Link className='contact' to="/contact_us">Contact Us</Link>
            </div>
        </div>
    );
  };
    
  export default Navbar;