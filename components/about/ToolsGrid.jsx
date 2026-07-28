"use client";

import React from "react";
import { motion } from "framer-motion";
import { TOOLS_LIST } from "../../data/aboutData";

const ToolsGrid = () => {
    return (
        <div>
            <motion.h4
                className="mb-5 font-semibold text-neutral-900 dark:text-neutral-200 text-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Tools I Use
            </motion.h4>

            <ul className="flex flex-wrap gap-4">
                {TOOLS_LIST.map(({ id, name, icon: Icon }, index) => (
                    <motion.li
                        key={id}
                        title={name}
                        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-neutral-800 hover:scale-110 active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default ToolsGrid;