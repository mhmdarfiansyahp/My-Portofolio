"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHeader() {
    return (
        <>
            {/* Title */}
            <motion.h2
                className="text-center text-4xl sm:text-5xl font-Ovo text-black dark:text-white tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Get In <span className="text-blue-500">Touch</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
            >
                Have a project idea, a job opportunity, or just want to discuss tech? Pick your preferred channel below and let's talk!
            </motion.p>
        </>
    );
}