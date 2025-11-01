import React from 'react';
// Sample data - in a real app, this would likely come from an API or a separate data file.
const projectData = [
  { id: 1, title: 'E-commerce Platform', description: 'A scalable e-commerce site built with React, Redux, and Firebase.', tags: ['React', 'Redux', 'Firebase'], link: '#', repo: '#' },
  { id: 2, title: 'Real-Time Chat App', description: 'A secure, real-time messaging application using WebSocket technology.', tags: ['Node.js', 'Express', 'WebSocket', 'MongoDB'], link: '#', repo: '#' },
  // ... more projects
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-tags">
      {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
    <div className="project-links">
      <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects 🚀</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;