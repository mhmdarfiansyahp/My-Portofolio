"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-darkTheme text-gray-300 border-t border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-[12%] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">M. Arfiansyah Putra</span>. 
          All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-5">
          <a
            href="https://github.com/mhmdarfiansyahp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-lightHover hover:text-black transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-arfiansyah-putra/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-lightHover hover:text-black transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:mhmdarfiansyahp@gmail.com"
            className="p-2 rounded-full bg-gray-800 hover:bg-lightHover hover:text-black transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
