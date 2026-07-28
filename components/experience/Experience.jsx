"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experienceData from "../../data/ExperienceData";
import TabButton from "./TabButton";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { cn } from "../../src/lib/utils";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      id="experience"
      className={cn("w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20")}
    >
      {/* Header */}
      <motion.h2
        className={cn("text-center text-4xl sm:text-5xl font-Ovo text-neutral-900 dark:text-white")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience & <span className={cn("text-blue-500")}>Education</span>
      </motion.h2>

      {/* Tabs */}
      <motion.div
        role="tablist"
        className={cn("flex justify-center gap-4 mt-10")}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <TabButton
          label="Experience"
          isActive={activeTab === "experience"}
          onClick={() => setActiveTab("experience")}
        />
        <TabButton
          label="Education"
          isActive={activeTab === "education"}
          onClick={() => setActiveTab("education")}
        />
      </motion.div>

      {/* Content Container dengan AnimatePresence */}
      <div className={cn("mt-12 flex flex-col gap-6")}>
        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div key="exp-list" className={cn("flex flex-col gap-6")}>
              {experienceData.experience.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div key="edu-list" className={cn("flex flex-col gap-6")}>
              {experienceData.education.map((edu, index) => (
                <EducationCard key={edu.id} edu={edu} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;