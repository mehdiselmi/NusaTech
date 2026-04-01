import React from "react";
import laptop from "../assets/Laptop.png";
import email from "../assets/Email.png";
import paid from "../assets/Paid.png";
import marketing from "../assets/marketing.png";
import { motion } from "motion/react";
const Features = () => {
  const data = [
    { id: 2, image: laptop, text: "Research Topic Trends " },
    { id: 4, image: paid, text: "Google PPC" },
    { id: 1, image: marketing, text: "SEO Marketing" },
    { id: 3, image: email, text: "Email Marketing" },
  ];
  return (
    <div className="min-h-125 bg-accent flex justify-center text-center pb-15 md:pb-0 pt-20">
      <div className="space-y-6">
        <p className="text-2xl font-bold">Services</p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-xl md:px-autp px-4 "
        >
          Strategic services drive digital success with tailored, comprehensive
          approaches.
        </motion.p>
        <div className=" gap-5 pt-5 grid grid-cols-1  items-center md:grid-cols-4">
          {data.map((item) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-primary w-60 h-50 mx-auto flex flex-col items-center space-y-7 pt-8 rounded-xl "
              >
                <img src={item.image} className="w-15" />
                <p className="text-xl ">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
