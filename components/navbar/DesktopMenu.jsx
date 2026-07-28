import React from "react";
import { navLinks } from "../../data/navLinks";

const DesktopMenu = ({ activeSection }) => {
  return (
    <ul
      className="
        hidden md:flex items-center gap-1
        p-1.5 rounded-full
        bg-white/80 dark:bg-neutral-900/80
        backdrop-blur-md
        border border-neutral-200/80 dark:border-neutral-800
        shadow-sm shadow-black/5
      "
    >
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.replace("#", "");
        return (
          <li key={link.name}>
            <a
              href={link.href}
              className={`
                relative px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300 inline-block
                ${
                  isActive
                    ? "text-white dark:text-black bg-neutral-900 dark:bg-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }
              `}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;