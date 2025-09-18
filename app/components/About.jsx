"use client";
import Image from "next/image";
import { infoList, toolsData } from "@/public/assets/assets";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Bagi 2 kolom */}
      <div className="flex flex-col lg:flex-row items-start gap-16 my-10">
        {/* Kiri: Teks */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="max-w-2xl font-Ovo">
            Passionate about creating impactful digital solutions,
            I enjoy transforming complex ideas into applications that are both scalable and intuitive.
            My experience in industry projects has strengthened my technical expertise and adaptability,
            enabling me to align technology with real business needs while keeping user experience at the center.
            <br />
            <br />
            Driven by curiosity and a growth mindset, I continuously refine my skills and explore new technologies to stay ahead in the evolving tech landscape. 
            I actively seek opportunities to learn from challenges and embrace innovative approaches, believing that adaptability is key to long-term success. 
            I also value fostering strong collaboration and clear communication within teams, 
            as I am convinced that these are essential for building solutions that are not only effective but also truly make a positive impact on users and organizations.
          </p>
        </motion.div>

        {/* Kanan: List */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                  hover:-translate-y-1 duration-500 hover:shadow-white"
                style={{ background: "rgba(255, 255, 255, 0.05)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="mt-3"
                />
                <h3 className="my-4 font-semibold text-white">{title}</h3>
                <p className="text-white text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>

          <motion.h4
            className="flex items-center gap-3 sm:gap-5 mt-8 mb-4 font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Tools I use
          </motion.h4>

          <ul className="flex flex-wrap gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image src={tool || null} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
