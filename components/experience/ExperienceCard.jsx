"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../src/lib/utils";

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
                "p-6 sm:p-7 rounded-2xl border backdrop-blur-md transition-all duration-300",
                "border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50",
                "hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]"
            )}
        >
            <div className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1")}>
                <h3 className={cn("text-xl font-semibold text-neutral-900 dark:text-white")}>
                    {exp.role}
                </h3>
                <span className={cn("text-sm font-medium text-blue-600 dark:text-blue-400")}>
                    {exp.period}
                </span>
            </div>

            <p className={cn("mt-1 text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-300")}>
                {exp.company}
            </p>

            <ul className={cn("list-disc list-outside pl-5 mt-4 space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed")}>
                {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>

            {/* Tech Badges */}
            <div className={cn("flex flex-wrap gap-2 mt-5")}>
                {exp.tech.map((tech, i) => (
                    <span
                        key={i}
                        className={cn(
                            "px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-colors duration-300",
                            "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 hover:bg-blue-500/20"
                        )}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceCard;