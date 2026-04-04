import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Pricing = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  return (
    <section>
      <div id="Pricing" className="bg-primary pt-25 min-h-400 md:min-h-185">
        <div className="text-center space-y-3">
          <p className="text-4xl  font-semibold">Pricing Plans</p>
          <p className="text-xl">The Best Solution for Our Clients</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className=" grid grid-cols-1 md:grid-cols-3 mx-6 md:mx-27.25"
        >
          <motion.div
            variants={itemVariants}
            className="bg-secondary rounded-2xl px-8 py-10  mt-15  w-80 h-95 text-black"
          >
            <p className="text-3xl font-semibold text-center ">Starter Plan</p>
            <p className="text-orange-400 font-bold text-3xl text-center py-5">
              $500
            </p>
            <ul className="list-disc  space-y-2 h-30">
              <li>Responsive website design and development (5 pages)</li>
              <li>Basic SEO</li>
              <li>Social media management </li>
            </ul>
            <button className="px-6 hover:border-orange-400 hover:bg-transparent active:border-orange-400 active:bg-transparent transition-all duration-500 border-2 border-transparent cursor-pointer py-2 bg-orange-400 text-lg ml-15 my-10 font-medium rounded-2xl">
              book now
            </button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-secondary rounded-2xl px-8 py-10  mt-15  w-80 h-95 text-black"
          >
            <p className="text-3xl font-semibold text-center ">Business Plan</p>
            <p className="text-orange-400 font-bold text-3xl text-center py-5">
              $1000
            </p>
            <ul className="list-disc   space-y-2 h-30 ">
              <li> Responsive website design and development (10 pages)</li>
              <li>Advanced SEO</li>
              <li>Social media management </li>
              <li>PPC advertising campaign </li>
            </ul>
            <button className="px-6 active:border-orange-400 active:bg-transparent hover:border-orange-400 hover:bg-transparent transition-all duration-500 border-2 border-transparent cursor-pointer py-2 bg-orange-400 text-lg ml-15 my-10 font-medium rounded-2xl">
              book now
            </button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-secondary rounded-2xl px-8 py-10  mt-15  w-80 h-95 text-black"
          >
            <p className="text-3xl font-semibold text-center ">Premium Plan</p>
            <p className="text-orange-400 font-bold text-3xl text-center py-5">
              $2000
            </p>
            <ul className="list-disc space-y-2 h-30  ">
              <li>Advanced Business plan</li>
              <li>Regular content creation</li>
              <li>Performance analysis and monthly reporting </li>
            </ul>
            <button className="px-6 active:border-orange-400 active:bg-transparent hover:border-orange-400 hover:bg-transparent transition-all duration-500 border-2 border-transparent cursor-pointer py-2 bg-orange-400 text-lg ml-15 my-10 font-medium rounded-2xl">
              book now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
