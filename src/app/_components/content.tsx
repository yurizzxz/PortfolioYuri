"use client";

import React from "react";

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
    </>
  );
};

export default Content;
