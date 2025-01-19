import React, { useEffect, useState } from "react";
// import { projectData } from "../../public/project";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

const Project = ({ setsingleProject, setSelectedProject }) => {
  const [projectData, setProjectData] = useState([]);
  const fetchProject = async () => {
    const res = await axios.get("https://portfoliobackend-7tqg.onrender.com/portfolio/project/all");
    setProjectData(res.data);
    console.log(res);
  };
  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <section id="projects" className=" section">
      <h3 className="heading ">Projects</h3>
      <div className="flex flex-col gap-2">
        {projectData.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-5 p-2 items-center border-2 border-white"
          >
            <img className="w-1/2 object-contain mx-auto " src={item.image} alt={item.title} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg md:text-2xl font-heading font-semibold">
                {item.title}
              </h3>
              <h4 className="text-sm font-second">{item.category}</h4>
            </div>
            <div className="flex flex-col gap-3">
              {item.liveUrl === "" ? (
                <button className="bg-red-200 max-h-16 rounded-lg cursor-not-allowed">
                  <a
                    className="cursor-not-allowed"
                    href={item.liveUrl}
                    target="_blank"
                  >
                    Take a Look
                  </a>
                </button>
              ) : (
                <button className="btn  max-h-16 rounded-lg">
                  <a href={item.liveUrl} target="_blank">
                    Take a Look
                  </a>
                </button>
              )}
              <button className="btn  max-h-16 rounded-lg">
                <a href={item.githubUrl} target="_blank">
                  View Source
                </a>
              </button>
            </div>
            <button
              onClick={() => {
                setsingleProject(true);
                setSelectedProject(item);
              }}
              className="explore btn rounded-lg flex justify-center items-center gap-2"
            >
              Explore More <FaRegArrowAltCircleRight className="arrow " />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
