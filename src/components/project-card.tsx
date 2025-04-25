import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const linguagens = project.linguagens || [];

  return (
    <motion.button
      key={project.id}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--cardColor)] border-[0.5px] border-[var(--accent)] rounded-xl flex flex-col gap-5 flex-shrink-0 transition-all duration-300 ease-in-out;"
      onClick={onClick}
    >
      <div className="card-icon relative">
        
        <Image
          src={project.imagemUrl ? project.imagemUrl : ""}
          alt={project.titulo}
          className=" max-w-full rounded-xl"
          width={510}
          height={510}
          loading="lazy"
        />
      </div>
      <div className="px-4 flex flex-col gap-1 flex-grow text-left">
        <div className="flex flex-col flex-1 h-auto">
          <h1 className="text-[1.20rem] font-bold mb-1">{project.titulo}</h1>
          <p className="text-sm mb-3 text-zinc-300">
            {project.descricao.length > 40
              ? `${project.descricao.slice(0, 30)}...`
              : project.descricao}
          </p>
          <div className="flex flex-row justify-between mt-auto mb-5 items-center">
            <div className="flex flex-row flex-wrap gap-2">
              {linguagens.map((linguagem, index) => (
                <p
                  key={index}
                  className="linguagens bg-[var(--accent)] w-fit px-2 rounded-lg py-1.5 flex flex-row text-xs"
                >
                  {linguagem}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default ProjectCard;
