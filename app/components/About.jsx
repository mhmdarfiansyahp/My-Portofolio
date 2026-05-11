"use client";
import Image from "next/image";
import { infoList, toolsData } from "@/public/assets/assets";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-Ovo text-black dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start gap-16 mt-14">
        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="max-w-2xl font-Ovo leading-8 text-gray-700 dark:text-gray-300 text-base">
            I'm a Fullstack Web Developer with nearly a year of hands-on
            experience, interested in building web applications that are
            functional, scalable, and easy to use.
            <br />
            <br />
            I work with technologies such as React, Next.js, Vue.js, Node.js,
            Laravel, Spring Boot, Golang, and .NET, along with PostgreSQL and
            MySQL for database management.
            <br />
            <br />I enjoy learning through real-world projects, exploring new
            technologies, and continuously improving my skills while
            collaborating with others to build meaningful digital solutions.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className="
                  rounded-2xl p-6 border border-black/10 dark:border-white/10
                  bg-black/5 dark:bg-white/5 backdrop-blur-sm
                  hover:bg-black/10 dark:hover:bg-white/10
                  hover:border-black/20 dark:hover:border-white/20
                  transition-all duration-300
                "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="mb-5"
                />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <motion.h4
            className="mt-10 mb-5 font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tools I Use
          </motion.h4>

          <ul className="flex flex-wrap gap-4">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="
                  flex items-center justify-center
                  w-14 h-14 rounded-xl
                  border border-black/10 dark:border-white/10
                  bg-white/5 dark:bg-white/5 backdrop-blur-sm
                  hover:bg-white/10 dark:hover:bg-white/10
                  hover:border-black/20 dark:hover:border-white/20
                  hover:scale-105
                  transition-all duration-300
                "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Image
                  src={tool || null}
                  alt="Tool"
                  className="w-6 h-6 object-contain"
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
