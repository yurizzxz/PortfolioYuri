"use client";

import React from "react";
import Image from "next/image";
import img1 from "../_assets/img/img1.png";

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
    title: "Design para Sites",
    description:
      "Desenvolvo designs profissionais e atrativos que tornam a navegação intuitiva e engajante.",
    icon: "fas fa-pencil-ruler",
  },
];

const Content = () => {
  return (
    <>
      <main className="services-section">
        <section className="services">
          <div className="services-header">
            <h1 className="services-title">Meus serviços</h1>
            <p className="services-desc">
              Descubra como posso ajudar a transformar sua marca e presença
              digital com serviços sob medida para suas necessidades!
            </p>
          </div>
          <div className="services-cards">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="card-icon">
                  <i className={`${service.icon} icon-card`}></i>
                </div>
                <div className="card-infos">
                  <h1 className="title-card">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <main className="aboutMe" hidden>
        <section className="about">
          <div className="about-content">
            <div className="about-image">
              <Image src={img1} alt="Minha foto" className="image-style" />
            </div>
            <div className="about-header">
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
                <a href="https://github.com/yurizzxz" className="aboutLink" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yurizzxz/" className="aboutLink" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://git"  className="aboutLink"target="_blank"><i className="fab fa-behance"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Content;
