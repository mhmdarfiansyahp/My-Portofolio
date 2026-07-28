import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubDropdown from "./GithubDropdown";
import { cn } from "@/src/lib/utils";

const ProjectCard = ({ project, index, openId, onToggleDropdown, onSelectProject }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className={cn("group overflow-hidden rounded-2xl",
                "border border-black/10 dark:border-white/10",
                "bg-black/2 dark:bg-white/3 backdrop-blur-sm",
                "hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]",
                "transition-all duration-300 flex flex-col justify-between")}>
            <div>
                <div
                    className="overflow-hidden cursor-pointer relative group/img bg-black/5 dark:bg-white/5"
                    onClick={() => onSelectProject(project)}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1280}
                        height={720}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-105"
                    />
                    {/* Badge Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 text-xs font-medium text-white bg-black/60 rounded-full border border-white/20 backdrop-blur-md">
                            Click to preview screenshots
                        </span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-black dark:text-white tracking-tight">
                        {project.title}
                    </h3>

                    <ul className="list-disc list-outside pl-5 mt-4 space-y-2 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {project.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                        ))}
                    </ul>

                    {/* TECH STACK BADGES */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className={cn("px-3 py-1 text-xs rounded-lg font-medium",
                                    "bg-blue-500/10 dark:bg-blue-400/10",
                                    "text-blue-600 dark:text-blue-300",
                                    "border border-blue-500/20 dark:border-blue-400/20")} >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* GITHUB BUTTON */}
            <div className="px-6 pb-6 pt-2">
                <GithubDropdown
                    project={project}
                    isOpen={openId === project.id}
                    onToggle={() => onToggleDropdown(project.id)}
                />
            </div>
        </motion.div >
    );
};

export default ProjectCard;