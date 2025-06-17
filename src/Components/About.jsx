import React from 'react'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
     <section id="about" className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
        <span className="gradient-text">About Me</span>
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 animate-fade-in delay-100">
        <div className="md:w-3/4 mx-auto">
          <p className="text-lg mb-4 text-black">
            I'm a passionate Full Stack Developer with expertise in the MERN
            stack (MongoDB, Express.js, React, and Node.js). With over 3 years
            of experience, I specialize in building responsive, performant, and
            scalable web applications.
          </p>
          <p className="text-lg mb-6 text-black">
            My journey in web development began when I discovered my love for
            problem-solving and creating digital experiences. Since then, I've
            worked on various projects ranging from simple websites to complex
            web applications.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-blue-500 mr-2" />
              <span className="text-black">
               Malappuram, Kerala
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-blue-500 mr-2" />
              <span className="text-black">
                Available for work
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-alt text-blue-500 mr-2" />
              <span className="text-black">
                Full-time / Freelance
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
              Contact Me
            </a>
            <button className="px-6 py-3 border border-blue-500 text-blue-500  rounded-full hover:bg-blue-500 hover:text-white transition duration-300 flex items-center">
              Resume
             <FaDownload className='ml-2' />
            </button>
          </div>
        </div>
      
      </div>
    </div>
  </section>
  )
}

export default About