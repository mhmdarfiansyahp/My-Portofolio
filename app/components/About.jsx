import Image from "next/image";
import { infoList, toolsData } from "@/public/assets/assets";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      {/* Bagi 2 kolom: teks di kiri, list di kanan */}
      <div className="flex flex-col lg:flex-row items-start gap-16 my-10">

        {/* Kiri: Teks */}
        <div className="flex-1">
          <p className="max-w-2xl font-Ovo">
            I specialize in breaking down complex problems and crafting
            solutions that truly align with user and client needs. With
            hands-on experience in fast-paced, industry-driven environments,
            I've sharpened my analytical thinking and can develop responsive,
            intuitive web applications that simply work.
            <br />
            <br />
            I thrive on uncovering what clients really need—not just what they
            ask for—while staying in tune with current trends and technologies.
            I enjoy refining every detail until a solution feels just right.
            Along the way, I continuously improve my communication and
            collaboration skills, effectively bridging the gap between
            technical discussions and real-world needs to bring ideas to life.
          </p>
        </div>

        {/* Kanan: List */}
        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 
                duration-500 hover:shadow-black"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="flex items-center gap-3 sm:gap-5 mt-8 mb-4 font-semibold text-gray-700">
            Tools I use
          </h4>

          <ul className="flex flex-wrap gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400
                rounded-lg cursor-pointer hover:-translate-y-1
                duration-500">
                <Image src={tool || null} alt="Tool" className="w-5 sm:w-7" />
               </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
