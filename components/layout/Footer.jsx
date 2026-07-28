"use client";

import { cn } from "@/src/lib/utils";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const Footer = () => {
  const socialBtnClass = cn(
    "p-3 rounded-xl border transition-all duration-300 backdrop-blur-sm",
    "border-black/10 dark:border-white/10",
    "bg-black/5 dark:bg-white/5",
    "text-gray-700 dark:text-gray-300",
    "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/10"
  );

  return (
    <footer className="w-full mt-20 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-350 mx-auto px-[5%] sm:px-[8%] lg:px-[10%] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black dark:text-white">
            M. Arfiansyah Putra
          </span>
          . All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Github */}
          <a
            href="https://github.com/mhmdarfiansyahp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={socialBtnClass}
          >
            <FaGithub className="w-5 h-5" />
          </a>

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/mohamad-arfiansyah-putra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={socialBtnClass}
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:mhmdarfiansyahp@gmail.com"
            aria-label="Email"
            className={socialBtnClass}
          >
            <HiEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;