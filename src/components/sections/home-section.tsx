"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/home.css";
import { RedirectButton } from "@/components/ui/button";
import { CheckCircle, ArrowDown } from "lucide-react";
import { SocialIcons } from "../ui/social-icons";

const Hero = () => {
  return (
    <main className="container mx-auto px-5 md:px-0 max-w-6xl overflow-hidden mb-12 md:mb-0">
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
              <motion.h1
                className="text-xl mb-0 md:mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-purplegradient bg-clip-text text-transparent">Olá!</span> Meu nome é
              </motion.h1>
              <motion.h2
                className="text-7xl font-bold my-[1rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Yuri <span className="bg-purplegradient bg-clip-text text-transparent">Alves</span>
              </motion.h2>
            </header>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Sou um <span className="bg-purplegradient bg-clip-text text-transparent">Desenvolvedor Front-End</span>{" "}
              e <span className="bg-purplegradient bg-clip-text text-transparent">Designer Gráfico</span> apaixonado
              pela tecnologia. Tenho 2 anos de experiência em Desenvolvimento
              Web e sempre estou em busca de aprender cada vez
            </motion.p>

            <motion.div
              className="icons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="icon-content">
                <CheckCircle aria-hidden="true" className="text-primary" />
                <p className="text-sm">
                  Técnico em Desenvolvimento de Sistemas na ETEC Itu.
                </p>
              </div>
              <div className="icon-content">
                <CheckCircle aria-hidden="true" className="text-primary" />
                <p className="text-sm">
                  Cursando Análise e Desenvolvimento de Sistemas na Fatec Itu.
                </p>
              </div>
            </motion.div>

            {/* footer */}
            {/*<HeroFooter />*/}
            <div className="flex gap-6 items-center">
              <RedirectButton
                href="#contact"
                className="gap-4"
                aria-label="Ir para a seção contato"
              >
                Vamos Conversar
                <ArrowDown aria-hidden="true" />
              </RedirectButton>
              <div className="space-x-4">
                <SocialIcons />
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
