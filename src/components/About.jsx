import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Next.js", "Node.js", "Laravel", "WordPress"]
  return (
    <section id="about" className="py-12 bg-white dark:bg-gray-700 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-white max-w-3xl mx-auto">
            I’m a Fullstack Web Developer passionate about creating interactive
            and responsive applications. I love sharing my knowledge with the dev
            community.
          </p>
          <div className="mt-4 w-16 h-1 mx-auto bg-teal-500 rounded"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Get to know me!
            </h3>
            <p className="text-gray-600 dark:text-white leading-relaxed">
              I'm a Fullstack Focused Web Developer building and managing the
              Front-end and Back-end of Websites and Web Applications that lead to the
              success of the overall product. Check out some of my work in the
              Projects section.
            </p>
            <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my{" "}
              <a
                href="https://www.linkedin.com/in/masaliou224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 underline hover:text-teal-600"
              >
                Linkedin
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/Masaliou224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 underline hover:text-teal-600"
              >
                Github
              </a>{" "}
              where I post useful content related to Web Development and
              Programming.
            </p>
            <p className="text-gray-600 dark:text-white leading-relaxed mt-4">
              I'm open to Job opportunities where I can contribute, learn, and
              grow.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <h2>My Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 rounded text-gray-800 shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;