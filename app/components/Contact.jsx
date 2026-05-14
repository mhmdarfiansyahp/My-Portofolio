"use client";

import React from "react";
import contacts from "../data/ContactData";
import { motion } from "framer-motion";

function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
      },
    }),
  };

  return (
    <section
      id="contact"
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
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In{" "}
        <span className="text-blue-500">
          Touch
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="
          text-center
          text-gray-600 dark:text-gray-400
          text-base sm:text-lg
          mt-5 max-w-2xl mx-auto
          leading-7
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for collaborations, professional inquiries,
        or networking opportunities.
      </motion.p>

      {/* Contact Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map((c, i) => (
          <motion.a
            key={c.id}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              group
              rounded-2xl
              border border-black/10 dark:border-white/10
              bg-black/5 dark:bg-white/5
              backdrop-blur-sm
              p-8 text-center
              hover:border-blue-500/30
              hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Icon */}
            <div
              className="
                flex items-center justify-center
                w-16 h-16 mx-auto rounded-2xl
                bg-blue-500/10
                border border-blue-500/20
                group-hover:bg-blue-500/20
                transition-all duration-300
              "
            >
              <c.icon
                size={30}
                className="text-blue-500"
              />
            </div>

            {/* Title */}
            <h3
              className="
                mt-5 text-xl font-semibold
                text-black dark:text-white
              "
            >
              {c.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-3 leading-7
                text-gray-600 dark:text-gray-400
              "
            >
              {c.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Contact;