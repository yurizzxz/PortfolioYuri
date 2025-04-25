"use client";

import React from "react";
import HeroFooter from "./heroFooter";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/home.css";
import RedirectButton from "@/components/Button";
import SocialNetwork from "@/components/social-network";

const Hero = () => {
  return (
    <main className="container px-5 md:px-0 max-w-6xl overflow-hidden mb-12 md:mb-0">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="hero" id="home">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <header>
              <motion.h2
                className="hero-mini"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="span-color">Olá!</span> Meu nome é
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Yuri <span className="span-color">Alves</span>
              </motion.h1>
            </header>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.8 }}
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
            {/*<HeroFooter />*/}
            <div className="flex gap-4 items-center">
              <RedirectButton href="#contact" className="gap-4">
                Vamos Conversar
                <i className="fas fa-arrow-down"></i>
              </RedirectButton>
              <div className="space-x-4">
                <SocialNetwork />
              </div>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              className="hero-image"
              src="/foto.png"
              width={400}
              height={400}
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
