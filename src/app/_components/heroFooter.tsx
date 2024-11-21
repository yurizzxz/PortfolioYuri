"use client";

import React from "react";
import Image from "next/image";
import htmlIcon from "../_assets/img/html.webp";
import cssIcon from "../_assets/img/css.png";
import jsIcon from "../_assets/img/js.png";
import reactIcon from "../_assets/img/react.png";
import photoshopIcon from "../_assets/img/ps.png";
import { motion } from "framer-motion";

const HeroFooter = () => {
  return (
    <motion.div
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
        <Image
          src={htmlIcon}
          alt="HTML"
          width={50}
          height={50}
        />
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          src={cssIcon}
          alt="CSS"
          width={55}
          height={50}
        />
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image
          src={jsIcon}
          alt="JavaScript"
          width={48}
          height={50}
        />
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src={reactIcon}
          alt="React"
          width={50}
          height={50}
        />
      </motion.div>

      <motion.div
        className="footer-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Image
          src={photoshopIcon}
          alt="Photoshop"
          width={50}
          height={50}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroFooter;
