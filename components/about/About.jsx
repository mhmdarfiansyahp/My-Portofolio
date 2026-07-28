"use client";

import React from "react";
import AboutHeader from "./AboutHeader";
import AboutBio from "./AboutBio";
import InfoCards from "./InfoCards";
import ToolsGrid from "./ToolsGrid";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-[5%] sm:px-[8%] lg:px-[10%] py-20 scroll-mt-20 max-w-350 mx-auto"
    >
      <AboutHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-16 items-start">
        {/* Sisi Kiri: Bio */}
        <div className="lg:col-span-5">
          <AboutBio />
        </div>

        {/* Sisi Kanan: Info Cards & Tools */}
        <div className="lg:col-span-7 space-y-10">
          <InfoCards />
          <ToolsGrid />
        </div>
      </div>
    </section>
  );
};

export default About;