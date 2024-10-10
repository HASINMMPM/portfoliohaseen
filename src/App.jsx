import { useState } from "react";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skils from "./Components/Skils";
import Welcome from "./Components/Welcome";
import SingleProject from "./Components/SingleProject";

export default function App() {
  const [singleProject, setsingleProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Store the selected project as an object
  
  return (
    <div className="max-w-6xl mx-auto app">
      {
        !singleProject ?
        <>
        <Welcome />
        <Project setsingleProject={setsingleProject} setSelectedProject={setSelectedProject} />
        <Resume />
        <Skils />
        <Contact />
        </>: <SingleProject setsingleProject={setsingleProject} selectedProject={selectedProject} />
      }
   
    
     
    </div>
  );
}
