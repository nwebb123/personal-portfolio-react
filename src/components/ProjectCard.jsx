import React from "react";
import "../styles/projects.css";

function ProjectCard({ href, img, imgWidth, imgClass, title, description }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
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
  );
}

export default ProjectCard;
