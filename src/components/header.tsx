import logo from "../assets/logo.webp";
import Separator from "./separator";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="px-5 md:px-0 w-screen md:w-2/3 2xl:w-1/2">
      <div className="flex flex-row items-center gap-4 ">
        <motion.img
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          src={logo}
          alt="logo"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <motion.h3
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-secondaryText text-lg xl:text-xl 2xl:text-2xl font-semibold"
          >
            Giwrgos Glinias
          </motion.h3>
          <motion.h3
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-primaryText text-base xl:text-lg 2xl:text-xl font-semibold"
          >
            Full Stack Developer
          </motion.h3>
        </div>
      </div>
      <div className="mt-10 xl:mt-20">
        <motion.p
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-primaryText text-base xl:text-lg 2xl:text-xl text-justify"
        >
          Full Stack Developer with experience in React, React Native and C#
          with .NET Entity Framework. I combine modern technologies and best
          practices to create robust, scalable applications. My expertise spans
          both frontend and backend development, allowing me to deliver
          comprehensive solutions that meet business needs while maintaining
          excellent user experience.
        </motion.p>
      </div>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <Separator />
      </motion.div>
    </div>
  );
}
