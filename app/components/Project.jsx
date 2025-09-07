"use client";
import React from "react";
import Image from "next/image";
import projects from "../data/ProjectsData";

const Project = () => {
  return (
    <div id="project" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo mb-6">Projects</h2>

      <p className="text-center text-lg mt-2  ">
        A showcase of my recent creations and contributions
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[800px] overflow-y-scroll pr-2">
        {projects.map((project) => (
          <div key={project.id} className="p-6 border rounded-xl shadow-md">
            {/* Image */}
            <div className="w-full h-56 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title & Info */}
            <div>
              <h3 className="font-semibold text-lg text-darkTheme">
                {project.title}
              </h3>
              <p className="text-sm text-red-500 font-medium">
                {project.duration}
              </p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                {project.company}
              </p>
            </div>

            {/* Description */}
            <ul className="list-disc list-inside mt-1 text-gray-700 text-sm space-y-1">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
