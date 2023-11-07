
import React from "react";
import Contact from "./components/Home/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Skills from "./components/Home/Skills";
import Projects from "./components/Home/Projects";
import Footer from "./components/Home/Footer";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;