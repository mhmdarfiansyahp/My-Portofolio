import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { assets } from "@/public/assets/assets";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  // 🔹 Theme toggle
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark"); // default dark
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500
          ${
            isScroll
              ? "bg-transparent backdrop-blur-md shadow-none" // 🔹 Transparan ketika scroll
              : "bg-white dark:bg-darkTheme shadow-sm" // 🔹 Solid ketika di atas
          }`}
      >
        {/* Logo */}
        <a href="" className="w-28 cursor-pointer mr-14 font-bold">
          Arfiansyah
        </a>

        {/* Menu di kanan */}
        <div className="flex items-center gap-6">
          {/* Toggle Theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 hover:bg-lightHover dark:hover:bg-darkHover transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu utama */}
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:bg-darkTheme"
            }`}
          >
            <li>
              <a className="font-Ovo" href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="font-Ovo" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger menu */}
          {!isMenuOpen && (
            <button
              className="block md:hidden ml-3 p-2 rounded-md hover:bg-lightHover dark:hover:bg-darkHover transition"
              onClick={openMenu}
            >
              <Menu size={24} className="text-gray-900 dark:text-white" />{" "}
              {/* 🔹 ganti dari Image ke icon */}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
              top-0 bottom-0 w-64 z-50 h-screen transition duration-500
              ${
                theme === "dark"
                  ? "bg-darkTheme text-white"
                  : "bg-white text-gray-900"
              }`}
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={closeMenu}
          >
            <X
              size={24}
              className={theme === "dark" ? "text-white" : "text-gray-900"}
            />
            {/* 🔹 pakai icon X dari lucide-react */}
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#project">
              Project
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
