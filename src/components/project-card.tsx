import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: string;
  titulo: string;
  descricao: string;
  imagemUrl?: string;
  stack: string;
  linguagem1?: string;
  linguagem2?: string;
  linguagem3?: string;
  linguagem4?: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.button
      key={project.id}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      className="projects-card"
      onClick={onClick}
    >
      <div className="card-icon">
        <Image
          src={project.imagemUrl ? project.imagemUrl : ""}
          alt={project.titulo}
          className="image-card"
          width={510}
          height={0}
          loading="lazy"
        />
      </div>
      <div className="card-infos text-left">
        <div className="flex flex-col flex-1 h-auto">
          <h1 className="title-card">{project.titulo}</h1>
          <p className="text-sm mb-3">
            {project.descricao.length > 75
              ? `${project.descricao.slice(0, 50)}...`
              : project.descricao}
          </p>
          <div className="flex flex-row justify-between mt-auto mb-5 items-center">
            <div className="flex flex-row flex-wrap gap-2">
              {[
                project.linguagem1,
                project.linguagem2,
                project.linguagem3,
                project.linguagem4,
              ]
                .filter(Boolean)
                .map((linguagem, index) => (
                  <p
                    key={index}
                    className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-sm"
                  >
                    {linguagem}
                  </p>
                ))}
            </div>
            <Link href={project.link} rel="noopener noreferrer" target="_blank">
              <i className="devicon-github-original text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default ProjectCard;
