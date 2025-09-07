"use client";
import React, { useState } from "react";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">
                Experience & Education
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-6 mt-8">
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`px-6 py-2 rounded-full border border-gray-400 duration-300 
            ${activeTab === "experience" ? "bg-darkTheme text-white" : "hover:bg-lightHover"}
          `}
                >
                    Experience
                </button>
                <button
                    onClick={() => setActiveTab("education")}
                    className={`px-6 py-2 rounded-full border border-gray-400 duration-300 
            ${activeTab === "education" ? "bg-darkTheme text-white" : "hover:bg-lightHover"}
          `}
                >
                    Education
                </button>
            </div>

            {/* Card Content */}
            <div className="mt-10 flex flex-col gap-6">
                {activeTab === "experience" && (
                    <>
                        <div className="p-6 border rounded-xl shadow-md hover:shadow-black duration-300">
                            {/* Title */}
                            <h3 className="font-semibold text-lg text-darkTheme">
                                Web Developer Intern
                            </h3>
                            {/* Duration */}
                            <p className="text-sm text-red-500 font-medium">
                                Jan 2025 – Jul 2025
                            </p>
                            {/* Company */}
                            <p className="text-sm font-semibold text-gray-800 mt-1">
                                PT. Global Service Indonesia
                            </p>

                            {/* Description */}
                            <ul className="list-disc list-inside mt-3 text-gray-700 text-sm space-y-1">
                                <li>
                                    Developed a Company Profile web application using Vue.js to support the
                                    digitalization of corporate information.
                                </li>
                                <li>
                                    Built an Asset Management System with Laravel and MySQL to improve data
                                    integration, asset tracking, and digital goods issuance.
                                </li>
                            </ul>

                            {/* Badges */}
                            <div className="flex gap-2 flex-wrap mt-4">
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                                transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    Laravel
                                </span>
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    PHP
                                </span>
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                                transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    MySQL
                                </span>
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                                transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    Vue.Js
                                </span>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl shadow-md hover:shadow-black duration-300">
                            {/* Title */}
                            <h3 className="font-semibold text-lg text-darkTheme">
                                Website Developer
                            </h3>
                            {/* Duration */}
                            <p className="text-sm text-red-500 font-medium">
                                Apr 2024 - Des 2024
                            </p>
                            {/* Company */}
                            <p className="text-sm font-semibold text-gray-800 mt-1">
                                PT. Astra Honda Motor
                            </p>

                            {/* Description */}
                            <ul className="list-disc list-inside mt-3 text-gray-700 text-sm space-y-1">
                                <li>
                                    Migrated the Bill of Materials (BOM) Accessories application to Java Spring Boot,
                                    enabling the creation, activation, and integration of accessory data based on
                                    plant, motor type, and color. This migration improved system stability,
                                    streamlined voucher generation during shipping and booking processes,
                                    and ensured accurate mapping between BOM headers and accessory parts.
                                </li>
                                <li>
                                    Migrated the Download Unit Motor application to Java Spring Boot, enabling
                                    efficient retrieval and export of motor unit data to Excel and XML. This
                                    migration improved system reliability, supported offline PDT scanning, and
                                    provided faster access to production, status, and inspection data.
                                </li>
                            </ul>

                            {/* Badges */}
                            <div className="flex gap-2 flex-wrap mt-4">
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                                transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    Spring Boot
                                </span>
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    Java
                                </span>
                                <span className="px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                                transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                                    Oracle
                                </span>
                            </div>
                        </div>
                    </>
                )}


                {activeTab === "education" && (
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-black duration-300">
                        <h3 className="font-semibold text-xl">
                            Associate Degree (D3) in Information Management
                        </h3>
                        <p className="text-lg text-gray-600">
                            Astra Polytechnic • 2022 – 2025
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-700 text-base space-y-1">
                            <li>Educated in an industry-driven environment tailored to Astra Group's professional standards and practical demands.</li>
                        </ul>
                        {/* Badge */}
                        <span className="mt-4 inline-block px-4 py-1 text-sm bg-darkTheme text-white rounded-full 
                        transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                            GPA: 3.31 / 4.00
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
