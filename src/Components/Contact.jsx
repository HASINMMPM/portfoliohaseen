import React, { useState } from 'react'
import { DiGithub } from 'react-icons/di';
import { FaGithubSquare, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
const Contact = () => {
   const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const text = `hello Muhammad Haseen Am ${name}\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/+917736965052?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
  };
  return (
     <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">
        <span className="gradient-text">Let's Work Together!</span>
      </h2>
      <p className="text-center text-gray-600  mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
        Have a project in mind or want to discuss potential opportunities? Feel
        free to reach out!
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="card p-8 rounded-xl border shadow-md animate-fade-in delay-200">
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
           <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
        </div>
        <div className="animate-fade-in delay-300 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhoneSquareAlt   className="fas fa-envelope text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:7736965052"
                    className="text-gray-600  hover:text-blue-500"
                  >
                   7736965052
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MdEmail  className="fas fa-envelope text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hasi11034@gmail.com"
                    className="text-gray-600  hover:text-blue-500"
                  >
                   hasi11034@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaLinkedin  className="fab fa-linkedin text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/muhmmadhaseennm11034/"
                    target="_blank"
                    className="text-gray-600  hover:text-blue-500"
                  >
                    muhmmadhaseennm11034
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaGithubSquare  className="fab fa-github text-blue-500 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/HASINMMPM"
                    target="_blank"
                    className="text-gray-600  hover:text-blue-500"
                  >
                    HASINMMPM
                  </a>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact