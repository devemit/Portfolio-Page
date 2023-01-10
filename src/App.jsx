import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <img
        src="https://meshdesignstudio.com/wp-content/uploads/2018/02/mesh-background-portfolio-lglines.jpg"
        alt="bg"
        className="absolute z-[-1] object-cover w-full h-full"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
