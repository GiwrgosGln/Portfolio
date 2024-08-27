import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 0.8 }}
      transition={{ duration: 1, delay: 5 }}
      className="grid grid-cols-3 grid-rows-5 gap-4 h-screen w-screen justify-center items-center z-10 bg-white"
    >
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="col-start-2 row-start-3 text-center text-4xl md:text-6xl font-semibold"
      >
        Glinias Georgios
      </motion.div>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="col-start-3 row-start-5 text-center text-5xl md:text-9xl font-semibold"
      >
        {percentage}%
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.2 }}
        className="col-start-2 row-start-3 text-center text-4xl md:text-6xl font-semibold"
      >
        Software Engineer
      </motion.div>
    </motion.div>
  );
};

export default Loader;
