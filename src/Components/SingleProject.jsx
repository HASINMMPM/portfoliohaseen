import React from "react";

const SingleProject = ({ selectedProject, setsingleProject }) => {
  return (
    <section className=" bg-green-600">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 p-2 items-center border-2 border-white">
        <img className="" src={selectedProject.img} alt={selectedProject.title} />
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg md:text-2xl font-heading">{selectedProject.title}</h3>
          <h4 className="text-lg font-second">{selectedProject.category}</h4>
        </div>
        {selectedProject.liveLink === "" ? (
          <button className="bg-slate-400 max-h-16 rounded-lg cursor-not-allowed">
            <a className="cursor-not-allowed" href={selectedProject.liveLink} target="_blank">
              Take a Look
            </a>
          </button>
        ) : (
          <button className="bg-red-200 max-h-16 rounded-lg">
            <a href={selectedProject.liveLink} target="_blank">
              Take a Look
            </a>
          </button>
        )}
        <button className="bg-red-200 max-h-16 rounded-lg">
          <a href={selectedProject.githubLink} target="_blank">
            View Source
          </a>
        </button>
        <button
          onClick={() => setsingleProject(false)} 
          className="bg-red-200 max-h-16 rounded-lg"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default SingleProject;
