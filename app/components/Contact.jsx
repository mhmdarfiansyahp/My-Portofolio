"use client";
import React from "react";
import contacts from "../data/ContactData";
import { motion } from "framer-motion";

function Contact() {
  const contactCardStyle =
    "relative border border-gray-400 rounded-xl cursor-pointer " +
    "hover:-translate-y-1 duration-300 hover:shadow-white " +
    "text-center p-8";

  // Variants animasi untuk card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h2
        className="text-center text-5xl font-Ovo mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-center text-lg mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for professional inquiries, collaborations, or
        networking.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map((c, i) => (
          <motion.a
            key={c.id}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={contactCardStyle}
            style={{ background: "rgba(255,255,255,0.05)" }}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <c.icon size={40} className={`mx-auto ${c.color}`} />
            <h3 className="mt-4 text-lg font-semibold text-white">
              {c.title}
            </h3>
            <p className="mt-2 text-gray-300">{c.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
