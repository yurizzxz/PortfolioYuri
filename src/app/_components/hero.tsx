"use client";

import React from "react";
import HeroFooter from './heroFooter';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <section className="hero">
        <div className="hero-text">
          <header>
            <h2 className="hero-mini">
              <span className="span-color">Olá!</span> Meu nome é
            </h2>
            <h1>
              Yuri <span className="span-color">Alves</span>
            </h1>
          </header>

          <p className="hero-desc">
            Sou um Desenvolvedor Front-End e Designer Gráfico apaixonado pela
            tecnologia.
          </p>

          <div className="icons">
            <div className="icon-content">
              <i className="fas fa-check-circle icon"></i>
              <p>Text</p>
            </div>
            <div className="icon-content">
              <i className="fas fa-check-circle icon"></i>
              <p>Text</p>
            </div>
          </div>

          {/* footer */}
          <HeroFooter />

        </div>

        <figure>
          <img
            className="hero-image"
            src="https://via.placeholder.com/600x600"
            alt="Imagem representando o produto"
          />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
