import React, { useEffect, useRef, useState } from "react";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skils from "./Components/Skils";
import Welcome from "./Components/Welcome";
import SingleProject from "./Components/SingleProject";
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
      
            <Project
              setsingleProject={setsingleProject}
              setSelectedProject={setSelectedProject}
            />
            <hr className="hr" />
            <Resume />
            <hr className="hr" />
            <Skils />
            <hr className="hr" />
            <Contact />
          </div>
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
