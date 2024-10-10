import React from "react";
import { projectData } from "../../public/project";

const Project = ({ setsingleProject, setSelectedProject }) => {
  return (
    <section id="projects" className="bg-slate-400  px-8">
      <h3 className="py-6 text-xl md:text-3xl text-center">Projects</h3>
      {projectData.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-1 md:grid-cols-5 gap-5 p-2 items-center border-2 border-white"
        >
          <img className="" src={item.img} alt={item.title} />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-2xl font-heading">{item.title}</h3>
            <h4 className="text-lg font-second">{item.category}</h4>
          </div>
          {item.liveLink === "" ? (
            <button className="bg-slate-400 max-h-16 rounded-lg cursor-not-allowed">
              <a className="cursor-not-allowed" href={item.liveLink} target="_blank">
                Take a Look
              </a>
            </button>
          ) : (
            <button className="bg-red-200 max-h-16 rounded-lg">
              <a href={item.liveLink} target="_blank">
                Take a Look
              </a>
            </button>
          )}
          <button className="bg-red-200 max-h-16 rounded-lg">
            <a href={item.githubLink} target="_blank">
              View Source
            </a>
          </button>
          <button
            onClick={() => {
              setsingleProject(true);
              setSelectedProject(item); // Pass the entire project object
            }}
            className="bg-red-200 max-h-16 rounded-lg"
          >
            Explore More
          </button>
        </div>
      ))}
    </section>
  );
};

export default Project;
