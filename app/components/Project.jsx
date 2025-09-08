"use client";
import React, { useState } from "react";
import Image from "next/image";
import projects from "../data/ProjectsData";

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

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
            className="p-6 border rounded-xl shadow-md hover:shadow-black duration-300"
          >
            {/* Image */}
            <div className="w-full h-56 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <div className="mt-3">
              <h3 className="font-semibold text-xl text-darkTheme">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <ul className="list-inside mt-2 text-gray-700 text-lg space-y-1">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                  transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Button */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-darkTheme text-white rounded-lg 
                hover:bg-black transition-colors duration-300"
              >
                View Code
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-darkTheme text-white rounded-lg hover:bg-black transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
