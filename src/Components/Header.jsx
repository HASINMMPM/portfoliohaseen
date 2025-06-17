import { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

 

 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-blue-500/80 backdrop-blur-md z-50 shadow-sm ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text">
            MUHAMMAD HASEEN
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center space-x-4">
           
            <button onClick={toggleMenu} className="md:hidden p-2">
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-500 transition">Home</a>
              <a href="#about" className="hover:text-blue-500 transition">About</a>
              <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
              <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
              <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
