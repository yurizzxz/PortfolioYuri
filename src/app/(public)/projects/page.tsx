"use client";
import React, { useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./projects.css";
import Link from "next/link";
import CategoryFilter from "../../_components/category-filter";
import ProjectCard from "../../_components/project-card";
import { useFetchProjects } from "@/hooks/useFetchProjects";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const { projects, loading } = useFetchProjects(selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleOpenModal = (id: string): void => {
    setSelectedProjectId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProjectId(null);
  };

  return (
    <main className="container mx-auto max-w-7xl">
      <div className="projects-section" id="projects">
      <motion.section
          className="projects"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
            className="projects-header"
          >
            <h1 className="projects-title">Meus Projetos</h1>
            <div className="picks" style={{ marginTop: '0rem'}}>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </motion.div>

          <div className="projects-cards">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleOpenModal(project.id)}
                />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </div>

          {openModal && (
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
            >
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-cardcolor p-6 rounded-lg mt-12 shadow-lg h-[42rem]  w-full max-w-xl"
                style={{ border: "1px solid var(--border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center pb-4">
                  <h2 className="text-[1.7rem] font-semibold">
                    Visualizar Projeto
                  </h2>
                  <button className="text-xl" onClick={handleCloseModal}>
                    ✕
                  </button>
                </div>
                {projects
                  .filter((project) => project.id === selectedProjectId)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="flex flex-col justify-center pb-4"
                    >
                      <div className="mb-7 max-w-xl">
                        <Image
                          src={project.imagemUrl ? project.imagemUrl : ""}
                          alt={project.titulo}
                          className="image-card w-full h-auto"
                          width={510}
                          height={0}
                          loading="lazy"
                        />
                      </div>
                      <div className="mb-5">
                        <div className="flex flex-row justify-between items-center">
                          <h3 className="text-2xl font-bold mb-2">
                            {project.titulo}
                          </h3>
                          <Link
                            href={project.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <i className="devicon-github-original text-2xl"></i>
                          </Link>
                        </div>
                        <p className="text-sm mt-2 max-h-20 overflow-y-scroll">{project.descricao}</p>

                      </div>
                      <hr className="opacity-5" />
                      <div className="flex flex-col gap-3 mt-4">
                        <p className="text-xl font-semibold">
                          Linguagens Utilizadas
                        </p>
                        <div className="flex flex-row gap-2">
                          
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem1}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem2}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem3}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem4}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </div>
          )}

          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            className="projectsCta"
          >
            <Link
              href="https://github.com/yurizzxz?tab=repositories"
              target="_blank"
              className="greenButton"
            >
              Acesse meu GitHub
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
};

export default Projects;
