import React, { useEffect, useState } from "react";
// import { projectData } from "../../public/project";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Project = ({ setsingleProject, setSelectedProject }) => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProject = async () => {
    const res = await axios.get(
      "https://portfoliobackend-7tqg.onrender.com/portfolio/project/all"
    );
    setProjectData(res.data);
    setLoading(false);
    console.log(res);
  };
  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4 w-60">
          <div>
            <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
            <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
          </div>
          <div className="h-7 bg-slate-400 w-full rounded-md"></div>
          <div className="h-7 bg-slate-400 w-full rounded-md"></div>
          <div className="h-7 bg-slate-400 w-full rounded-md"></div>
          <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className=" section">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="heading "
      >
        Some Things I've Built
      </motion.h3>
      <div className="flex flex-col gap-4">
        {projectData.map((item) => (
          <motion.div
            // initial={{ opacity: 0, x: 200 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
            key={item._id}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 items-center border-b border-tertiary"
          >
            <motion.img
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" h-52 object-contain mx-auto "
              src={item.image}
              alt={item.title}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center items-center"
            >
              <h3 className="text-secondary text-lg md:text-2xl font-heading font-semibold">
                {item.title}
              </h3>
              <h4 className="text-tertiary text-sm font-second">
                {item.category}
              </h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-3"
            >
              {item.liveUrl === "" ? (
                <button className="bg-red-200 rounded-lg cursor-not-allowed">
                  <a
                    className="cursor-not-allowed"
                    href={item.liveUrl}
                    target="_blank"
                  >
                    Take a Look
                  </a>
                </button>
              ) : (
                <button className="btn  rounded-lg">
                  <a href={item.liveUrl} target="_blank">
                    Take a Look
                  </a>
                </button>
              )}
              <button className="btn  rounded-lg ">
                <a href={item.githubUrl} target="_blank">
                  View Source
                </a>
              </button>
              <button
                onClick={() => {
                  setsingleProject(true);
                  setSelectedProject(item);
                }}
                className="explore btn rounded-lg flex justify-center items-center gap-2"
              >
                Explore More <FaRegArrowAltCircleRight className="arrow " />
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
