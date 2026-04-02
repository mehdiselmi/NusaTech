import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OurWork from "./components/OurWork";
import Ressources from "./components/Ressources";
import Pricing from "./components/Pricing";
import About from "./components/About";

const App = () => {
  return (
    <div className="text-[#F8F9FF]">
      <Navbar />
      <Hero />
      <Features />
      <OurWork />
      <Ressources/>
      <Pricing/>
      <About/>
    </div>
  );
};

export default App;
