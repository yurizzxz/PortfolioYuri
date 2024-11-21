"use client";

import React from "react";
import HeroFooter from './heroFooter';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Foto from "../_assets/img/fotoperfil.jpg";

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
          <Image
            className="hero-image"
            src={Foto}
            alt="aa"
          />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
