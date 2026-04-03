import React from "react";
import { motion } from "motion/react";
const AnimatedButton = ({
  className,
  children,
  stiffness = 300,
  damping = 15,
}) => {
  return (
    <div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={className}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          y: -2,
          transition: { type: "spring", stiffness, damping },
        }}
        whileTap={{ scale: 1, y: 1 }}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
