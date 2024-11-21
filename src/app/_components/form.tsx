"use client";

import React from "react";

const Form = () => {
  return (
    <main className="contact-section">
      <section className="contact-hero">
        <div className="contact-info">
          <h1>Vamos Conversar!</h1>
          <p>
            Gostou do meu trabalho? <span className="span-color">Vamos conversar!</span> Preencha o formulário ao lado e eu entrarei em contato o mais breve possível.
          </p>
          <div className="email-icon">
            <i className="fas fa-envelope"></i>
            <span>yuri.designer.07@gmail.com</span>
          </div>
          <div className="email-icon">
            <i className="fab fa-instagram"></i>
            <a href="#" target="_blank">@yurinsights</a>
          </div>
        </div>

        <div className="form-container">
          <form className="contact-form">
            <label htmlFor="name">Nome</label>
            <input type="text" className="form-row" id="name" name="name" placeholder="Seu nome" required />

            <label htmlFor="email">Email</label>
            <input type="email" className="form-row" id="email" name="email" placeholder="Seu email" required />

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" className="form-row message" name="message" placeholder="Sua mensagem" rows="5" required></textarea>

            <button type="submit" className="greenButton form-button">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;
