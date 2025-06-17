import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Header";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {


  return (
  
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>
    <Footer/></>
  );
}
