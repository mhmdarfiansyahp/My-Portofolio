"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
    return (
        <div className="text-center">
            <motion.p
                className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Introduction
            </motion.p>
            <motion.h2
                className="text-4xl sm:text-5xl font-Ovo font-bold text-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>
        </div>
    );
};

export default AboutHeader;