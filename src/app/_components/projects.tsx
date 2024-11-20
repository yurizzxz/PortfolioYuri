"use client";

import React from "react";

const projects = [
  {
    id: 1,
    title: "Identidade Visual",
    description:
      "Desenvolvo identidades visuais únicas e marcantes que comunicam os valores e a essência da sua marca.",
    image: "fas fa-palette",
    link: "https://",
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
              <button className="pickFilter">Design Gráfico</button>
            </div>
          </div>
          <div className="projects-cards">
            {projects.map((project) => (
                <div key={project.id} className="projects-card">
                  <div className="card-icon">
                    <i className={`${project.image} image-card`}></i>
                  </div>
                  <div className="card-infos">
                    <h1 className="title-card">{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <div className="projectsCta">
                    <a
                      href="https://github.com/yurizzxz"
                      className="greenButton" target="_blank"
                    >
                      Acesse o projeto
                    </a>
                  </div>
                </div>
          
            ))}
          </div>
          <div className="projectsCta">
            <a href="https://github.com/yurizzxz" className="greenButton">
              Acesse meu GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
