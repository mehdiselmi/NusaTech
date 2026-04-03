import React from "react";
import rectangle from "../assets/Rectangle.png";
import idea from "../assets/Idea.png";
import idea1 from "../assets/Idea1.png";
import goal from "../assets/Goal.png";
import vector3 from "../assets/Vector3.png";
import vector4 from "../assets/Vector4.png";
import vector5 from "../assets/Vector5.png";
import { motion } from "motion/react";
const OurWork = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const data1 = [
    {
      id: 1,
      img: goal,
      text: "Solutions Tailored Specifically to Your Business Needs",
    },
    { id: 1, img: idea, text: "Creative Excellence Elevates Every Project" },
    { id: 1, img: idea1, text: "Client Satisfaction is Our Main Focus" },
  ];
  const data2 = [
    {
      id: 1,
      img: vector3,
      total: "10,000+",
      text: "Happy Customers",
    },
    {
      id: 1,
      img: vector4,
      total: "20,000+",
      text: "Success Processes",
    },
    {
      id: 1,
      img: vector5,
      total: "10+ Years",
      text: "of Experience",
    },
  ];
  return (
    <div id="Works">
      <section>
        <div className="pt-15 min-h-170 bg-secondary">
          <p className="font-semibold text-3xl text-neutral text-center">
            Why Choose Us?
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 grid-cols-1 py-12 items-center  md:px-27.25"
          >
            <div className="md:w-85 mx-auto w-60 ">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src={rectangle}
              />
            </div>
            <div className=" ">
              {data1.map((item) => {
                return (
                  <motion.div
                    variants={itemVariants}
                    className=" bg-accent flex items-center gap-5 mt-10 md:mt-4 md:py-6 md:px-5 md:w-150 mx-auto px-2 py-2 w-80 rounded-2xl"
                  >
                    <img
                      src={item.img}
                      className="rounded-full p-2 w-17 bg-primary"
                    />
                    <p className="md:text-xl">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work with Nusa Tech  */}

      <section id="About">
        <div className="py-12  bg-accent text-center">
          <p className="font-bold text-3xl ">Work with Nusa Tech</p>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:w-230  mx-auto grid grid-cols-1 md:grid-cols-3 "
          >
            {data2.map((item) => {
              return (
                <motion.div
                  variants={itemVariants}
                  className="md:w-70    space-y-2 flex justify-center items-center mt-15 flex-col"
                >
                  <img
                    src={item.img}
                    className="bg-primary rounded-full w-20 p-4 "
                  />
                  <p className="text-2xl font-semibold">{item.total}</p>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
