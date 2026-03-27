import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OurWork from "./components/OurWork";

const App = () => {
  return (
    <div className="text-[#F8F9FF]">
      <Navbar />
      <Hero />
      <Features />
      <OurWork />
    </div>
  );
};

export default App;
