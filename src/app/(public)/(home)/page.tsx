"use client";

import React from "react";
import HeroFooter from "@/app/_components/heroFooter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Foto from "@/app/_assets/img/foto.png";
import { motion } from "framer-motion";
import "./home.css";

const Hero = () => {
  return (
    <main className="container max-w-7xl overflow-hidden">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
                transition={{ duration: 1 }}
              >
                Yuri <span className="span-color">Alves</span>
              </motion.h1>
            </header>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Sou um <span className="span-color">Desenvolvedor Front-End</span>{" "}
              e <span className="span-color">Designer Gráfico</span> apaixonado
              pela tecnologia. Tenho cerca de 2 anos no desenvolvimento web e
              mobile e sempre estou em busca de aprender cada vez
            </motion.p>

            <motion.div
              className="icons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="icon-content">
                <i className="fas fa-check-circle icon"></i>
                <p className="text-sm">
                  Técnico em Desenvolvimento de Sistemas na ETEC Itu.
                </p>
              </div>
              <div className="icon-content">
                <i className="fas fa-check-circle icon"></i>
                <p className="text-sm">
                  Cursando Análise e Desenvolvimento de Sistemas na Fatec Itu.
                </p>
              </div>
            </motion.div>

            {/* footer */}
            <HeroFooter />
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
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
    </main>
  );
};

export default Hero;
