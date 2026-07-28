"use client";

import { cn } from "@/src/lib/utils";
import React from "react";

const NavLogo = () => {
    return (
        <a
            href="#top"
            className={cn("text-xl sm:text-2xl font-bold tracking-tight",
                "text-neutral-900 dark:text-white",
                "hover:opacity-80 transition-opacity")}>
            Arfiansyah<span className="text-blue-500">.</span>
        </a>
    );
};

export default NavLogo;