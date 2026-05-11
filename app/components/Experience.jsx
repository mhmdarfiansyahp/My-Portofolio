"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* Title */}
      <motion.h2
        className="
          text-center
          text-4xl sm:text-5xl
          font-Ovo
          text-black dark:text-white
        "
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experience &{" "}
        <span className="text-blue-500">
          Education
        </span>
      </motion.h2>

      {/* Tabs */}
      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveTab("experience")}
          className={`
            px-6 py-2 rounded-full
            border transition-all duration-300
            ${
              activeTab === "experience"
                ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                : "border-black/10 dark:border-white/10 text-black dark:text-white hover:border-blue-500/40 hover:text-blue-500"
            }
          `}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`
            px-6 py-2 rounded-full
            border transition-all duration-300
            ${
              activeTab === "education"
                ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                : "border-black/10 dark:border-white/10 text-black dark:text-white hover:border-blue-500/40 hover:text-blue-500"
            }
          `}
        >
          Education
        </button>
      </motion.div>

      {/* Content */}
      <div className="mt-12 flex flex-col gap-6">
        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <>
            {/* Experience 1 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                p-6 rounded-2xl
                border border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                backdrop-blur-sm
                hover:border-blue-500/30
                hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Web Developer Intern
              </h3>

              <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                Jan 2025 – Jul 2025
              </p>

              <p className="mt-1 text-gray-800 dark:text-gray-200 font-semibold">
                PT. Global Service Indonesia
              </p>

              <ul
                className="
                  list-disc list-inside
                  mt-4 space-y-2
                  text-gray-700 dark:text-gray-300
                  leading-7
                "
              >
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

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Laravel", "PHP", "MySQL", "Vue.js"].map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1 text-sm rounded-full
                      bg-blue-500/10
                      text-blue-700 dark:text-blue-300
                      border border-blue-500/20
                      hover:bg-blue-500/20
                      transition-colors duration-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="
                p-6 rounded-2xl
                border border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                backdrop-blur-sm
                hover:border-blue-500/30
                hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                Website Developer
              </h3>

              <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
                Apr 2024 – Dec 2024
              </p>

              <p className="mt-1 text-gray-800 dark:text-gray-200 font-semibold">
                PT. Astra Honda Motor
              </p>

              <ul
                className="
                  list-disc list-outside pl-5
                  mt-4 space-y-2
                  text-gray-700 dark:text-gray-300
                  leading-7
                "
              >
                <li>
                  Migrated the Bill of Materials (BOM) Accessories application
                  to Java Spring Boot, enabling the creation, activation, and
                  integration of accessory data based on plant, motor type, and
                  color.
                </li>

                <li>
                  Migrated the Download Unit Motor application to Java Spring
                  Boot, enabling efficient retrieval and export of motor unit
                  data to Excel and XML.
                </li>
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Spring Boot", "Java", "Oracle"].map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1 text-sm rounded-full
                      bg-blue-500/10
                      text-blue-700 dark:text-blue-300
                      border border-blue-500/20
                      hover:bg-blue-500/20
                      transition-colors duration-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              p-6 rounded-2xl
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              backdrop-blur-sm
              hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Associate Degree (D3) in Information Management
            </h3>

            <p className="mt-2 text-blue-600 dark:text-blue-400 font-medium">
              Astra Polytechnic • 2022 – 2025
            </p>

            <ul
              className="
                list-disc list-inside
                mt-4 space-y-2
                text-gray-700 dark:text-gray-300
                leading-7
              "
            >
              <li>
                Educated in an industry-driven environment tailored to Astra
                Group&apos;s professional standards.
              </li>
            </ul>

            <span
              className="
                inline-block mt-5
                px-4 py-1 text-sm rounded-full
                bg-blue-500/10
                text-blue-700 dark:text-blue-300
                border border-blue-500/20
              "
            >
              GPA: 3.31 / 4.00
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;