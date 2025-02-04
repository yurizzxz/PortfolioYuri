"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./works.css";

const services = [
  {
    id: 1,
    title: "Identidade Visual",
    description:
      "Desenvolvo identidades visuais únicas e marcantes que comunicam os valores e a essência da sua marca.",
    icon: "palette",
  },
  {
    id: 2,
    title: "Sistemas Web",
    description:
      "Crio sistemas web com visuais modernos e responsivos, garantindo uma experiência fluida em qualquer dispositivo.",
    icon: "desktop_windows",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Desenvolvo interfaces atraentes e experiências intuitivas que tornam a navegação fluida e intuitiva para o usuário.",
    icon: "touch_app",
  },
  {
    id: 4,
    title: "Apps Modernos",
    description:
      "Crio interfaces de aplicativos modernas e intuitivas, garantindo uma experiência visual atraente e funcional.",
    icon: "smartphone",
  },
];

const ServicesSection = () => {
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const servicesRef = useRef(null);

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

  return (
    <main className="container overflow-hidden">
      <motion.main
        className="services-section"
        id="services"
        ref={servicesRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisibleServices ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <section className="services">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-header"
          >
            <h1 className="services-title">Habilidades e Serviços</h1>
            <p className="services-desc">
              Descubra como posso ajudar a transformar sua marca e presença
              digital com serviços sob medida para suas necessidades!
            </p>
          </motion.div>
          <div className="services-cards">
            {services.map((service) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                key={service.id}
                className="service-card"
                transition={{ duration: 0.8 }}
              >
                <div className="card-icon">
                  <span className="material-icons icon-card">
                    {service.icon}
                  </span>
                </div>
                <div className="card-infos">
                  <h1 className="title-card">{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.main>
    </main>
  );
};

export default ServicesSection;
