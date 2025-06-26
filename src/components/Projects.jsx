import React from 'react';
import { projects } from '../App';

const Projects = () => {
  
  const redirectToSite = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="container">
      <h2>Мои проекты</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div
            className="card"
            key={index}
            onClick={() => redirectToSite(project.link)} 
            style={{ cursor: 'pointer' }}
          >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;