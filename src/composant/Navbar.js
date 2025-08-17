// src/Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="main-navbar">
            <div className="container d-flex justify-content-between align-items-center">
                <NavLink to="/" className="navbar-brand">
                    Nosy Boraha
                </NavLink>

                {/* Bouton pour mobile */}
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </button>

                {/* Menu de navigation */}
                <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/histoire" className="nav-link" onClick={toggleMenu}>
                            Histoire
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/nature" className="nav-link" onClick={toggleMenu}>
                            Nature
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;