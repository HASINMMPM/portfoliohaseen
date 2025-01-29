import React from "react";
import person from "../../public/person.jpg";
// import Project from "./Project";
import { motion } from "framer-motion";

const Welcome = () => {
  const navlinks = [
    { name: "Projects", link: "#projects" },
    { name: "Resume", link: "#resume" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 h-screen items-center place-items-center">
        {/* img */}
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src={person}
          alt="haseen"
          className="rounded-full w-1/2 object-cover grayscale hover:grayscale-0 duration-300 "
        />
        {/* type */}
        <div className="flex flex-col gap-14 ">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration:1 }}
            className="flex flex-col text-white  justify-center   "
          >
            <h1 className="font-heading text-primary text-lg md:text-3xl">Hi; I'm </h1>
            <h2 className="text-4xl md:text-6xl text-secondary font-second">
             Muhammad Haseen NM.
            </h2>
            <h3 className="text-xl md:text-3xl text-tertiary font-third">
              {" "}
              MERN Stack Developer.
            </h3>
          
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-2 place-items-center">
            {navlinks.map((link, index) => (
              <a
                href={link.link}
                key={index}
                className="text-sm lg:text-xl  cursor-pointer hover:underline duration-300 p-4 underline-offset-8 flex justify-center items-center  text-white"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
