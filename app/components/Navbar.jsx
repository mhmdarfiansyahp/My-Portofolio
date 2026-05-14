"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme state
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-5 lg:px-8 xl:px-[8%] py-4
        transition-all duration-300
        ${isScroll
          ? "bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <a
        href="#top"
        className="
          text-xl sm:text-2xl
          font-semibold tracking-wide
          text-black dark:text-white
        "
      >
        Arfiansyah
      </a>

      {/* Desktop Menu */}
      <ul
        className="
          hidden md:flex items-center gap-8
          px-10 py-3 rounded-full
          bg-white/70 dark:bg-white/5
          backdrop-blur-md
          border border-black/5 dark:border-white/10
          text-black dark:text-white
        "
      >
        <li>
          <a className="font-Ovo hover:text-gray-500 transition" href="#top">
            Home
          </a>
        </li>

        <li>
          <a className="font-Ovo hover:text-gray-500 transition" href="#about">
            About
          </a>
        </li>

        <li>
          <a
            className="font-Ovo hover:text-gray-500 transition"
            href="#experience"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            className="font-Ovo hover:text-gray-500 transition"
            href="#project"
          >
            Project
          </a>
        </li>

        <li>
          <a
            className="font-Ovo hover:text-gray-500 transition"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            p-2 rounded-full
            border border-black/10 dark:border-white/10
            bg-white/70 dark:bg-white/5
            backdrop-blur-md
            hover:scale-105
            transition-all duration-300
            text-black dark:text-white
          "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden p-2 rounded-lg
            border border-black/10 dark:border-white/10
            bg-white/70 dark:bg-white/5
            backdrop-blur-md
            text-black dark:text-white
          "
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-64 z-50
          flex flex-col gap-6
          px-8 py-20
          transition-transform duration-300
          bg-white dark:bg-[#0f0f0f]
          text-black dark:text-white
          border-l border-black/10 dark:border-white/10
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <a
          href="#top"
          onClick={() => setIsMenuOpen(false)}
          className="font-Ovo text-lg"
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className="font-Ovo text-lg"
        >
          About
        </a>

        <a
          href="#experience"
          onClick={() => setIsMenuOpen(false)}
          className="font-Ovo text-lg"
        >
          Experience
        </a>

        <a
          href="#project"
          onClick={() => setIsMenuOpen(false)}
          className="font-Ovo text-lg"
        >
          Project
        </a>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="font-Ovo text-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
