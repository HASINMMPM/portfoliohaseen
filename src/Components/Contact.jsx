import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="section ">
      <h2 className="heading">Contact</h2>
      <div className="grid grid-cols-2 w-full gap-12">
        <div className="flex flex-col md:flex-row gap-8  w-full ">
          <a
            className="hover:text-slate-300 text-white text-lg duration-300 "
            href="tel://+919995958847"
          >
            Call me
          </a>
          <a
            className="hover:text-slate-300 text-white text-lg duration-300 "
            href="sms://+919995958847"
          >
            Messsege me
          </a>
          <a
            className="hover:text-slate-300 text-white text-lg duration-300"
            href="mailto:hasi11034@gmail.com"
          >
            Email me
          </a>
        </div>
        <div className="flex gap-4 justify-end  text-2xl w-full">
        
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
