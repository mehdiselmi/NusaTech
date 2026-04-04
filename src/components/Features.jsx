import React from "react";
import laptop from "../assets/Laptop.png";
import email from "../assets/Email.png";
import paid from "../assets/Paid.png";
import marketing from "../assets/Marketing.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Features = () => {
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
    { id: 2, image: laptop, text: "Research Topic Trends " },
    { id: 4, image: paid, text: "Google PPC" },
    { id: 1, image: marketing, text: "SEO Marketing" },
    { id: 3, image: email, text: "Email Marketing" },
  ];
  return (
    <div
      id="Features"
      className="min-h-125 bg-accent flex justify-center text-center pb-15 md:pb-0 pt-20"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl font-bold mb-3">Services</p>
          <p className="md:text-xl md:px-auto px-4 ">
            Strategic services drive digital success with tailored,
            comprehensive approaches.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className=" gap-5 pt-5 grid grid-cols-1  items-center md:grid-cols-4"
        >
          {data.map((item) => {
            return (
              <motion.div
                variants={itemVariants}
                className="bg-primary w-60 h-50 mx-auto flex flex-col items-center space-y-7 pt-8 rounded-xl "
              >
                <img src={item.image} className="w-15" />
                <p className="text-xl ">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
