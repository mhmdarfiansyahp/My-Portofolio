"use client";

import React from "react";
import { motion } from "framer-motion";
import { INFO_LIST } from "../../data/aboutData";

const InfoCards = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INFO_LIST.map(({ id, icon: Icon, title, description, isPrimary, badgeText }, index) => (
                <motion.li
                    key={id}
                    className={`relative group rounded-2xl p-6 sm:p-7 transition-all duration-300 ${isPrimary
                            ? "border border-blue-500/50 bg-blue-950/10 dark:bg-blue-950/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-400 hover:-translate-y-1"
                            : "border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/60 backdrop-blur-md hover:bg-white dark:hover:bg-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-1"
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    {/* Badge Primary jika isPrimary === true */}
                    {isPrimary && (
                        <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                            {badgeText || "Primary"}
                        </span>
                    )}

                    <div className="p-3.5 rounded-xl w-fit bg-neutral-100 dark:bg-neutral-800/80 group-hover:scale-110 transition-transform duration-300 mb-4 text-blue-600 dark:text-blue-400">
                        <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                        {title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {description}
                    </p>
                </motion.li>
            ))}
        </ul>
    );
};

export default InfoCards;