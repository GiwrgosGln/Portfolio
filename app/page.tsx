"use client";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: -1000 }}
        transition={{ duration: 1, delay: 7 }}
        className="absolute"
      >
        <Loader />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 8 }}
      >
        <Hero />
      </motion.div>
      <div className="w-screen h-screen"></div>
    </>
  );
}
