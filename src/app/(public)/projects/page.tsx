"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { db } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./projects.css";
import Link from "next/link";

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

const SUPABASE_STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_STORAGE;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [openModal, setOpenModal] = useState(false);

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const fetchProjects = async (category = "Todos") => {
    try {
      let q;
      if (category !== "Todos") {
        q = query(collection(db, "colecao"), where("stack", "==", category));
      } else {
        q = collection(db, "colecao");
      }

      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    fetchProjects();

    const observerProjects = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleProjects(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const element = document.querySelector("#projects");
    if (element) {
      observerProjects.observe(element);
    } else {
      console.error('Elemento com id "projects" não encontrado.');
    }

    return () => observerProjects.disconnect();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    fetchProjects(category);
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
          animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            transition={{ duration: 0.5 }}
            animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
            className="projects-header"
          >
            <h1 className="projects-title">Meus Projetos</h1>
            <div className="picks">
              <button
                className={`pickFilter ${
                  selectedCategory === "Todos" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("Todos")}
              >
                Todos
              </button>
              <button
                className={`pickFilter ${
                  selectedCategory === "frontend" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("frontend")}
              >
                Front-End
              </button>
              <button
                className={`pickFilter ${
                  selectedCategory === "fullstack" ? "active" : ""
                }`}
                onClick={() => handleCategoryChange("fullstack")}
              >
                FullStack
              </button>
            </div>
          </motion.div>

          <div className="projects-cards">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  transition={{ duration: 0.5 }}
                  animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
                  className="projects-card"
                  onClick={() => handleOpenModal(project.id)}
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
                        <div className="flex flex-row gap-2  items-center  flex-wrap pr-6">
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-sm">
                            {project.linguagem3}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-sm">
                            {project.linguagem1}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-sm">
                            {project.linguagem2}
                          </p>
                        </div>
                        <Link
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="devicon-github-original text-2xl"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.button>
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
                className="bg-cardcolor p-6 rounded-lg shadow-lg  w-full max-w-xl"
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
                        <p className="text-md mt-2">{project.descricao}</p>
                      </div>
                      <hr className="opacity-5" />
                      <div className="flex flex-col gap-3 mt-4">
                        <p className="text-xl font-semibold">
                          Linguagens Utilizadas
                        </p>
                        <div className="flex flex-row gap-2">
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem3}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem1}
                          </p>
                          <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                            {project.linguagem2}
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
