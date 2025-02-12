"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroFooter = () => {
  return (
    <motion.footer
      className="hero-footer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <i className="devicon-html5-plain" style={{ fontSize: "40px" }}></i>
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <i className="devicon-css3-plain" style={{ fontSize: "45px" }}></i>
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <i
          className="devicon-javascript-plain"
          style={{ fontSize: "40px" }}
        ></i>
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <i className="devicon-react-original" style={{ fontSize: "40px" }}></i>
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <i className="devicon-photoshop-plain" style={{ fontSize: "40px" }}></i>
      </motion.div>
      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <i className="devicon-nextjs-original" style={{ fontSize: "40px" }}></i>
      </motion.div>
    </motion.footer>
  );
};

export default HeroFooter;
