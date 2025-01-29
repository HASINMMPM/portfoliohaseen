// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

// const techSkill = [
//   "React",
//   "JavaScript",
//   "HTML",
//   "CSS",
//   "Tailwind CSS",
//   "Bootstrap",
//   "Material-UI",
//   "Responsive Web Design",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "AWS",
//   "Mongoose",
//   "Authentication",
//   "RESTful API",
//   "git",
//   "Photoshop",
// ];
// // const techSkill = [
// //   "https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png",

// //   "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
// //   "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
// //   "https://www.shareicon.net/data/512x512/2015/09/11/99371_javascript_512x512.png",
// //   "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
// //   "https://www.shareicon.net/data/128x128/2015/10/06/112729_development_512x512.png",

// //   "https://icon.icepanel.io/Technology/svg/Mongoose.js.svg",
// //   "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
// //   "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
// //   "https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg",
// // ];
// const softSkill = [
//   "Leadership",
//   "Teamwork",
//   "Communication",
//   "Problem-Solving",
//   "Adaptability",
//   "Time Management",
//   "Critical Thinking",
//   "Collaboration",
//   "Empathy",
//   "Self-Motivation",
//   "Open to Feedback",
//   "Stress Management",
//   "Decision-Making",
//   "Learning Agility",
// ];
// const Skils = () => {
//   const [showTechSkill, setShowTechSkill] = useState(false);
//   const [showSoftSkill, setShowSoftSkill] = useState(false);

//   const handleTeckToggle = () => {
//     setShowTechSkill(!showTechSkill);
//   };
//   const handleSoftToggle = () => {
//     setShowSoftSkill(!showSoftSkill);
//   };
//   return (
//     <section id="skills" className="section ">
//       <motion.h3
//        initial={{ opacity: 0,}}
//        whileInView={{ opacity: 1}}
//        transition={{ duration:1 }}
//         className="heading text-primary">Skills</motion.h3>
//       <div
//         className="flex flex-row justify-between items-center w-full cursor-pointer bg-slate-100/40 p-2"
//         onClick={() => handleTeckToggle()}
//       >
//         <span className="font-semibold text-lg md:text-xl mx-auto">
//           Technical Skills
//         </span>{" "}
//         <button>
//           <IoIosArrowDown
//             className={
//               showTechSkill ? "duration-300" : "rotate-180 duration-300"
//             }
//           />
//         </button>
//       </div>
//       {/* <h3 className="text-white">Teck</h3> */}

//       {
//         <ul className="skillbox grid grid-cols-2 md:grid-cols-4 w-full mx-auto text-center text-white border-4 bg-slate-100/40  p-2">
//           {showTechSkill &&
//             techSkill.map((skill, index) => (
//               <li key={index} className="py-2 text-lg font-medium">
//                 {skill}
//                 {/* <img className="w-20  object-contain" src={skill} alt="" /> */}
//               </li>
//             ))}
//         </ul>
//       }

//       {/* SOFT */}
//       <div
//         className="flex flex-row justify-between items-center w-full mt-4 cursor-pointer  bg-slate-100/40 p-2"
//         onClick={() => handleSoftToggle()}
//       >
//         <span className="font-semibold text-lg md:text-xl mx-auto">
//           Soft Skills
//         </span>
//         <button>
//           <IoIosArrowDown
//             className={
//               showSoftSkill ? "duration-300" : "rotate-180 duration-300"
//             }
//           />
//         </button>
//       </div>

//       {
//         <ul className="skillbox grid grid-cols-2 md:grid-cols-4 w-full text-center text-white border-4 border-slate-100/40   ">
//           {showSoftSkill &&
//             softSkill.map((skill, index) => (
//               <li key={index} className="py-2 text-lg font-medium">
//                 {skill}
//               </li>
//             ))}
//         </ul>
//       }
//     </section>
//   );
// };

// export default Skils;
import React from "react";

const Skils = () => {
  const techSkill = [
    {
      name: "React",
      icon:
        "https://www.shareicon.net/data/128x128/2016/07/08/117367_logo_512x512.png",
    },
    {
      name: "Tailwind-CSS",
      icon:
        "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    {
      name: "Bootstrap",
      icon:
       "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    },
    {
      name: "Node js",
      icon:
      "https://www.shareicon.net/data/512x512/2015/09/11/99371_javascript_512x512.png",
    },
   
    {
      name: "Express js",
      icon:
      "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    },
   
    {
      name: "MongoDb",
      icon:
      "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    },
    {
      name: "Mongoose",
      icon:
      "https://icon.icepanel.io/Technology/svg/Mongoose.js.svg",
    },
    {
      name: "GitHub",
      icon:
      "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
    },
    {
      name: "AWS",
      icon:
      "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
    },
    {
      name: "Photoshop",
      icon:
      "https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg",
    },
   
  ];
  return (
    <section id="skills" className="section text-tertiary">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="heading "
      >
        few technologies I’ve been worked;
      </motion.h3>

      <div className="flex flex-row justify-between items-center w-full cursor-pointer p-2"></div>
      <ul className="skillbox grid grid-cols-2 md:grid-cols-4 w-full mx-auto place-items-center">
        {techSkill.map((skill, index) => (
          <li key={index} className="py-2 ">
            <motion.img
            initial={{ opacity: 0,scale:0 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 1 }}
             
              className="w-20  object-contain  p-2"
              src={skill.icon}
              alt={skill.name}
              title={skill.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skils;
