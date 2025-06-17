import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import resume from "../assets/resume Muhammad Haseen.pdf"

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="max-w-3xl md:max-w-3/4 mx-auto flex flex-col md:flex-row items-center gap-8 animate-fade-in delay-100">
          <div className="md:w-full mx-auto">
            <p className="text-lg mb-4 text-black">
              I'm a passionate Full Stack Developer with hands-on expertise in the MERN stack (MongoDB, Express.js, React, and Node.js). I specialize in building responsive, high-performance, and scalable web applications. My journey into web development began with a deep interest in problem-solving and a desire to create meaningful digital experiences. Over time, I’ve worked on a variety of projects, from simple websites to complex web applications, allowing me to sharpen both my technical skills and creative thinking.
            </p>
            <p className="text-lg mb-6 text-black">
              Although my academic background is in English Language and Literature, my strong passion for technology led me to pursue a career in web development. I completed a Full Stack Web Development course at Entri, where I developed a solid foundation in the MERN stack. Currently, I’m working as a Full Stack Development Intern at Nizzcorp in Malappuram. Over the past three months, I’ve gained valuable hands-on experience contributing to real-world projects, continuously learning and improving as a developer.
            </p>
            

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <FaMapMarkerAlt  className="text-blue-500 mr-2" />
                <span className="text-black">Malappuram, Kerala</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className=" text-blue-500 mr-2" />
                <span className="text-black">Available for work</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt  className=" text-blue-500 mr-2" />
                <span className="text-black">Full-time / Freelance</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:7736965052"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
              >
                Contact Me
              </a>
              <a href={resume} target="_blank" className="px-6 py-3 border border-blue-500 text-blue-500  rounded-full hover:bg-blue-500 hover:text-white transition duration-300 flex items-center">
                Resume
                <FaDownload className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
