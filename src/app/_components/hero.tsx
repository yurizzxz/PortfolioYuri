"use client";

import React from "react";
import HeroFooter from './heroFooter';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Foto from "../_assets/img/foto.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }} 
    >
      <section className="hero" id="home">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <header>
            <motion.h2
              className="hero-mini"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="span-color">Olá!</span> Meu nome é
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Yuri <span className="span-color">Alves</span>
            </motion.h1>
          </header>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Sou um <span className="span-color">Desenvolvedor Front-End</span> e <span className="span-color">Designer Gráfico</span> apaixonado pela
            tecnologia.
          </motion.p>

          <motion.div
            className="icons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="icon-content">
              <i className="fas fa-check-circle icon"></i>
              <p className="text-sm">Técnico em Desenvolvimento de Sistemas na ETEC Itu.</p>
            </div>
            <div className="icon-content">
              <i className="fas fa-check-circle icon"></i>
              <p className="text-sm">Transformo conceitos em soluções eficientes.</p>
            </div>
          </motion.div>

          {/* footer */}
          <HeroFooter />
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            className="hero-image"
            src={Foto}
            alt="Foto de Perfil"
            loading="lazy"
          />
        </motion.figure>
      </section>
    </motion.div>
  );
};

export default Hero;
