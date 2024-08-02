import React from 'react';

import logo from './Assets/image.png';

const NavBar = () => (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
        </div>
    </nav>
);

export default NavBar;
