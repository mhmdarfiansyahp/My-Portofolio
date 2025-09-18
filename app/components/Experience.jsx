"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Variants untuk animasi card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Judul */}
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>

      {/* Tabs */}
      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-6 py-2 rounded-full border border-gray-400 duration-300
            ${
              activeTab === "experience"
                ? "bg-darkHover text-white"
                : "hover:bg-darkHover hover:text-white"
            }`}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`px-6 py-2 rounded-full border border-gray-400 duration-300
            ${
              activeTab === "education"
                ? "bg-darkHover text-white"
                : "hover:bg-darkHover hover:text-white"
            }`}
        >
          Education
        </button>
      </motion.div>

      {/* Card Content */}
      <div className="mt-10 flex flex-col gap-6">
        {activeTab === "experience" && (
          <>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 border border-gray-400 rounded-xl cursor-pointer 
              hover:-translate-y-1 duration-300 hover:shadow-white"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <h3 className="font-semibold text-xl text-white">
                Web Developer Intern
              </h3>
              <p className="text-lg text-white font-medium">Jan 2025 – Jul 2025</p>
              <p className="text-lg font-semibold text-gray-200 mt-1">
                PT. Global Service Indonesia
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-300 text-base space-y-1">
                <li>
                  Developed a Company Profile web application using Vue.js to
                  support the digitalization of corporate information.
                </li>
                <li>
                  Built an Asset Management System with Laravel and MySQL to
                  improve data integration, asset tracking, and digital goods
                  issuance.
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap mt-4">
                {["Laravel", "PHP", "MySQL", "Vue.js"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm bg-lightHover text-black rounded-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 border border-gray-400 rounded-xl cursor-pointer 
              hover:-translate-y-1 duration-300 hover:shadow-white"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <h3 className="font-semibold text-xl text-white">
                Website Developer
              </h3>
              <p className="text-lg text-white font-medium">Apr 2024 - Des 2024</p>
              <p className="text-lg font-semibold text-gray-200 mt-1">
                PT. Astra Honda Motor
              </p>
              <ul className="list-disc list-outside pl-5 mt-3 text-gray-300 text-base space-y-2">
                <li>
                  Migrated the Bill of Materials (BOM) Accessories application to
                  Java Spring Boot, enabling the creation, activation, and
                  integration of accessory data based on plant, motor type, and
                  color.
                </li>
                <li>
                  Migrated the Download Unit Motor application to Java Spring Boot,
                  enabling efficient retrieval and export of motor unit data to
                  Excel and XML.
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap mt-4">
                {["Spring Boot", "Java", "Oracle"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm bg-lightHover text-black rounded-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {activeTab === "education" && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 border border-gray-400 rounded-xl cursor-pointer 
            hover:-translate-y-1 duration-300 hover:shadow-white"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <h3 className="font-semibold text-xl text-white">
              Associate Degree (D3) in Information Management
            </h3>
            <p className="text-lg text-gray-300">
              Astra Polytechnic • 2022 – 2025
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 text-base space-y-1">
              <li>
                Educated in an industry-driven environment tailored to Astra
                Group's professional standards.
              </li>
            </ul>
            <span className="mt-4 inline-block px-4 py-1 text-sm bg-lightHover text-black rounded-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
              GPA: 3.31 / 4.00
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
