"use client";

import React from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import { cn } from "../../src/lib/utils";

const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            aria-label="Toggle Theme"
            className={cn(
                "p-2.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-sm cursor-pointer",
                "border border-neutral-200 dark:border-neutral-800",
                "bg-white/80 dark:bg-neutral-900/80",
                "text-neutral-700 dark:text-neutral-300",
                "hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700",
                "hover:scale-105 active:scale-95"
            )}
        >
            {theme === "dark" ? (
                <HiSun className="w-5 h-5 transition-transform duration-300 hover:rotate-45 text-amber-400" />
            ) : (
                <HiMoon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12 text-slate-700" />
            )}
        </button>
    );
};

export default ThemeToggle;