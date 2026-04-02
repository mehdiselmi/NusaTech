import React from "react";
import { motion } from "motion/react";
const AnimatedButton = ({ children, fitness = 300, damping = 15 }) => {
  return <motion.div>
    <button>
        {children}
    </button>
  </motion.div>;
};

export default AnimatedButton;
