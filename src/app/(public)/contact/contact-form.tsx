'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement | null>(null);

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

    const formElement = formRef.current;

    if (formElement) {
      observer.observe(formElement);
    }

    return () => {
      if (formElement) {
        observer.unobserve(formElement);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://backendportfolioyuri.onrender.com/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      alert("Erro ao enviar o e-mail.");
      console.error(error);
    }
  };

  return (
    <motion.div
      className="form-container"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <motion.input
            type="text"
            className="form-row"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
          className="bg-spancolor hover:bg-spanhover text-white font-bold py-4 px-7 transition-all rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Enviar
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
