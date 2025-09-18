"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; 
import projects from "../data/ProjectsData";

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [openId, setOpenId] = useState(null);

  const handleLoadMore = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 4);
    } else {
      setVisibleCount(2); // Load Less
    }
  };

  const isAllVisible = visibleCount >= projects.length;

  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-6">Projects</h2>
      <p className="text-center text-lg mt-2">
        A showcase of my recent creations and contributions
      </p>

      {/* Grid Project */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            className="relative border border-gray-400 rounded-xl cursor-pointer 
                       hover:-translate-y-1 duration-300 hover:shadow-white overflow-visible"
            style={{
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {/* Image */}
            <div className="w-full relative rounded-t-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-xl text-white mt-3">
                {project.title}
              </h3>

              <ul className="list-disc list-outside pl-5 mt-2 text-gray-300 text-base space-y-1">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              <div className="flex gap-2 flex-wrap mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-sm bg-lightHover text-black rounded-full 
                               transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ==== GITHUB BUTTON ==== */}
              {project.github && (
                <div className="relative inline-block mt-4 z-50">
                  {Array.isArray(project.github) ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenId(openId === project.id ? null : project.id)
                        }
                        className="flex items-center gap-2 px-5 py-2 bg-darkHover text-white rounded-lg 
                                   transition-colors duration-300"
                      >
                        View Code
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openId === project.id ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {openId === project.id && (
  <div className="absolute left-0 bottom-full mb-2 w-40 bg-white text-black rounded-lg shadow-lg z-50">
    {project.github.map((repo, idx) => (
      <a
        key={idx}
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 hover:bg-gray-200 first:rounded-t-lg last:rounded-b-lg"
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
                      className="inline-block px-5 py-2 bg-darkHover text-white rounded-lg 
                                 transition-colors duration-300"
                    >
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Load Less Button */}
      {projects.length > 2 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-darkHover border border-gray-400 text-white rounded-lg 
                       hover:bg-darkTheme transition-colors duration-300"
          >
            {isAllVisible ? "Load Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
