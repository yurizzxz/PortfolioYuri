"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dbd from "../_assets/img/daybyday.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "DayByDay",
    description: "DayByDay",
    image: dbd,
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Front-End Backend",
  },
  {
    id: 2,
    title: "FitFusion",
    description: "FitFusion",
    image: dbd,
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Front-End Backend",
  },
  {
    id: 3,
    title: "CorridaAttiva",
    description: "Identidade visual",
    image: dbd,
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Design Gráfico",
  },
  {
    id: 4,
    title: "EngaWeb",
    description: "Identidade visual",
    image: dbd,
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Design Gráfico",
  },
];

const Projects = () => {
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
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

    if (projectsRef.current) {
      observerProjects.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observerProjects.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <>
      <main className="projects-section" id="projects" ref={projectsRef}>
        <section className="projects">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isVisibleProjects ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 1,
            }}
            className="projects-header"
          >
            <h1 className="projects-title">Meus Projetos</h1>
            <div className="picks">
              <button className="pickFilter active">Todos</button>
              <button className="pickFilter">Front-End</button>
              <button className="pickFilter">Back-End</button>
              <button className="pickFilter">Design Gráfico</button>
            </div>
          </motion.div>
          <div className="projects-cards">
            {projects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isVisibleProjects ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.3,
                }}
                key={project.id}
                className="projects-card"
              >
                <div className="card-icon">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="image-card"
                    width={510}
                    height={50}
                    priority
                  />
                </div>
                <div className="card-infos">
                  <h1 className="title-card">{project.title}</h1>
                  <p>{project.description}</p>
                  <motion.a
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.1,
                    }}
                    href={project.link}
                    className="greenButton projectCta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acesse o projeto
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            transition={{
              duration: 1,
            }}
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
      </main>
    </>
  );
};

export default Projects;
