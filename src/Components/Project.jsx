import React from 'react';
import projects from "../assets/project.json"

const Project = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">
          <span className="gradient-text">My Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`card rounded-xl border shadow-md overflow-hidden animate-fade-in delay-${(index + 1) * 100} group`}
            >
              <div className="h-48 overflow-hidden">
               {project.company ===true ? <span className='relative ml-5 rounded-md bg-blue-500 text-white font-mono text-sm py-1 px-3 top-8 z-10'>Company Project</span>:<></>}
                <img
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.npm.map((tech, idx) => (
                    <span
                      key={idx}
                      className="tech-badge px-3 py-1 rounded-full text-sm bg-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                  >
                    <i className="fab fa-github mr-1" /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
