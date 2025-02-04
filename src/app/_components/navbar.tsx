"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RedirectButton from "./Button";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState({
    mobileMenuOpen: false,
    isScrolled: false,
    activeLink: "#home",
  });

  const toggleMobileMenu = () => {
    setNavbarState((prevState) => ({
      ...prevState,
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }));
  };

  const handleLinkClick = (link: string) => {
    setNavbarState((prevState) => ({
      ...prevState,
      activeLink: link,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarState((prevState) => ({
        ...prevState,
        isScrolled: window.scrollY > 40,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${navbarState.isScrolled ? "scrolled" : ""}`}>
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
          className={`navbar-links ${navbarState.mobileMenuOpen ? "active" : ""}`}
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
              <Link
                href={href}
                className={navbarState.activeLink === href ? "active" : ""}
                onClick={() => handleLinkClick(href)}
              >
                {label}
              </Link>
            </motion.li>
          ))}
          <motion.li className="md:hidden" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
             <RedirectButton href="#" children="Download CV" target="_blank" rel="noopener noreferrer" />
          </motion.li>
        </motion.ul>

        <motion.div
          className="hidden md:block rounded-md transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
        >
          <RedirectButton href="#" children="Download CV" target="_blank" rel="noopener noreferrer" />
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
