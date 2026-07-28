"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { cn } from "../../src/lib/utils"; // 👈 Adjust path according to your project structure

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function ContactCard({ contact, index }) {
    const Icon = contact.icon;

    return (
        <motion.a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            className={cn(
                "group relative flex flex-col items-center justify-between overflow-hidden",
                "rounded-2xl border border-black/10 p-8 text-center backdrop-blur-md dark:border-white/10",
                "bg-black/5 dark:bg-white/5",
                "hover:border-blue-500/40 hover:bg-black/10 dark:hover:bg-white/10",
                "hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]",
                "transition-colors duration-300"
            )}
        >
            {/* Top Right External Link Arrow */}
            <div
                className={cn(
                    "absolute top-4 right-4 text-gray-400 transition-transform duration-200",
                    "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                )}
            >
                <HiArrowUpRight size={20} />
            </div>

            {/* Content Container */}
            <div className="w-full">
                {/* Icon Wrapper */}
                <div
                    className={cn(
                        "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl",
                        "border border-blue-500/20 bg-blue-500/10",
                        "transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20"
                    )}
                >
                    <Icon size={30} className={cn("text-blue-500", contact.color)} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-black dark:text-white">
                    {contact.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                    {contact.description}
                </p>
            </div>

            {/* Action Text */}
            <span
                className={cn(
                    "mt-6 flex items-center justify-center gap-1 text-sm font-semibold text-blue-500",
                    "transition-all duration-300 group-hover:translate-x-1"
                )}
            >
                {contact.ctaText || "Connect"} &rarr;
            </span>
        </motion.a>
    );
}