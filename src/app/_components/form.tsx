"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <main className="contact-section" id="contact" ref={formRef}>
      <section className="contact-hero">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 1 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="contact-info"
        >
          <h1>Vamos Conversar!</h1>
          <p>
            Gostou do meu trabalho?{" "}
            <span className="span-color">Vamos conversar!</span> Preencha o
            formulário ao lado e eu entrarei em contato o mais breve possível.
          </p>
          <div className="email-icon">
            <i className="fas fa-envelope"></i>
            <span>yuri.designer.07@gmail.com</span>
          </div>
          <div className="email-icon">
            <i className="fab fa-instagram"></i>
            <a href="#" target="_blank">
              @yurinsights
            </a>
          </div>
        </motion.div>

        <motion.div
          className="form-container"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <form className="contact-form">
            <div className="form-group">
              <motion.input
                type="text"
                className="form-row"
                id="name"
                name="name"
                required
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.label
                htmlFor="name"
                initial={{ opacity: 0, x: -100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Nome
              </motion.label>
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                className="form-row"
                id="email"
                name="email"
                required
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.label
                htmlFor="email"
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Email
              </motion.label>
            </div>

            <div className="form-group">
              <motion.textarea
                id="message"
                className="form-row message"
                name="message"
                rows="5"
                required
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              ></motion.textarea>
              <motion.label
                htmlFor="message"
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Mensagem
              </motion.label>
            </div>

            <motion.button
              type="submit"
              className="greenButton form-button"
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Enviar
            </motion.button>
          </form>
        </motion.div>
      </section>
    </main>
  );
};

export default Form;
