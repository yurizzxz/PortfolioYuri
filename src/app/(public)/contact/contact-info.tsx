"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "@/styles/contact.css";
import { Instagram, Mail } from "lucide-react";

export default function ContactInfo() {
  const instaLink = "https://www.instagram.com/yurinsights/";

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="contact-info"
    >
      <h1>Vamos Conversar!</h1>
      <p>
        Gostou do meu trabalho?{" "}
        <span className="span-color">Vamos conversar!</span> Preencha o
        formulário ao lado e eu entrarei em contato o mais breve possível.
      </p>
      <div className="email-icon">
        <Mail className="text-spancolor"  />
        <Link href="mailto:yuri.designer.07@gmail.com">
          yuri.designer.07@gmail.com
        </Link>
      </div>
      <div className="email-icon">
        <Instagram className="text-spancolor" />
        <Link href={instaLink} target="_blank" rel="noopener noreferrer">
          @yurinsights
        </Link>
      </div>
    </motion.div>
  );
}
