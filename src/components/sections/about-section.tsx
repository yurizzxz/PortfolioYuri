"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/about.css";

const AboutMe = () => {
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerAbout = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleAbout(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      observerAbout.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observerAbout.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <main className="aboutMe" id="about" ref={aboutRef}>
      <section className="about">
        <div className="about-content">
          <motion.div
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
            className="about-image"
          >
            <Image
              src="/img1.png"
              alt="Foto Dev"
              width={1000}
              height={1000}
              loading="lazy"
              className="image-style"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isVisibleAbout ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="about-header"
          >
            <h1 className="about-title">
              Um pouco sobre <span className="span-color">mim...</span>
            </h1>
            <div className="about-text">
              <p>
                Olá! Sou Yuri, tenho 17 anos e sou formado no Ensino Médio
                integrado ao técnico em desenvolvimento de sistemas na Etec
                Itu. Atualmente estou cursando o 1° semestre de Analise e
                Desenvolvimento de Sistemas na FATEC Itu.
              </p>
              <p>
                Ao longo da minha trajetória, atuei como designer gráfico para
                diversas páginas focadas em futebol. Durante esse tempo,
                desenvolvi conteúdos visuais atrativos, utilizando Photoshop
                para criar designs criativos e estratégicos.
              </p>
              <p>
                Atualmente, busco aprimorar minhas habilidades como
                desenvolvedor front-end e expandir meus conhecimentos para
                novas áreas da tecnologia, sempre com o objetivo de criar
                soluções inovadoras e funcionais.
              </p>
            </div>
            <div className="aboutFooter">
             
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
