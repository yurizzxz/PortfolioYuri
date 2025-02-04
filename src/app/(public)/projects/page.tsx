"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { db } from "@/app/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./projects.css";
import RedirectButton from "@/app/_components/Button";

interface Project {
  id: string;
  titulo: string;
  descricao: string;
  imagemUrl?: string;
  link: string;
}

const SUPABASE_STORAGE_URL = process.env.NEXT_PUBLIC_SUPABASE_STORAGE;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const fetchProjects = async (category = "Todos") => {
    try {
      let q;
      if (category !== "Todos") {
        q = query(
          collection(db, "colecao"),
          where("categoria", "==", category)
        );
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

  return (
    <main className="container">
      <div className="projects-section" id="projects">
        <section className="projects">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isVisibleProjects ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1 }}
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

            </div>
          </motion.div>

          <div className="projects-cards">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className="projects-card"
                >
                  <div className="card-icon">
                    <Image
                      src={
                        project.imagemUrl
                          ? project.imagemUrl
                          : "/default-image.jpg"
                      }
                      alt={project.titulo}
                      className="image-card"
                      width={510}
                      height={0}
                      loading="lazy"
                      onLoadingComplete={() => console.log("imagem carregada")}
                    />
                  </div>
                  <div className="card-infos">
                    <div>
                      <h1 className="title-card">{project.titulo}</h1>
                      <p>{project.descricao}</p>
                    </div>
                    <motion.div
                      whileHover={{ y: -1, scale: 1.01 }}
                      transition={{ duration: 0.1 }}
                    >
                      <RedirectButton
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        children="Acessar"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p style={{ marginBottom: 30 }}>
                Carregando projetos... Aguarde.
              </p>
            )}
          </div>

          <motion.div
            whileHover={{ y: -1, scale: 1.06 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: -100 }}
            animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
            className="projectsCta"
          >
            <a
              href="https://github.com/yurizzxz?tab=repositories"
              target="_blank"
              className="greenButton"
            >
              Acesse meu GitHub
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
