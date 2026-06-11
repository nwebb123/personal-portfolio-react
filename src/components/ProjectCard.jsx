import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "../styles/projects.css";

function ProjectCard({ href, github, img, imgWidth, imgClass, title, description }) {
  return (
    <div className="project-card-wrapper">
      <a href={href} target="_blank" rel="noreferrer" className="project-card-link">
        <div className="project-card">
          <img
            src={img}
            width={imgWidth}
            alt={title}
            className={imgClass}
          />
          <h3 className="project-title">{title}</h3>
          <p className="project-text">{description}</p>
        </div>
      </a>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} GitHub Repository`}
          className="github-link"
          title="View on GitHub"
        >
          <AiFillGithub size={24} />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
