import React from "react";
import atomEditor from "../assets/Atom Editor.png";
import phone from "../assets/phone.png";
import mobile from "../assets/mobile.png";
import location from "../assets/location.png";
import AnimatedButton from "./AnimatedButton";
import { motion } from "motion/react";
const About = () => {
  return (
    <div id="Ressources">
      {/* Quotes  */}
      <section className="bg-secondary text-black p-5 md:text-left text-center md:py-0  md:px-27.25 md:h-55  ">
        <div className="flex md:justify-between md:flex-row flex-col  items-center md:pt-17">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold md:mb-0 mb-6"
          >
            “Stand out online and make an impact”
          </motion.p>
          <AnimatedButton
            className={`text-white bg-orange-400 cursor-pointer rounded-2xl font-semibold  px-4 outline-none border-2 border-transparent hover:border-amber-400 hover:bg-transparent hover:text-black active:border-amber-400 active:bg-transparent active:text-black py-3`}
          >
            Strat Now
          </AnimatedButton>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 text-gray-700"
        >
          David Smith - CEO of a Tech Startup
        </motion.p>
      </section>

      {/* About us */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:h-120  bg-accent text-center md:text-left md:py-0 p-5 px-3 md:px-15"
        >
          <div className=" flex flex-col md:flex-row md:justify-between  border-b-2 border-white md:h-100  items-center  gap-5  ">
            <div className=" md:w-120">
              <div className="flex  ml-15 mt-5 md:mt-0 md:ml-0 items-center gap-2 mb-10 md:mb-15">
                <img src={atomEditor} />
                <p className="text-3xl font-semibold">Nusa Tech</p>
              </div>
              <p className="md:text-xl  ">
                Nusa Tech is a leading digital marketing agency dedicated to
                driving success for businesses online. With expertise in SEO,
                PPC, social media, content creation, and more, we offer tailored
                solutions to maximize ROI.
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center ">
              <div className=" md:w-50">
                <p className="text-primary md:text-xl text-2xl font-semibold mt-10 md:mt-0 mb-5 md:mb-10">
                  Our Services
                </p>
                <ul className="md:space-y-6  md:text-sm text-xl space-y-3">
                  <li>SEO Marketing</li>
                  <li>Research Topic Trends</li>
                  <li>Email Marketing</li>
                  <li>Google PPC</li>
                </ul>
              </div>
              <div className=" md:w-50">
                <p className="text-primary md:text-xl text-2xl font-semibold mb-5 mt-10 md:mt-0  md:mb-10">
                  Explore More
                </p>
                <ul className="md:space-y-3 md:text-sm space-y-2 text-xl ">
                  <li>About Us</li>
                  <li>Feature</li>
                  <li>Our Works</li>
                  <li>Resource</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="md:w-50 mb-5 md:mb-0 ">
                <p className="text-primary md:text-xl text-2xl font-semibold  mb-2 mt-10 md:mt-0 md:mb-10">
                  Contact Us
                </p>
                <ul className="md:space-y-3 md:text-sm space-y-2 text-xl ">
                  <div className="flex items-center gap-3">
                    <img
                      src={location}
                      className="bg-white rounded-full p-2 px-3"
                    />{" "}
                    <li className="text-sm font-semibold">
                      Jl. Medan Merdeka No. 35 Jakarta Selatan
                    </li>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={phone} className="bg-white rounded-full p-2" />{" "}
                    <li className="text-sm font-semibold">(021) 234567</li>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={mobile}
                      className="bg-white rounded-full p-2 px-3 "
                    />
                    <li className="text-sm font-semibold">+62 812 9188 72</li>
                  </div>
                </ul>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="flex items-center justify-between   mt-7">
            <p className="text-sm md:text-lg">
              Nusa tech 2026 © All right reserved
            </p>
            <p className="text-sm md:text-lg">Terms & Condition</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
