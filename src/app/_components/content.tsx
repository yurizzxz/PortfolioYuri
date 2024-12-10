"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "../_assets/img/img1.png";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Identidade Visual",
    description:
      "Desenvolvo identidades visuais únicas e marcantes que comunicam os valores e a essência da sua marca.",
    icon: "fas fa-palette",
  },
  {
    id: 2,
    title: "Sites Responsivos",
    description:
      "Crio sites modernos e responsivos, garantindo uma experiência fluida em qualquer dispositivo.",
    icon: "fas fa-laptop-code",
  },
  {
    id: 3,
    title: "UI Design",
    description:
      "Desenvolvo designs atrativos que tornam a navegação intuitiva e engajante.",
    icon: "fas fa-pencil-ruler",
  },
];

const Content = () => {
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerServices = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleServices(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const servicesElement = servicesRef.current;
    if (servicesElement) {
      observerServices.observe(servicesElement);
    }

    return () => {
      if (servicesElement) {
        observerServices.unobserve(servicesElement);
      }
    };
  }, []);

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
    <>
      <main className="services-section" id="services" ref={servicesRef}>
        <section className="services">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isVisibleServices ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="services-header"
          >
            <h1 className="services-title">Serviços</h1>
            <p className="services-desc">
              Descubra como posso ajudar a transformar sua marca e presença
              digital com serviços sob medida para suas necessidades!
            </p>
          </motion.div>
          <div className="services-cards">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isVisibleServices ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                }}
                key={service.id}
                className="service-card"
              >
                <div className="card-icon">
                  <i className={`${service.icon} icon-card`}></i>
                </div>
                <div className="card-infos">
                  <h1 className="title-card">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <main className="aboutMe" id="about" ref={aboutRef}>
        <section className="about">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={isVisibleAbout ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{
                duration: 1,
              }}
              className="about-image"
            >
              <Image src={img1} alt="Minha foto" className="image-style" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={isVisibleAbout ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{
                duration: 1,
              }}
              className="about-header"
            >
              <h1 className="about-title">
                Um pouco sobre <span className="span-color">mim...</span>
              </h1>
              <div className="about-text">
                <p>
                  Olá! Sou Yuri, tenho 17 anos e estou cursando o terceiro ano
                  do ensino médio integrado ao técnico em desenvolvimento de
                  sistemas na Etec Itu.
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
                <motion.a
                  href="https://github.com/yurizzxz"
                  className="aboutLink"
                  target="_blank"
                  transition={{
                    delay: 0,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.1,
                  }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yurizzxz/"
                  className="aboutLink"
                  target="_blank"
                  transition={{
                    delay: 0,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                >
                  <i className="fab fa-linkedin"></i>
                </motion.a>
                <motion.a
                  href="https://behance.net/yurizzxz"
                  className="aboutLink"
                  target="_blank"
                  transition={{
                    delay: 0,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                >
                  <i className="fab fa-behance"></i>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Content;
