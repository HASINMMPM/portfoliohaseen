import React from "react";
import { motion } from "framer-motion";

// import { FaFileDownload } from "react-icons/fa";
const About = () => {
  const resumeUrl = "/resume.pdf";
  return (
    <section className="p-6">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="heading "
      >
        About me
      </motion.h3>
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-2 place-items-center">
        <div className="flex flex-col gap-12 justify-center ">
          <motion.p
            className="text-tertiary text-[15px] md:text-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            I’m Muhammad Haseen, a passionate MERN Developer with a background
            in English Language and Literature from Calicut University (Class of
            2023). My deep interest in the IT field led me to transition into
            full-stack web development, where I specialize in MongoDB,
            Express.js, React, and Node.js. I love building dynamic,
            user-friendly applications and continuously learning new
            technologies to enhance my skills. With a problem-solving mindset
            and a drive for innovation, I’m always looking for exciting
            opportunities to collaborate and create impactful digital solutions.
          </motion.p>
          <a
            href={resumeUrl}
            download="Muhammad_Haseen_Resume.pdf"
            className="show-down btn px-6 py-3 hover:px-8 text-center w-1/2 items-center gap-2 text-white"
          >
            Download Resume
            {/* <div className="show">
              {" "}
              <FaFileDownload />
            </div> */}
          </a>
        </div>

        <motion.img
          className="hnm w-[60%] md:w-[40%] object-contain mx-auto grayscale hover:grayscale-0 duration-300 "
          src="https://muhammad-haseen-nm.onrender.com/assets/person-BK6dIwOX.jpg"
          alt="muhammad haseen"
          onContextMenu={(e) => e.preventDefault()}
          // onDragStart={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 100 ,rotate:90,scale:.3,y:-50}}
          whileInView={{ opacity: 1, x: 0 ,rotate:0,scale:1,y:0}}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default About;
