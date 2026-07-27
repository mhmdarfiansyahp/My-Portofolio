"use client";

import React from "react";
import { X } from "lucide-react";
import { navLinks } from "./navLinks";

const MobileDrawer = ({ isOpen, onClose, activeSection }) => {
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 z-50
          flex flex-col gap-6 px-8 py-10
          transition-transform duration-300 ease-in-out md:hidden
          bg-white/95 dark:bg-darkTheme/95 backdrop-blur-2xl
          text-neutral-900 dark:text-white
          border-l border-neutral-200 dark:border-neutral-800
          shadow-2xl
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-lg font-semibold tracking-tight">Navigation</span>
          <button
            aria-label="Close Menu"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`
                  px-4 py-3 rounded-xl text-base font-medium transition-all
                  ${
                    isActive
                      ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white font-semibold"
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;