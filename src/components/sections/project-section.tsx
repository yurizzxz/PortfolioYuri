"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CategoryFilter from "@/components/ui/category-filter";
import ProjectCard from "@/components/ui/project-card";
import { useFetchProjects } from "@/hooks/useFetchProjects";
import { X } from "lucide-react";
import { RedirectButton } from "@/components/ui/button";

type ProjectProps = {
  maxProjects?: number;
  showLoadMore?: boolean;
};

const Projects: React.FC<ProjectProps> = ({
  maxProjects = 6,
  showLoadMore = true,
}) => {
  const [visibleCount, setVisibleCount] = React.useState(maxProjects);

  React.useEffect(() => {
    setVisibleCount(maxProjects);
  }, [maxProjects]);
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
      <div
        className="flex bg-[var(--background)] flex-row pb-24 pt-20"
        id="projects"
      >
        <motion.section
          className="projects"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold">Meus Projetos</h1>
            <div className="mt-6 flex gap-3 flex-wrap">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {projects.length > 0 ? (
              projects
                .slice(0, visibleCount)
                .map((project) => (
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

          <div className="flex mt-6 justify-center">
            {showLoadMore && visibleCount < projects.length && (
              <RedirectButton aria-label="Ver todos os projetos" href="/projects">Ver Todos os Projetos</RedirectButton>
            )}
          </div>

          {openModal && (
            <div
              onClick={handleCloseModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="fixed inset-0 flex px-3 items-center justify-center bg-black bg-opacity-90 z-[99]"
            >
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-cardgradient p-6 rounded-lg shadow-lg w-full max-w-2xl"
                style={{ border: "1px solid var(--border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center pb-4">
                  <h2 className="text-[1.7rem] font-semibold">
                    Visualizar Projeto
                  </h2>
                  <button aria-label="Fechar modal" className="text-xl" onClick={handleCloseModal}>
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
                      <div className="mb-7 relative aspect-[16/9]">
                        <Image
                          src={project.imagemUrl || ""}
                          alt={project.titulo}
                          className="object-cover "
                          fill
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
                            className="hover:text-spanhover transition-all"
                          >
                            <i className="devicon-github-original text-3xl"></i>
                          </Link>
                        </div>
                        <p className="text-md mt-2 max-h-24 overflow-y-scroll">
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
                              className="linguagens border w-fit px-2 rounded-md py-1.5 flex flex-row text-sm"
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
