import React, { useEffect, useRef, useState } from "react";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skils from "./Components/Skils";
import Welcome from "./Components/Welcome";
import SingleProject from "./Components/SingleProject";
import { NeatGradient } from "@firecms/neat";

export default function App() {
  const [singleProject, setsingleProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: '#d4dbef',
          enabled: true,
      },
      {
          color: '#bdc3e0',
          enabled: true,
      },
      {
          color: '#fb798d',
          enabled: true,
      },
      {
          color: '#f5515c',
          enabled: true,
      },
      {
          color: '#fdfdfc',
          enabled: true,
      },
    ],
    speed: 2,
    horizontalPressure: 4,
    verticalPressure: 3,
    waveFrequencyX: 0,
    waveFrequencyY: 0,
    waveAmplitude: 0,
    shadows: 2,
    highlights: 7,
    colorBrightness: 1,
    colorSaturation: 8,
    wireframe: false,
    colorBlending: 8,
    backgroundColor: '#FF0000',
    backgroundAlpha: 1,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 0.5,
    });

    return () => gradientRef.current?.destroy();
  }, [canvasRef]);

  return (
    <div className="relative max-w-6xl mx-auto ">
      {!singleProject ? (
        <>
          <Welcome />

          <div className="relative ">
            <canvas
              className="fixed top-0 w-full  max-w-6xl mx-auto h-full z-[-1]"
              ref={canvasRef}
            />
            <Project
              setsingleProject={setsingleProject}
              setSelectedProject={setSelectedProject}
            />
            <hr className="bg-gray-50 text-white h-1" />
            <Resume />
            <hr className="bg-gray-50 text-white h-1" />
            <Skils />
            <hr className="bg-gray-50 text-white h-1" />
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
