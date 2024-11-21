'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <div className="logo">
            <h1>Yuri <span className='span-color'>Alves</span></h1>
          </div>
          <button
            className="toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776;
          </button>
          <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`} role="navigation">
            <li><a className='active' href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href='#' className="greenButton mobile-button">Download CV</a></li>
          </ul>
          <a href='#' className="greenButton CV">Download CV</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
