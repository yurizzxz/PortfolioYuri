import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const linguagens = project.linguagens || [];

  return (
    <motion.button
      key={project.id}
      transition={{ duration: 0.1 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label={`Abrir detalhes do projeto ${project.titulo}`}
      whileHover={{ scale: 1.01 }}
      className="bg-cardgradient overflow-hidden sm:overflow-visible border border-[var(--border)] hover:border-[var(--borderHover)] rounded-lg flex flex-col gap-5 transition-all duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="card-icon relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.imagemUrl || ""}
          alt={project.titulo}
          className="object-cover rounded-lg"
          fill
          loading="lazy"
        />
      </div>
      <div className="px-5 flex flex-col gap-1 flex-grow text-left">
        <div className="flex flex-col flex-1 h-auto">
          <h2 className="text-2xl font-bold mb-1">{project.titulo}</h2>
          <p className="text-sm mb-3">
            {project.descricao.length > 90
              ? `${project.descricao.slice(0, 89)}...`
              : project.descricao}
          </p>
          <div className="flex flex-row justify-between mt-auto mb-5 items-center">
            <div className="flex flex-row flex-wrap gap-2">
              {linguagens.map((linguagem, index) => (
                <p
                  key={index}
                  className="linguagens border w-fit px-2 rounded-md py-1.5 flex flex-row text-xs"
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
