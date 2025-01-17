import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const techSkill = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Material-UI",
  "Responsive Web Design",
  "Node.js",
  "Express.js",
  "MongoDB",
  "AWS",
  "Mongoose",
  "JWT",
  "RESTful API",
  "git",
  "Photoshop",
];

const softSkill = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Problem-Solving",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Collaboration",
  "Empathy",
  "Self-Motivation",
  "Open to Feedback",
  "Stress Management",
  "Decision-Making",
  "Learning Agility",
];
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
      <h2 className="heading">Skills</h2>
      <div
        className="flex flex-row justify-between items-center w-full cursor-pointer bg-slate-100/40 p-2"
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
        <ul className="skillbox grid grid-cols-2 md:grid-cols-5 w-full mx-auto text-center bg-slate-50/30  ">
          {showTechSkill &&
            techSkill.map((skill, index) => (
              <li key={index} className="py-2 text-lg font-medium">
                {skill}
              </li>
            ))}
        </ul>
      }

      {/* SOFT */}
      <div
        className="flex flex-row justify-between items-center w-full mt-4 cursor-pointer bg-slate-100/40 p-2"
        onClick={() => handleSoftToggle()}
      >
        <span>Soft Skills</span>{" "}
        <button>
          <IoIosArrowDown
            className={
              showSoftSkill ? "duration-300" : "rotate-180 duration-300"
            }
          />
        </button>
      </div>

      {
        <ul className="skillbox grid grid-cols-2 md:grid-cols-5 w-full text-center bg-slate-50/30  ">
          {showSoftSkill &&
            softSkill.map((skill, index) => (
              <li key={index} className="py-2 text-lg font-medium">
                {skill}
              </li>
            ))}
        </ul>
      }
    </section>
  );
};

export default Skils;
