"use client";

import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import NavLogo from "./NavLogo";
import DesktopMenu from "./DesktopMenu";
import ThemeToggle from "./ThemeToggle";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "./navLinks";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    // 2. Scrollspy & Scroll Background Handler
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 40);

            if (window.scrollY < 100) {
                setActiveSection("top");
                return;
            }

            const scrollPosition = window.scrollY + 250;

            navLinks.forEach((link) => {
                const sectionId = link.href.replace("#", "");
                const section = document.getElementById(sectionId);

                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 xl:px-[8%] transition-all duration-300 ease-in-out border-b",
                    isScroll
                        ? "py-3 bg-white/80 dark:bg-darkTheme/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-sm"
                        : "py-5 bg-transparent border-transparent"
                )}>
                <NavLogo />

                <DesktopMenu activeSection={activeSection} />

                <div className="flex items-center gap-3">
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                    <button
                        aria-label="Open Menu"
                        className={cn("md:hidden p-2.5 rounded-full",
                            "border border-neutral-200 dark:border-neutral-800",
                            "bg-white/80 dark:bg-neutral-900/80",
                            "backdrop-blur-md",
                            "text-neutral-700 dark:text-neutral-300",
                            "hover:text-black dark:hover:text-white cursor-pointer")}
                        onClick={() => setIsMenuOpen(true)}>
                        <Menu size={20} />
                    </button>
                </div>
            </nav>

            {/* Sidebar Mobile */}
            <MobileDrawer
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                activeSection={activeSection}
            />
        </>
    );
};

export default Navbar;