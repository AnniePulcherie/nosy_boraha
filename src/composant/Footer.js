// src/Footer.js

import React from 'react';
import '../style/Footer.css'; // Créez ce fichier pour le style

const Footer = () => {
    return (
        <footer className="main-footer py-4">
            <div className="container text-center">
                <p className="footer-text mb-2">
                    &copy; 2025 Nosy Boraha. Tous droits réservés.
                </p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" className="social-icon-link">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" className="social-icon-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" className="social-icon-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;