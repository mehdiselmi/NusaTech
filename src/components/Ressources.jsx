import React from "react";
import ellipse from "../assets/Ellipse.png";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import { motion } from "motion/react";
const Ressources = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const data = [
    {
      id: 1,
      image: ellipse,
      name: "Michael Lee",
      type: "Small Business Owner of a Local Cafe",
      text: "Impressed with Nusa Tech's professionalism and competence. They understand our needs and provide innovative solutions, with outstanding customer service.",
    },
    {
      id: 2,
      image: ellipse1,
      name: "Jessica Taylor",
      type: "Director of Marketing Startup",
      text: "Nusa Tech significantly improved our online presence. From website design to PPC campaigns, they deliver outstanding results. Highly recommended!",
    },
    {
      id: 3,
      image: ellipse2,
      name: "David Smith",
      type: "CEO of Digital Startup",
      text: "Very satisfied with Nusa Tech's work. They've improved our brand visibility online and provided valuable insights. Thank you!",
    },
  ];
  return (
    <section>
      <div className=" bg-primary text-white py-20">
        <div className="  flex items-center">
          <p className="md:text-4xl text-xl px-10 md:pl-27.25 pb-18 font-semibold">
            What Our Customers say about Nusa Tech{" "}
          </p>
          <div className="h-1.5 bg-white w-35 mb-15 ml-3 hidden md:flex"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="md:mx-27.25 mx-6  text-black grid grid-cols-1 gap-5  md:grid-cols-3 "
        >
          {data.map((item) => (
            <motion.div variants={itemVariants} className="bg-secondary rounded-tr-xl p-7   h-70 rounded-bl-xl  w-[320px] ">
              <div className="flex gap-6 pb-7  items-center ">
                <img src={item.image} className="rounded-full  w-20 " />
                <div className="  ">
                  <p className="font-bold text-xl">
                    {item.name} <br />{" "}
                  </p>
                  <span>{item.type}</span>
                </div>
              </div>
              <p className="text-sm font-mono">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ressources;
