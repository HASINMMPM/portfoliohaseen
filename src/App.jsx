import React, { useEffect, useRef, useState } from "react";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skils from "./Components/Skils";
import Welcome from "./Components/Welcome";
import SingleProject from "./Components/SingleProject";
import About from "./Components/About";
import { FaAngleDoubleUp } from "react-icons/fa";
// import { NeatGradient } from "@firecms/neat";

export default function App() {
  const [singleProject, setsingleProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative max-w-6xl mx-auto ">
      {!singleProject ? (
        <>
          <Welcome />

          <hr className="hr" />
          <div className="relative ">
            <About />
            <hr className="hr" />
            <Project
              setsingleProject={setsingleProject}
              setSelectedProject={setSelectedProject}
            />
            {/* <hr className="hr" />
            <Resume /> */}
            <hr className="hr" />
            <Skils />
            <hr className="hr" />
            <Contact />
          </div>
          <a href="#" className="fixed right-0 bottom-0 mr-6 mb-6 p-3 text-lg md:text-3xl bg-[#196159] hover:bg-black duration-300 rounded-full text-white hover:text-tertiary"><FaAngleDoubleUp/></a>
        </>
      ) : (
        <SingleProject
          setsingleProject={setsingleProject}
          selectedProject={selectedProject}
        />
      )}
    </div>
  );
}
