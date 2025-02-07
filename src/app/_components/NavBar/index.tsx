"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RedirectButton from "../Button";
import "./navbar.css";

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
    <header className="navbar">
      <nav className="navbar-container">
        <div className="container mx-auto max-w-7xl flex flex-row justify-between">
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
            className={`navbar-links ${
              navbarState.mobileMenuOpen ? "active" : ""
            }`}
            role="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { href: "/home", label: "Home" },
              { href: "/about", label: "Sobre" },
              { href: "/works", label: "Serviços" },
              { href: "/projects", label: "Projetos" },
              { href: "/contact", label: "Contato" },
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
            <motion.li
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <RedirectButton
                href="https://drive.google.com/file/d/1oKVGSoL_gXY5dwLRZdoSmLsWvfNdMavg/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </RedirectButton>
            </motion.li>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
