"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const icons = [
  { iconClass: "devicon-html5-plain", name: "HTML5", delay: 0.2 },
  { iconClass: "devicon-css3-plain", name: "CSS3", delay: 0.4 },
  { iconClass: "devicon-javascript-plain", name: "JavaScript", delay: 0.6 },
  { iconClass: "devicon-react-original", name: "React", delay: 0.8 },
  { iconClass: "devicon-nextjs-plain", name: "Next.js", delay: 1 },
  { iconClass: "devicon-photoshop-plain", name: "Photoshop", delay: 1 },
  { iconClass: "devicon-tailwindcss-plain", name: "Tailwind CSS", delay: 1.2 },
  { iconClass: "devicon-git-plain", name: "Git", delay: 1.4 },
  { iconClass: "devicon-bootstrap-plain", name: "Bootstrap", delay: 1.6 },
  { iconClass: "devicon-angularjs-plain", name: "Angular", delay: 1.8 },
];

const StacksIcons = () => {
  return (
    <motion.div
      className="flex gap-8 mt-[20px] justify-center relative max-w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {icons.map((icon, index) => (
            <CarouselItem key={index} className="basis-1/2 xs:basis-1/3 md:basis-1/5 lg:basis-1/7">
              <motion.div
                className="flex flex-col mt-3 items-center justify-center text-center shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: icon.delay }}
              >
                <i
                  className={`${icon.iconClass} hover:scale-110 text-primary bg-cardcolor p-6 border border-[var(--border)] cursor-default transition-all hover:border-[var(--spanhover)] rounded-full hover:text-spanhover duration-300 text-5xl mb-2`}
                ></i>
                <span className="text-lg font-semibold">{icon.name}</span>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default StacksIcons;
