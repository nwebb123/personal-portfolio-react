import React from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./assets/projects-assets/projects";
import "./styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            href={p.href}
            img={p.img}
            imgWidth={p.imgWidth}
            imgClass={p.imgClass}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
