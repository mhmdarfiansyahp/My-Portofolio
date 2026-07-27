import React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/src/lib/utils";

const ThemeToggle = ({ theme, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            aria-label="Toggle Theme"
            className={cn("p-2.5 rounded-full",
                "border border-neutral-200 dark:border-neutral-800",
                "bg-white/80 dark:bg-neutral-900/80",
                "backdrop-blur-md",
                "hover:scale-105 active:scale-95",
                "transition-all duration-300",
                "text-neutral-700 dark:text-neutral-300",
                "hover:text-black dark:hover:text-white",
                "shadow-sm cursor-pointer")}>
            {theme === "dark" ? (
                <Sun size={18} className="transition-transform duration-300 hover:rotate-45" />
            ) : (
                <Moon size={18} className="transition-transform duration-300 hover:-rotate-12" />
            )}
        </button>
    );
};

export default ThemeToggle;