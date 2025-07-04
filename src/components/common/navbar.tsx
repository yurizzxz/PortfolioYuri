"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RedirectButton } from "@/components/ui/button";
import "@/styles/navbar.css";
import { links } from "@/constants/links";

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
    <header
      className={`navbar bg-common border-b-[0.01px]  border-[var(--border)] px-4 ${
        isScrolled ? "scrolled transition-all" : ""
      }`}
    >
      <nav className="navbar-container" aria-label="Menu principal">
        <div className="container mx-auto py-1.5 md:py-4 md:px-1 rounded-xl max-w-6xl flex flex-row justify-between items-center">
          <div className="flex items-center gap-8">
            <motion.a
              href="/"
              className="logo"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl font-semibold">
                Yuri <span className="text-[var(--primary)] ">Alves</span>
              </h1>
            </motion.a>
          </div>

          <button
            className="toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Alternar menu mobile"
            aria-expanded={mobileMenuOpen}
            aria-controls="navbar-links"
          >
            &#9776;
          </button>

          <motion.ul
            id="navbar-links"
            className={`navbar-links bg-background border-b border-[var(--border)] lg:border-none ${
              mobileMenuOpen ? "active" : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {links.map(({ href, name }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={activeLink === href ? "active" : ""}
                  onClick={() => handleLinkClick(href)}
                  aria-current={activeLink === href ? "page" : undefined}
                >
                  {name}
                </Link>
              </li>
            ))}
            <RedirectButton
              href="https://drive.google.com/file/d/1x9HWRTn_48CBSbGrdWmX20Rm5HDtfSxh/view?usp=sharing"
              target="_blank"
              variant="default"
              aria-label="Baixar Currículo"
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
