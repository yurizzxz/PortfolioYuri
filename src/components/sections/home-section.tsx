"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RedirectButton } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { SocialIcons } from "../ui/social-icons";

const Hero = () => {
  return (
    <main className="relative bg-[url('/background.png')] bg-cover bg-center overflow-hidden md:mb-0">
      <div
        className="absolute inset-0 bg-black bg-opacity-[0.98]"
        aria-hidden="true"
      ></div>
      <div className="relative ml-auto mr-auto px-5 md:px-0 max-w-6xl ">
        <motion.div
          className="flex flex-row justify-center items-center min-h-[85dvh] md:min-h-[95dvh] xl:-mt-14 lg=:pt-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:text-center">
            <div className="flex md:justify-center mb-6">
              <div className="w-20 h-20 hidden rounded-full md:flex items-center justify-center overflow-hidden">
                <Image
                  src="/foto.png"
                  alt="Yuri Alves"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2 max-w-5xl">
              <p className="text-zinc-300 text-lg">
                Me chamo{" "}
                <span className="text-purple-600 font-semibold">
                  Yuri Alves
                </span>{" "}
                e
              </p>

              <h1 className="text-[40px] md:text-5xl roboto lg:text-6xl font-bold leading-tight">
                <span className="text-purple-600">Transformo</span> ideias em{" "}
                <span className="text-purple-600">experiências</span> digitais{" "}
                <span className="text-purple-600">criativas</span> e funcionais.
              </h1>
            </div>

            <p className="text-zinc-400 my-6 md:text-[17px] max-w-2xl mx-auto leading-relaxed">
              Cada detalhe é pensado para capturar atenção, gerar engajamento e
              trazer resultados reais para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-center md:items-center">
              <RedirectButton
                href="#projects"
                aria-label="Ver meus projetos"
                size={"lg"}
                className="text-md"
              >
                Conheça meu trabalho
              </RedirectButton>

              <RedirectButton
                href="#contact"
                variant="outline"
                size={"lg"}
                aria-label="Ir para a seção contato"
                className="text-md"
              >
                Vamos Conversar
                <ArrowDown aria-hidden="true" />
              </RedirectButton>
            </div>
            <div className="flex justify-center mt-6 p-4 bg-cardgradient rounded-full">
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-10 z-20 right-0 w-full h-36 bg-background bg-opacity-[0.98] rounded-t-full blur-xl"></div>
    </main>
  );
};

export default Hero;
