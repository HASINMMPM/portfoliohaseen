import React from "react";
import person from "../../public/person.jpg";
import Project from "./Project";

const Welcome = () => {
  const navlinks = [
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" }
  ];
  
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 min-h-screen items-center ">
        {/* img */}
        <img src={person} alt="haseen" className="rounded-full w-1/2 object-cover mx-auto " />
        {/* type */}
        <div className="flex flex-col gap-14">

        <div className="flex flex-col blend-animation  justify-center">
          <h1 className="font-heading text-6xl md:text-8xl">hello;</h1>
          <h2 className="text-2xl md:text-4xl font-second">I'm Muhammad Haseen NM.</h2>
          <h3 className="text-xl md:text-3xl font-third"> MERN Stack Developer.</h3>
          {/* indication */}
          
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center  ">
           
            {navlinks.map((link, index) => (
              <a href={link.link} key={index} className="text-sm lg:text-xl rounded-full bg-black/40 hover:border-2 border-white cursor-pointer hover:bg-white/20 duration-300 p-4 h-20 w-20 lg:w-24 lg:h-24 flex justify-center items-center  text-white">
                <span >{link.name}</span>
              </a>
            ))}
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
