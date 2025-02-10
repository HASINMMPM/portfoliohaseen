import React from "react";

const SingleProject = ({ selectedProject, setsingleProject }) => {
  console.log(selectedProject)
  return (
    <section className="  min-h-screen text-white ">
      <div className="py-4">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 items-center ">
          <img
            className=" h-full"
            src={selectedProject.image}
            alt={selectedProject.title}
          />
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-2xl font-heading font-semibold text-secondary">
              {selectedProject.title}
            </h3>
            <h4 className="text-lg font-second text-secondary">{selectedProject.category}</h4>
          </div>
          <div className="flex flex-col gap-2">
            {selectedProject.liveLink === "" ? (
              <button className="bg-slate-400   cursor-not-allowed">
                <a
                  className="cursor-not-allowed"
                  href={selectedProject.liveLink}
                 
                >
                  Take a Look
                </a>
              </button>
            ) : (
              <a
                className="text-center btn "
                href={selectedProject.liveUrl}
                target="_blank"
              >
                Take a Look
              </a>
            )}

            <a
              className="text-center btn "
              href={selectedProject.githubUrl}
              target="_blank"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="py-4 px-8 my-3">
  {selectedProject.description.split("\n").map((paragraph, index) => (
    <p key={index} className="mt-1">
      {paragraph}
    </p>
  ))}
</div>

      <div className="flex justify-center items-center w-full">
        {/* <button
          onClick={() => setsingleProject(false)}
          className="bg-transparent w-12 h-12 rounded-full my-6 text-center mx-auto text-2xl border-black border-[3px] hover:bg-black duration-300 hover:p-1 hover:text-white "
        >
          X
        </button> */}
       
<button
class="btn text-center w-48 rounded-2xl h-14 relative mb-6 text-black font-semibold group"
  onClick={() => setsingleProject(false)}
>
  <div
    class="bg-secondary rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p class="translate-x-2">Go Back</p>
</button>

      </div>
    </section>
  );
};

export default SingleProject;
