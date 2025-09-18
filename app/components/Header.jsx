"use client";
import { assets } from '@/public/assets/assets'
import { Download } from "lucide-react";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
        items-center justify-center gap-4'>
            
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image src={assets.profile2} alt='' className='rounded-full w-64' />
            </motion.div>

            {/* Intro */}
            <motion.h3
                className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                Hi I'm Mohamad Arfiansyah Putra
            </motion.h3>

            {/* Title */}
            <motion.h1
                className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
            >
                Passionate <span className="text-darkHover">Fullstack Developer</span> & Software Engineer.
            </motion.h1>

            {/* Description */}
            <motion.p
                className="max-w-2xl mx-auto font-Ovo text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
            >
                I am a <span className="text-darkHover">Fullstack Developer</span> and Software Engineer with a strong passion for designing and developing scalable web applications.
            </motion.p>

            {/* Button */}
            <motion.div
                className='flex flex-col sm:flex-row items-center mt-4'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1 }}
            >
                <a
                    href="/CV_Mohamad Arfiansyah Putra.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-400 flex items-center gap-2
               transition-all duration-300 hover:bg-darkHover hover:text-white
               hover:shadow-md "
                >
                    <Download className="w-5 h-5" />
                    Get My Resume
                </a>
            </motion.div>
        </div>
    )
}

export default Header
