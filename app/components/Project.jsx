"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/ProjectsData";
import ProjectCard from "./project/ProjectCard";
import ProjectModal from "./project/ProjectModal";

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [openId, setOpenId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleLoadMore = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 4);
    } else {
      setVisibleCount(2);
    }
  };

  const isAllVisible = visibleCount >= projects.length;

  return (
    <section
      id="project"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20"
    >
      {/* TITLE */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-Ovo text-black dark:text-white"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-blue-500">Projects</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        A collection of projects and real-world applications I’ve built and
        contributed to throughout my development journey.
      </motion.p>

      {/* PROJECT GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            openId={openId}
            onToggleDropdown={handleToggleDropdown}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {projects.length > 2 && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:border-blue-500/30 hover:text-blue-500 transition-all duration-300 font-medium"
          >
            {isAllVisible ? "Load Less" : "Load More"}
          </button>
        </motion.div>
      )}

      {/* MODAL PREVIEW */}
      <ProjectModal
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;