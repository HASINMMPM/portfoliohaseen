import React from "react";

const SingleProject = ({ selectedProject, setsingleProject }) => {
  return (
    <section className="  min-h-screen ">
      <div className="py-4">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div className="grid grid-cols-1 md:grid-cols-3  p-8 items-center ">
          <img
            className=" h-full"
            src={selectedProject.image}
            alt={selectedProject.title}
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-2xl font-heading font-semibold">
              {selectedProject.title}
            </h3>
            <h4 className="text-lg font-second">{selectedProject.category}</h4>
          </div>
          <div className="flex flex-col gap-2">
            {selectedProject.liveLink === "" ? (
              <button className="bg-slate-400   cursor-not-allowed">
                <a
                  className="cursor-not-allowed"
                  href={selectedProject.liveLink}
                  target="_blank"
                >
                  Take a Look
                </a>
              </button>
            ) : (
              <a
                className="text-center btn"
                href={selectedProject.liveLink}
                target="_blank"
              >
                Take a Look
              </a>
            )}

            <a
              className="text-center btn"
              href={selectedProject.githubLink}
              target="_blank"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
      <hr className="py-1 bg-slate-50" />
      <div className="py-4 px-8 my-3">
  {selectedProject.description.split("\n").map((paragraph, index) => (
    <p key={index} className="mt-1">
      {paragraph}
    </p>
  ))}
</div>

      <div className="flex justify-center items-center w-full">
        <button
          onClick={() => setsingleProject(false)}
          className="bg-transparent w-12 h-12 rounded-full my-6 text-center mx-auto text-2xl border-black border-[3px] hover:bg-black duration-300 hover:p-1 hover:text-white "
        >
          X
        </button>
      </div>
    </section>
  );
};

export default SingleProject;
