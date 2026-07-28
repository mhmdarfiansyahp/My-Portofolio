"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutBio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6 font-Ovo text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed"
    >
      <p>
        I am a <strong className="text-neutral-900 dark:text-white font-semibold">Fullstack & Backend Developer</strong> with hands-on experience developing enterprise applications, database migrations, and scalable APIs.
      </p>

      {/* Focused Tech Badge Box */}
      <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm space-y-2">
        <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
          🎯 Primary Stack & Focus
        </p>
        <p className="text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200">
          Modern Web & Backend Architecture using <span className="text-blue-600 dark:text-blue-400 font-semibold">Next.js</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">Go</span>, <span className="text-blue-600 dark:text-blue-400 font-semibold">Laravel</span>, and <span className="text-blue-600 dark:text-blue-400 font-semibold">PostgreSQL</span>.
        </p>
      </div>

      <p>
        Having worked on critical systems at organizations like BPJS Kesehatan and PT Astra Honda Motor, I specialize in database migration (SQL Server to PostgreSQL), REST API development, and legacy system refactoring.
      </p>

      <p>
        I thrive on solving complex backend challenges, optimizing database query performance, and continually refining my skills in cloud infrastructure.
      </p>
    </motion.div>
  );
};

export default AboutBio;