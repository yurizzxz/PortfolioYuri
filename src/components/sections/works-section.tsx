"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/styles/works.css";
import { Services } from "@/constants/services";

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
    <main className="container mx-auto max-w-6xl overflow-hidden sm:overflow-visible">
      <motion.main
        className="flex bg-[var(--background)] px-4 md:px-0 flex-row pt-28 pb-24"
        id="services"
        ref={servicesRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisibleServices ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <section className="mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-3 text-4xl font-bold">Habilidades e Serviços</h1>
            <p className="services-desc">
              Descubra como posso ajudar a transformar sua marca e presença
              digital com serviços sob medida para suas necessidades!
            </p>
          </motion.div>
          <div className="grid gap-4  sm:grid-cols-2 lg:grid-cols-3">
            {Services.map((Service) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                key={Service.id}
                whileHover={{ scale: 1.01 }}
                className="p-5 w-full bg-cardgradient h-[15rem] rounded-lg flex flex-col justify-center gap-12 border hover:border-[var(--borderHover)] cursor-default transition-all duration-300 hover:scale-105"
              >
                <div className="card-icon flex flex-col">
                  <span className="material-icons icon-card">
                    {Service.icon}
                  </span>
                  <h1 className="text-2xl font-bold mb-2">{Service.title}</h1>
                  <p className="text-md">{Service.description}</p>
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
