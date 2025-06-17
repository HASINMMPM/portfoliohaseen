import React from 'react'
import img from "../assets/muhammadHaseen.webp"

const Hero = () => {
  return (
     <section id="home" className="bg-white min-h-screen flex items-center pt-20">
    <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"><br/>MUHAMMAD HASEEN NM</span>
        </h1>
        <h2 className="text-2xl mb-6">Full Stack Developer</h2>
        <p className="text-lg mb-8 text-gray-600 ">
          I build scalable web applications with <strong>MongoDB, Express, React, and
          Node.js</strong>
        </p>
        <div className="flex flex-wrap gap-4">
        
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
            Download Resume
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in delay-100 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 -rotate-12 shadow-xl" />
          <div className="absolute w-full h-full rounded-full overflow-hidden border-4 border-white  shadow-md">
            {/* Replace with your image */}
            <img
              src={img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero