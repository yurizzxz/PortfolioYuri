"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RedirectButton } from "@/components/ui/button";
import { CheckCircle, ArrowDown } from "lucide-react";
import { SocialIcons } from "../ui/social-icons";

const Hero = () => {
  return (
    <main className="container mx-auto px-5 md:px-0 max-w-6xl overflow-hidden mb-12 md:mb-0">
      <motion.div
        className="flex flex-row min-h-screen max-[430px]:pt-24 max-[420px]:pt-24 max-[340px]:pt-[8rem] max-[340px]:pb-[2rem] -mt-4 lg:pt-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section
          id="home"
          className="flex flex-row justify-between items-center w-full text-[var(--textcolor)] flex-grow px-0 2xl:px-3.5 max-[992px]:flex-col max-[992px]:w-full max-[992px]:text-left max-[992px]:px-[2rem] max-[768px]:px-0 max-[568px]:px-0 max-[568px]:justify-normal max-[568px]:gap-8"
        >
          <motion.div
            className="flex flex-col justify-center p-[2vw] max-w-[41rem] max-h-[35rem] rounded-3xl bg-common max-[992px]:max-w-full max-[992px]:p-0 max-[992px]:bg-inherit max-[900px]:px-[3rem] max-[900px]:h-[570px] max-[768px]:px-[2rem] max-[768px]:max-w-[650px] max-[768px]:h-[550px] max-[600px]:max-w-full max-[568px]:px-0 max-[568px]:max-w-[40rem] max-[568px]:max-h-[32rem] max-[425px]:max-w-full max-[359px]:max-h-[33rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <header >
              <motion.h1
                className="max-[395px]:text-lg text-xl mb-0 md:mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-purple-500 bg-clip-text text-transparent">
                  Olá!
                </span>{" "}
                Meu nome é
              </motion.h1>
              <motion.h2
                className="max-[395px]:text-6xl max-[340px]:text-[3.5rem] text-7xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Yuri{" "}
                <span className="bg-purplegradient bg-clip-text text-transparent">
                  Alves
                </span>
              </motion.h2>
            </header>

            <motion.p
              className="text-base my-4 leading-relaxed mb-6 max-[600px]:text-sm max-[568px]:text-base max-[425px]:text-[0.952rem] max-[360px]:text-[0.952rem] max-[340px]:text-[0.92rem]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Sou um{" "}
              <span className="bg-purple-500 font-semibold bg-clip-text text-transparent">
                Desenvolvedor Front-End
              </span>{" "}
              e{" "}
              <span className="bg-purple-500 font-semibold bg-clip-text text-transparent">
                Designer Gráfico
              </span>{" "}
              apaixonado pela tecnologia. Tenho 2 anos de experiência em
              Desenvolvimento Web e sempre estou em busca de aprender cada vez
            </motion.p>

            <motion.div
              className="flex flex-col gap-5 mb-3 text-[20px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-row items-center gap-[15px]">
                <CheckCircle
                  aria-hidden="true"
                  className="text-[var(--spancolor)]"
                />
                <p className="text-base max-[360px]:text-[0.9rem] max-[340px]:text-[0.92rem]">
                  Técnico em Desenvolvimento de Sistemas na ETEC Itu.
                </p>
              </div>
              <div className="flex flex-row items-center gap-[15px]">
                <CheckCircle
                  aria-hidden="true"
                  className="text-[var(--spancolor)]"
                />
                <p className="text-base max-[360px]:text-[0.9rem] max-[340px]:text-[0.92rem]">
                  Cursando Análise e Desenvolvimento de Sistemas na Fatec Itu.
                </p>
              </div>
            </motion.div>

            <div className="max-[330px]:flex-col  flex gap-[20px] mt-[20px] max-[568px]:my-[1rem] max-[568px]:mb-[0.7rem] max-[425px]:gap-3 max-[425px]:my-[1rem] max-[425px]:mb-[0.7rem] max-[360px]:gap-3 max-[360px]:my-[1rem] max-[360px]:mb-[0.7rem]">
              <RedirectButton
                href="#contact"
                className="gap-3 text-md max-[330px]:mb-3"
                aria-label="Ir para a seção contato"
              >
                Vamos Conversar
                <ArrowDown aria-hidden="true" />
              </RedirectButton>
              <div className="space-x-4 flex justify-center items-center">
                <SocialIcons />
              </div>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <Image
              className="max-w-[445px] md:min-w-[400px] w-full rounded-full shadow-md object-cover mt-[1.5rem] max-[600px]:max-w-[100%] max-[600px]:h-auto"
              src="/foto.png"
              width={400}
              height={400}
              alt="Foto de Perfil"
              loading="eager"
            />
          </motion.figure>
        </section>
      </motion.div>
    </main>
  );
};

export default Hero;
