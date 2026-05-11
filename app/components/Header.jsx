"use client";

import { assets } from "@/public/assets/assets";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      className="
        w-11/12 max-w-4xl mx-auto
        min-h-screen
        flex flex-col items-center justify-center
        text-center gap-6
        pt-24
      "
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={assets.profile2}
          alt="Mohamad Arfiansyah Putra"
          width={240}
          height={240}
          className="
            rounded-full w-52 sm:w-60
            shadow-xl
            border border-white/10
          "
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        className="
          text-lg sm:text-2xl
          font-Ovo
          text-gray-700 dark:text-gray-300
        "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm Mohamad Arfiansyah Putra
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        className="
          text-4xl sm:text-6xl lg:text-7xl
          leading-tight
          font-Ovo
          text-black dark:text-white
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Fullstack Web Developer
      </motion.h1>

      {/* Description */}
      <motion.p
        className="
          max-w-2xl
          text-base sm:text-lg
          leading-8
          font-Ovo
          text-gray-600 dark:text-gray-400
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        Passionate about building scalable and user-friendly web applications
        using modern technologies such as React, Next.js, Node.js, Laravel,
        Spring Boot, Golang, and .NET.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        {/* Resume Button */}
        <a
          href="/CV_Mohamad Arfiansyah Putra.pdf"
          download
          className="
            px-8 py-3 rounded-full
            flex items-center gap-2
            bg-black text-white
            dark:bg-white dark:text-black
            hover:scale-105
            transition-all duration-300
            shadow-md
          "
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="
            px-8 py-3 rounded-full
            border border-black/10 dark:border-white/10
            bg-white/70 dark:bg-white/5
            backdrop-blur-md
            text-black dark:text-white
            hover:scale-105
            transition-all duration-300
          "
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
