"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../data/ProjectsData";

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [openId, setOpenId] = useState(null);

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
        Featured{" "}
        <span className="text-blue-500">
          Projects
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="
          text-center
          text-gray-600 dark:text-gray-400
          text-base sm:text-lg
          mt-4 max-w-2xl mx-auto
          leading-7
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        A collection of projects and real-world applications I’ve built and
        contributed to throughout my development journey.
      </motion.p>

      {/* Projects Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="
              group overflow-hidden
              rounded-2xl
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              backdrop-blur-sm
              hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="
                  object-cover w-full h-full
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Project Title */}
              <h3
                className="
                  text-xl font-semibold
                  text-black dark:text-white
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <ul
                className="
                  list-disc list-outside pl-5
                  mt-4 space-y-2
                  text-gray-700 dark:text-gray-300
                  leading-7
                "
              >
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
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
                    {t}
                  </span>
                ))}
              </div>

              {/* Github Button */}
              {project.github && (
                <div className="relative inline-block mt-6 z-20">
                  {Array.isArray(project.github) ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenId(openId === project.id ? null : project.id)
                        }
                        className="
                          flex items-center gap-2
                          px-5 py-2 rounded-lg
                          bg-blue-500 text-white
                          hover:bg-blue-600
                          transition-colors duration-300
                        "
                      >
                        View Code

                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openId === project.id
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      {openId === project.id && (
                        <div
                          className="
                            absolute left-0 bottom-full mb-2
                            w-44 overflow-hidden
                            rounded-xl
                            border border-black/10 dark:border-white/10
                            bg-white dark:bg-zinc-900
                            shadow-lg
                          "
                        >
                          {project.github.map((repo, idx) => (
                            <a
                              key={idx}
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                block px-4 py-3
                                text-sm
                                text-gray-700 dark:text-gray-200
                                hover:bg-blue-500/10
                                transition-colors duration-200
                              "
                            >
                              {repo.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center
                        px-5 py-2 rounded-lg
                        bg-blue-500 text-white
                        hover:bg-blue-600
                        transition-colors duration-300
                      "
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
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
            className="
              px-6 py-3 rounded-xl
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              text-black dark:text-white
              hover:border-blue-500/30
              hover:text-blue-500
              transition-all duration-300
            "
          >
            {isAllVisible ? "Load Less" : "Load More"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Project;