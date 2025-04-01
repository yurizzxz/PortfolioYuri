"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { root: null, threshold: 0.1 }
    );

    const formElement = formRef.current;
    if (formElement) observer.observe(formElement);

    return () => {
      if (formElement) observer.unobserve(formElement);
    };
  }, []);

  return (
    <main className="container max-w-7xl">
      <section className="contact-section" id="contact" ref={formRef}>
        <div className="contact-hero">
          <ContactInfo />
          <ContactForm isVisible={isVisible} />
        </div>
      </section>
    </main>
  );
}
