import React, { useState } from "react";
import atomEditor from "../assets/Atom Editor.png";
import { easeIn, easeOut, motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-accent fixed top-0 right-0 left-0 opacity-90  md:px-17.25 px-4 py-3.5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={atomEditor} alt="" />
        <p className="font-semibold text-lg md:text-2xl">Nusa Tech</p>
      </div>

      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:flex pl-54 gap-5 hidden "
      >
        <li>
          <a
            href="#Home"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#Features"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#Works"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            Our Works
          </a>
        </li>
        <li>
          <a
            href="#Pricing"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#Ressources"
            className="hover:text-primary hover:underline hover:underline-offset-4 transition-all duration-400"
          >
            Ressources
          </a>
        </li>
      </motion.ul>

      <div className="flex  items-center">
        <div>
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 1, y: 3, transition: { duration: 0.4 } }}
            whileHover={{
              scale: 1.05,
              y: -3,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
            transition={{ duration: 0.8, ease: easeIn }}
            className={`md:py-3 md:px-5 p-2  outline-none cursor-pointer font-semibold rounded-2xl hover:text-white bg-transparent text-primary`}
          >
            Sign in
          </motion.button>
        </div>
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.04,
            transition: { type: "spring", stiffness: 300, damping: 8 },
          }}
          transition={{ duration: 0.8, ease: easeIn }}
          className={`md:py-3 md:px-5 p-2  outline-none cursor-pointer font-semibold rounded-2xl hover:bg-transparent hover:border-2 hover:border-primary border-2 border-transparent bg-primary text-white`}
        >
          Sign Up
        </motion.button>
        <button
          className="ml-1 text-3xl cursor-pointer md:hidden flex "
          onClick={() => setOpen(!open)}
        >
          <IoMdMenu />
        </button>
      </div>
      {open && (
        <ul className="absolute top-24 p-5 bg-accent  opacity-200 w-full text-black font-semibold left-0 h-screen">
          <a href="#Home">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              Home
            </li>
          </a>
          <a href="#About">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              About Us
            </li>
          </a>

          <a href="#Pricing">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              Pricing
            </li>
          </a>
          <a href="#Features">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              Features
            </li>
          </a>
          <a href="#Works">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              Our Works
            </li>
          </a>
          <a href="#Ressources">
            <li className="bg-primary my-2 px-3 py-1 rounded-xl focus:text-secondary">
              Ressources
            </li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
