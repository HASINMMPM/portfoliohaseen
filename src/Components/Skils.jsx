import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const techSkill = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI",
  "AWS",
  "Photoshop",
  "Mongoose",
  "JWT",
];

const softSkill = [
  "Leadership",
  "Teamwork",
  "Communication"]
const Skils = () => {
  const [showTechSkill, setShowTechSkill] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);

  const handleTeckToggle = () => {
    setShowTechSkill(!showTechSkill);
   
  };
  const handleSoftToggle = () => {
    setShowSoftSkill(!showSoftSkill);
   
  };
  return (
    <section id="skills" className="section ">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div
        className="flex flex-row justify-between items-center w-full bg-slate-50/40 p-2"
        onClick={() => handleTeckToggle()}
      >
        <span>Technical Skills</span>{" "}
        <button>
          <IoIosArrowDown
            className={
              showTechSkill ? "duration-300" : "rotate-180 duration-300"
            }
          />
        </button>
      </div>

     {
      <ul className="skillbox grid grid-cols-2 md:grid-cols-5 w-full text-center bg-slate-50/30  ">
        {
          showTechSkill &&
          techSkill.map((skill, index) => (
            <li key={index} className="py-2 text-lg font-medium">
              {skill}
            </li>
          ))
        }
      </ul>
     }
     
     {/* SOFT */}
     <div
        className="flex flex-row justify-between items-center w-full mt-4 bg-slate-50/40 p-2"
        onClick={() => handleSoftToggle()}
      >
        <span>Soft Skills</span>{" "}
        <button>
          <IoIosArrowDown
            className={
              showTechSkill ? "duration-300" : "rotate-180 duration-300"
            }
          />
        </button>
      </div>

     {
      <ul className="skillbox grid grid-cols-2 md:grid-cols-5 w-full text-center bg-slate-50/30  ">
        {
          showSoftSkill &&
          softSkill.map((skill, index) => (
            <li key={index} className="py-2 text-lg font-medium">
              {skill}
            </li>
          ))
        }
      </ul>
     }
     
    </section>
  );
};

export default Skils;
