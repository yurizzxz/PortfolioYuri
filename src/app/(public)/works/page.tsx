"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/styles/works.css";
import { Services } from "@/data/services";


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
    <main className="container mx-auto max-w-6xl px-4 xl:px-0 overflow-hidden">
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
            {Services.map((Service) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                key={Service.id}
                className="service-card"
              >
                <div className="card-icon">
                  <span className="material-icons icon-card">{Service.icon}</span>
                  <h1 className="title-card">{Service.title}</h1>
                  <p>{Service.description}</p>
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
