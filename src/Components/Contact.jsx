import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="section ">
         <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="heading "
      >Get In Touch</motion.h3>

      {/* <div className="flex flex-col md:flex-row gap-8  w-full ">
          <a
            className="hover:text-tertiary hover: underline-offset-4 text-secondary text-lg duration-300 "
            href="tel://+919995958847"
          >
            Call me
          </a>
          <a
            className="hover:text-tertiary hover:underline-offset-4 text-secondary text-lg duration-300 "
            href="sms://+919995958847"
          >
            Messsege me
          </a>
          <a
            className="hover:text-tertiary hover:underline-offset-4 text-secondary text-lg duration-300"
            href="mailto:hasi11034@gmail.com"
          >
            Email me
          </a>
        </div> */}

      <ul className="flex">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhmmadhaseennm11034/"
          >
            <i class="fab fa-facebook-f icon">
              {" "}
              <AiFillLinkedin />
            </i>{" "}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/HASINMMPM">
            <i class="fab fa-twitter icon">
              {" "}
              <FaGithub />
            </i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/917736965052?text=Hello Haseen"
          >
            <i class="fab fa-google-plus-g icon">
              {" "}
              <IoLogoWhatsapp />
            </i>
          </a>
        </li>
        <li>
          <a target="_blank" href="tel://+919995958847">
            <i class="fab fa-twitter icon">
              {" "}
              <FaPhoneAlt />
            </i>{" "}
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:hasi11034@gmail.com">
            <i class="fab fa-twitter icon">
              {" "}
              <MdEmail />
            </i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
