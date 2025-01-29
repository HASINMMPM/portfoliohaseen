import React from "react";
// import Project from "./Project";
import { motion } from "framer-motion";

const Welcome = () => {
  // const navlinks = [
  //   { name: "Projects", link: "#projects" },
  //   { name: "Resume", link: "#resume" },
  //   { name: "Skills", link: "#skills" },
  //   { name: "Contact", link: "#contact" },
  // ];

  return (
    <main className="h-screen flex items-center p-3">
      {/* type */}
      <div className="flex flex-col  ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-white  justify-center   "
        >
          <h1 className="font-heading text-primary text-lg md:text-5xl">
            Hi; I'm{" "}
          </h1>
          <h2 className="text-[2rem] md:text-8xl text-secondary font-second">
            Muhammad Haseen NM.
          </h2>
          <h3 className="text-xl md:text-6xl text-tertiary font-third">
            {" "}
            MERN Stack Developer.
          </h3>
        </motion.div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4  gap-2 place-items-center">
          {navlinks.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay:1 }}
              href={link.link}
              key={index}
              className="text-sm lg:text-xl  cursor-pointer hover:underline duration-300 p-4 underline-offset-8 flex justify-center items-center  text-quaternary"
            >
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div> */}
      </div>
    </main>
  );
};

export default Welcome;
