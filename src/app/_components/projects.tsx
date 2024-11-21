"use client";

import React from "react";
import Image from "next/image";
import dbd from "../_assets/img/daybyday.png";

const projects = [
  {
    id: 1,
    title: "DayByDay",
    description:
      "DayByDay",
    image: dbd, 
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Front-End Backend",
  },
  {
    id: 2,
    title: "FitFusion",
    description:
      "FitFusion",
    image: dbd, 
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Front-End Backend",
  },
  {
    id: 3,
    title: "CorridaAttiva",
    description:
      "Identidade visual",
    image: dbd, 
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Design Gráfico",
  },
  {
    id: 4,
    title: "EngaWeb",
    description:
      "Identidade visual",
    image: dbd, 
    link: "https://github.com/yurizzxz/tcc-daybyday",
    filter: "Design Gráfico",
  },
];

const Projects = () => {
  return (
    <>
      <main className="projects-section">
        <section className="projects">
          <div className="projects-header">
            <h1 className="projects-title">Meus Projetos</h1>
            <div className="picks">
              <button className="pickFilter active">Todos</button>
              <button className="pickFilter">Front-End</button>
              <button className="pickFilter">Back-End</button>
              <button className="pickFilter">Design Gráfico</button>
            </div>
          </div>
          <div className="projects-cards">
            {projects.map((project) => (
              <div key={project.id} className="projects-card">
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
                  <a
                    href={project.link}
                    className="greenButton projectCta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acesse o projeto
                  </a>
                  </div>
              </div>
            ))}
          </div>
          <div className="projectsCta">
            <a href="https://github.com/yurizzxz?tab=repositories" target="_blank" className="greenButton">
              Acesse meu GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
