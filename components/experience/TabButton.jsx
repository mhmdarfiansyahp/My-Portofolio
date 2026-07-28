"use client";

import React from "react";
import { cn } from "../../src/lib/utils";

const TabButton = ({ isActive, label, onClick }) => {
    return (
        <button
            role="tab"
            aria-selected={isActive}
            onClick={onClick}
            className={cn(
                "px-6 py-2 rounded-full font-medium border text-sm sm:text-base transition-all duration-300 transform active:scale-95",
                isActive
                    ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:border-blue-500/40 hover:text-blue-500"
            )}
        >
            {label}
        </button>
    );
};

export default TabButton;