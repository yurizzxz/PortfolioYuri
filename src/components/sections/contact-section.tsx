"use client";

import React, { useState, useEffect, useRef } from "react";
import ContactInfo from "../common/contact-info";
import ContactForm from "../common/contact-form";

export default function Contact() {
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
    <main className="container max-w-6xl mx-auto">
      <section className="contact-section" id="contact" ref={formRef}>
        <div className="flex flex-col md:grid grid-cols-2">
          <ContactInfo />
          <ContactForm isVisible={isVisible} />
        </div>
      </section>
    </main>
  );
}
