import React from "react";

import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import group from "../assets/Group.png";
import path from "../assets/path.png";
import { motion } from "motion/react";
import AnimatedButton from "./AnimatedButton";
const Hero = () => {
  const support = [
    { id: 1, image: vector, name: "ripple" },
    { id: 2, image: vector1, name: "Dropbox" },
    { id: 3, image: vector2, name: "Walmart" },
    { id: 4, image: group, name: "mister aladin" },
    { id: 5, image: path, name: "Spotify" },
    // { id: 6, image: {}, name: "" },
  ];
  return (
    <div>
      <section>
        <div className="min-h-122 bg-accent  flex text-center justify-center ">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className=" text-center md:space-y-7 space-y-8"
            >
              <div className="md:text-7xl text-2xl flex flex-col gap-3 md:mt-8 mt-12 font-bold">
                <p>Drive Growth with Innovative </p>{" "}
                <span className="text-primary ">
                  Digital Marketing Services
                </span>
              </div>
              <p className="md:text-2xl text-sm mx-10   md:mx-auto font-semibold">
                Execute SEO, content marketing, competitor research, PPC, and
                social media marketing <br />
                <span>in one platform.</span>
              </p>
            </motion.div>
            <div className="md:mt-5 mt-10">
              <div>
                <input
                  type="text"
                  placeholder="Enter domain, keyword, or URL"
                  className="placeholder-neutral md:w-160 w-60 md:h-17.25 bg-white rounded-2xl   py-2.5 px-2 md:px-5 outline-none text-black text-sm md:text-xl"
                />
              </div>
            </div>
            <div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-5 md:mt-5  mt-8 justify-center"
            >
              <AnimatedButton
                className={`md:px-7.5 px-3 py-3 md:py-4 border-2 border-transparent hover:bg-transparent cursor-pointer bg-primary rounded-xl  hover:border-primary focus:border-primary active:border-primary`}
              >
                Start Now
              </AnimatedButton>

              <AnimatedButton
                className={`md:px-7.5 px-3 py-3 md:py-4 bg-transparent  border-2 cursor-pointer border-primary rounded-xl `}
              >
                Learn More
              </AnimatedButton>
            </div>
          </div>{" "}
        </div>
      </section>
      {/* company  */}
      <section>
        <div className="text-center  bg-secondary min-h-70.5 md:pt-20 space-y-10 py-15 md:space-y-15  md:px-45 text-accent">
          <div className="flex md:justify-between md:pt-0 pt-10 md:flex-row flex-col items-center gap-5">
            {support.map((item) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  key={item.id}
                  className="flex items-center gap-3"
                >
                  <img src={item.image} />
                  <p className="font-bold text-xl">{item.name}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-accent text-xl"
          >
            Trusted by 20,000+ companies{" "}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
