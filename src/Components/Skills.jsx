import React from "react";
import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiExpress, SiJest, SiMongoose, SiPostman, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">
          <span className="gradient-text">Skills &amp; Tools</span>
        </h2>
        <p className="text-center text-gray-600  mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center animate-fade-in delay-200">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-300">
            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <BiLogoTypescript className="text-3xl duration-300  group-hover:text-blue-400 group-hover:scale-125" />
              </div>
              <span>Typescript</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <FaReact className="text-3xl duration-300 group-hover:text-blue-400 group-hover:scale-125" />
              </div>
              <span>React</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <FaNodeJs className="text-3xl duration-300 group-hover:scale-125 group-hover:text-green-800" />
              </div>
              <span>Node.js</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <SiExpress  className="text-3xl duration-300 group-hover:scale-125 " />
              </div>
              <span>Express</span>
            </div>
            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <DiMongodb className="text-3xl duration-300 group-hover:scale-125 group-hover:text-green-600" />
              </div>
              <span>MongoDB</span>
            </div>
            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <SiMongoose  className="text-3xl duration-300 group-hover:scale-125 group-hover:text-red-600" />
              </div>
              <span>Mongoose </span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <SiTailwindcss className="text-3xl duration-300 group-hover:scale-125 group-hover:text-blue-500" />
              </div>
              <span>TailwindCSS</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <FaGitAlt className="text-3xl duration-300 group-hover:scale-125 group-hover:text-orange-600" />
              </div>
              <span>Git</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-center animate-fade-in delay-200">
            Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in delay-300">
            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <VscVscode className="text-3xl duration-300 group-hover:scale-125 group-hover:text-blue-500" />
              </div>
              <span>VS Code</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <FaGithub className="text-3xl duration-300 group-hover:scale-125 " />
              </div>
              <span>GitHub</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <SiPostman className="text-3xl duration-300 group-hover:scale-125 group-hover:text-orange-600" />
              </div>
              <span>Postman</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <FaDocker className="text-3xl duration-300 group-hover:scale-125 group-hover:text-blue-400" />
              </div>
              <span>Docker</span>
            </div>

            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <DiRedis className="text-3xl duration-300 group-hover:scale-125 group-hover:text-red-700" />
              </div>
              <span>Redis</span>
            </div>
            <div className="skill-icon flex flex-col items-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl mb-2">
                <SiJest  className="text-3xl duration-300 group-hover:scale-125 group-hover:text-red-800" />
              </div>
              <span>Jest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
