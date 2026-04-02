import React from "react";
import atomEditor from "../assets/Atom Editor.png";
import { easeIn, motion } from "motion/react";
const Navbar = () => {
  return (
    <div className="bg-neutral  md:px-17.25 px-4 py-6.5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={atomEditor} alt="" />
        <p className="font-semibold text-2xl">Nusa Tech</p>
      </div>

      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex pl-54 gap-5"
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
            whileHover={{
              scale: 1.05,
              y: -1,
              transition: { duration: 0.1, ease: easeIn },
            }}
            transition={{ duration: 0.8 }}
            className={`py-3 px-5   outline-none cursor-pointer font-semibold rounded-2xl hover:text-white bg-transparent text-primary`}
          >
            Sign in
          </motion.button>
        </div>
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.3, ease: easeIn },
          }}
          transition={{ duration: 0.8 }}
          className={`py-3 px-5   outline-none cursor-pointer font-semibold rounded-2xl hover:bg-transparent hover:border-2 hover:border-primary border-2 border-transparent bg-primary text-white`}
        >
          Sign Up
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
