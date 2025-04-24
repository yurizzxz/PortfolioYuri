"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RedirectButton from "../Button";
import "./navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest(".navbar-container")
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar px-4 ${isScrolled ? "scrolled bg-cardcolor transition-all" : ""}`}>
      <nav className="navbar-container">
        <div className="container mx-auto bg-cardcolor py-4 md:py-4 md:px-7 rounded-xl max-w-6xl flex flex-row justify-between items-center">
          <div className="flex items-center gap-8">
            <motion.a
              href="/"
              className="logo"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Yuri <span className="text-[var(--primary)]">Alves</span>
              </h1>
            </motion.a>
          </div>

          <button
            className="toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            &#9776;
          </button>

          <motion.ul
            className={`navbar-links bg-heroBg border-b border-[var(--border)] lg:border-none ${mobileMenuOpen ? "active" : ""}`}
            role="navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "Sobre" },
              { href: "#services", label: "Serviços" },
              { href: "#projects", label: "Projetos" },
              { href: "#contact", label: "Contato" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={activeLink === href ? "active" : ""}
                  onClick={() => handleLinkClick(href)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <RedirectButton
              href="https://drive.google.com/file/d/1x9HWRTn_48CBSbGrdWmX20Rm5HDtfSxh/view?usp=sharing"
              target="_blank"
              variant="default"
              rel="noopener noreferrer"
            >
              Download CV
            </RedirectButton>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
