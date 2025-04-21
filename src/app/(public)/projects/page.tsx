"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/projects.css";
import Link from "next/link";
import CategoryFilter from "@/components/category-filter";
import ProjectCard from "@/components/project-card";
import { useFetchProjects } from "@/hooks/useFetchProjects";
import { X } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

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
    <main className="container mx-auto max-w-6xl px-4 xl:px-0">
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
            <div className="picks" style={{ marginTop: "0rem" }}>
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
              className="fixed inset-0 flex px-3 items-center justify-center bg-black bg-opacity-90 z-[99]"
            >
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-cardcolor p-6 rounded-lg  shadow-lg   w-full max-w-xl"
                style={{ border: "1px solid var(--border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center pb-4">
                  <h2 className="text-[1.7rem] font-semibold">
                    Visualizar Projeto
                  </h2>
                  <button className="text-xl" onClick={handleCloseModal}>
                    <X />
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
                        <div className="flex flex-row justify-between items-center mb-3">
                          <h3 className="text-2xl font-bold">
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
                        <p className="text-sm mt-2 max-h-24 overflow-y-scroll">
                          {project.descricao}
                        </p>
                      </div>
                      <hr className="opacity-5" />
                      <div className="flex flex-col gap-3 mt-4">
                        <p className="text-xl font-semibold">
                          Linguagens Utilizadas
                        </p>
                        <div className="flex flex-row flex-wrap gap-2">
                          {project.linguagens.map((linguagem, index) => (
                            <p
                              key={index}
                              className="linguagens bg-[var(--accent)] w-fit px-2 rounded-lg py-1.5 flex flex-row text-sm"
                            >
                              {linguagem}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </div>
          )}
        </motion.section>
      </div>
    </main>
  );
};

export default Projects;
