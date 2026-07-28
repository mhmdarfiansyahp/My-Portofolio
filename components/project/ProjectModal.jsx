"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiXMark, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { cn } from "@/src/lib/utils";

const ProjectModal = ({ selectedProject, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const screenshots = selectedProject?.screenshots?.length
        ? selectedProject.screenshots
        : selectedProject?.image
            ? [selectedProject.image]
            : [];

    const handleNextSlide = useCallback(() => {
        if (!screenshots.length) return;
        setCurrentSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    }, [screenshots]);

    const handlePrevSlide = useCallback(() => {
        if (!screenshots.length) return;
        setCurrentSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    }, [screenshots]);

    useEffect(() => {
        if (!selectedProject) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrevSlide();
            if (e.key === "ArrowRight") handleNextSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject, onClose, handlePrevSlide, handleNextSlide]);

    return (
        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    className="fixed inset-0 z-100 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    {/* HEADER INFO */}
                    <div
                        className="absolute top-5 left-5 right-5 flex justify-between items-center text-white z-50 pointer-events-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="pointer-events-auto bg-black/60 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                            <h4 className="text-sm font-semibold sm:text-base text-gray-100">
                                {selectedProject.title}
                            </h4>
                        </div>

                        <button
                            onClick={onClose}
                            className="pointer-events-auto p-2 text-white/80 hover:text-white bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-md transition-colors border border-white/10 cursor-pointer"
                            aria-label="Close modal"
                        >
                            <HiXMark className="w-6 h-6" />
                        </button>
                    </div>

                    {/* PREV BUTTON */}
                    {screenshots.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevSlide();
                            }}
                            className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all z-50 border border-white/10 hover:scale-105 cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <HiChevronLeft className="w-7 h-7" />
                        </button>
                    )}

                    {/* NEXT BUTTON */}
                    {screenshots.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNextSlide();
                            }}
                            className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all z-50 border border-white/10 hover:scale-105 cursor-pointer"
                            aria-label="Next slide"
                        >
                            <HiChevronRight className="w-7 h-7" />
                        </button>
                    )}

                    {/* IMAGE SLIDE CONTAINER */}
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative border border-white/15 bg-zinc-950"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {screenshots[currentSlide] && (
                            <Image
                                src={screenshots[currentSlide]}
                                alt={`${selectedProject.title} screenshot ${currentSlide + 1}`}
                                width={1600}
                                height={900}
                                className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain select-none"
                                priority
                            />
                        )}
                    </motion.div>

                    {/* DOTS & COUNTER */}
                    {screenshots.length > 1 && (
                        <div
                            className="absolute bottom-6 flex flex-col items-center gap-2 z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex gap-2.5 px-4 py-2 bg-black/60 rounded-full backdrop-blur-md border border-white/10">
                                {screenshots.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={cn(
                                            "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                                            currentSlide === index
                                                ? "w-8 bg-blue-500"
                                                : "w-2.5 bg-white/40 hover:bg-white/70"
                                        )}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-white/70 font-medium tracking-wider">
                                {currentSlide + 1} / {screenshots.length}
                            </span>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;