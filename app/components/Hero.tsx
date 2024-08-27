import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 9 }}
      className="grid grid-cols-3 grid-rows-5 relative h-screen w-screen justify-center items-center bg-white"
    >
      <motion.div className="col-start-2 row-start-3 text-center text-4xl md:text-8xl font-semibold">
        Hero Section
      </motion.div>
    </motion.div>
  );
};

export default Hero;
