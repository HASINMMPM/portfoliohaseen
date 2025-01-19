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
            color: '#565656',
            enabled: true,
        },
        {
            color: '#443F4C',
            enabled: true,
        },
        {
            color: '#565656',
            enabled: true,
        },
        {
            color: '#343237',
            enabled: true,
        },
        {
            color: '#394452',
            enabled: true,
        },
    ],
    speed: 0.5,
    horizontalPressure: 2,
    verticalPressure: 3,
    waveFrequencyX: 2,
    waveFrequencyY: 2,
    waveAmplitude: 8,
    shadows: 5,
    highlights: 8,
    colorBrightness: 0.9,
    colorSaturation: 4,
    wireframe: false,
    colorBlending: 4,
    backgroundColor: '#ADC6D0',
    backgroundAlpha: 1,
    grainScale: 0,
    grainSparsity: 0,
    grainIntensity: 0,
    grainSpeed: 0,
    resolution: 1,
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
