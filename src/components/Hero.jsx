import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-700"
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Saliou.
      </motion.h1>
      <motion.h2
        className="text-2xl text-teal-500 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Fullstack Web Developper.
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-4 dark:text-white text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I'm a web developer, passioned by learning and the news technolgies.
      </motion.p>
      <motion.a
        href="#contact"
        className="mt-8 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Let's Connect
      </motion.a>
    </section>
  );
};

export default Hero;