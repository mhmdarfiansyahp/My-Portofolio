"use client";

import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/src/lib/utils";

const GithubDropdown = ({ project, isOpen, onToggle }) => {
    if (!project.github) return null;

    const isMultiple = Array.isArray(project.github);

    // Style tombol utama menggunakan cn agar lebih fleksibel
    const buttonStyle = cn(
        "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl",
        "bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm",
        "shadow-[0_2px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)]",
        "transition-all duration-300 w-full sm:w-auto cursor-pointer"
    );

    return (
        <div className="relative inline-block w-full sm:w-auto z-20">
            {isMultiple ? (
                <>
                    <button onClick={onToggle} className={buttonStyle}>
                        <FaGithub className="w-4 h-4" />
                        <span>View Code</span>
                        <HiChevronDown
                            className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                isOpen ? "rotate-180" : "rotate-0"
                            )}
                        />
                    </button>

                    {isOpen && (
                        <div
                            className={cn(
                                "absolute left-0 bottom-full mb-2 w-48 overflow-hidden rounded-xl z-30",
                                "border border-black/10 dark:border-white/10",
                                "bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-2xl"
                            )}
                        >
                            {project.github.map((repo, idx) => (
                                <a
                                    key={idx}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    <FaGithub className="w-3.5 h-3.5 opacity-70" />
                                    {repo.label}
                                </a>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyle}
                >
                    <FaGithub className="w-4 h-4" />
                    View Code
                </a>
            )}
        </div>
    );
};

export default GithubDropdown;