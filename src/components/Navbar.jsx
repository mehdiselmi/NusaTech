import React from "react";
import atomEditor from "../assets/Atom Editor.png";
import Button from "../components/Button.jsx";
const Navbar = () => {
  return (
    <div className="bg-neutral  md:px-17.25 px-4 py-6.5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={atomEditor} alt="" />
        <p className="font-semibold">Nusa Tech</p>
      </div>
      
        <ul className="flex pl-54 gap-5">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#Works">Our Works</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Ressources">Ressources</a>
          </li>
        </ul>
   
      <div className="flex  items-center">
        <Button text="Sign in " className="bg-transparent text-primary " />
        <Button text="Sign up " className="text-white  " />
      </div>
    </div>
  );
};

export default Navbar;
