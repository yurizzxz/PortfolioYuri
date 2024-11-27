"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar-container">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Yuri <span className="span-color">Alves</span>
            </h1>
          </motion.div>

          <button
            className="toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776;
          </button>

          <motion.ul
            className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}
            role="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "Sobre" },
              { href: "#services", label: "Serviços" },
              { href: "#projects", label: "Projetos" },
              { href: "#contact", label: "Contato" },
            ].map(({ href, label }) => (
              <motion.li
                key={href}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={href}
                  className={activeLink === href ? "active" : ""}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </a>
              </motion.li>
            ))}
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#" className="greenButton mobile-button">
                Download CV
              </a>
            </motion.li>
          </motion.ul>

          <motion.a
            href="#"
            className="greenButton CV"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
          >
            Download CV
          </motion.a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
