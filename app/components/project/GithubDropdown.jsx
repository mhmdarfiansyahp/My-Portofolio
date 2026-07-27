"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const GithubDropdown = ({ project, isOpen, onToggle }) => {
    if (!project.github) return null;

    const isMultiple = Array.isArray(project.github);

    // Class gaya tombol biru modern dengan efek glow halus
    const buttonStyle = `
    inline-flex items-center justify-between gap-2 px-5 py-2.5 rounded-xl
    bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm
    shadow-[0_2px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_15px_rgba(37,99,235,0.4)]
    transition-all duration-300 w-full sm:w-auto cursor-pointer
  `;

    return (
        <div className="relative inline-block w-full sm:w-auto z-20">
            {isMultiple ? (
                <>
                    <button onClick={onToggle} className={buttonStyle}>
                        <span>View Code</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>

                    {isOpen && (
                        <div className={cn("absolute left-0 bottom-full mb-2 w-48 overflow-hidden rounded-xl", "border border-black/10 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-2xl")}>
                            {project.github.map((repo, idx) => (
                                <a
                                    key={idx}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
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
                    View Code
                </a>
            )}
        </div>
    );
};

export default GithubDropdown;