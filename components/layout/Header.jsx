"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiEnvelope } from "react-icons/hi2";
import { assets } from "@/public/assets/assets";
import { cn } from "../../src/lib/utils";

const Header = () => {
  return (
    <section
      id="home"
      className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-6 pt-24 pb-12"
    >
      {/* Profile Image with Glow Effect */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glow Accent di Belakang Foto */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 blur-2xl opacity-20 dark:opacity-30 -z-10" />

        <Image
          src={assets.profile2}
          alt="Mohamad Arfiansyah Putra"
          width={240}
          height={240}
          priority
          className="rounded-full w-48 sm:w-56 shadow-2xl border-2 border-white/20 dark:border-white/10 hover:scale-105 transition-transform duration-500 object-cover"
        />
      </motion.div>

      {/* Greeting & Status Badge */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Available for new opportunities
        </div>

        <h3 className="text-lg sm:text-2xl font-Ovo text-neutral-700 dark:text-neutral-300">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-neutral-900 dark:text-white">
            Mohamad Arfiansyah Putra
          </span>
        </h3>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-Ovo font-bold text-neutral-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Fullstack Web Developer
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-base sm:text-lg leading-relaxed font-Ovo text-neutral-600 dark:text-neutral-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        Passionate about building scalable and user-friendly web applications
        using modern technologies such as React, Next.js, Node.js, Laravel,
        Spring Boot, Golang, and .NET.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        {/* Resume Button */}
        <a
          href="/CV_Mohamad Arfiansyah Putra.pdf"
          download
          className={cn(
            "px-8 py-3.5 rounded-full flex items-center gap-2.5 font-medium text-sm sm:text-base",
            "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
            "hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/5"
          )}
        >
          <HiArrowDownTray className="w-5 h-5" />
          Download Resume
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className={cn(
            "px-8 py-3.5 rounded-full flex items-center gap-2.5 font-medium text-sm sm:text-base",
            "border border-neutral-300 dark:border-neutral-800",
            "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md",
            "text-neutral-900 dark:text-white",
            "hover:scale-105 active:scale-95 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
          )}
        >
          <HiEnvelope className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Header;