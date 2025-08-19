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
      className="flex gap-4 flex-col justify-center mb-8"
    >
      <h1 className="text-4xl leading-none font-bold">Vamos Conversar!</h1>
      <p className="max-w-lg text-sm md:text-md">
        Gostou do meu trabalho?{" "}
        <span className="span-color">Vamos conversar!</span> Preencha o
        formulário ao lado e eu entrarei em contato o mais breve possível.
      </p>
      <div className="flex flex-col gap-5 mt-3">
        <div className="flex gap-3 flex-row">
          <Mail className="text-spancolor" />
          <Link href="mailto:yuri.designer.07@gmail.com">
            yuri.designer.07@gmail.com
          </Link>
        </div>
        <div className="flex gap-3 flex-row ">
          <Instagram className="text-spancolor" />
          <Link href={instaLink} target="_blank" rel="noopener noreferrer">
            @yurinsights
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
