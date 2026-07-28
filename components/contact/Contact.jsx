"use client";

import React from "react";
import contacts from "../../data/ContactData";
import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-[8%] lg:px-[12%] py-20 scroll-mt-20"
    >
      {/* Header Section */}
      <ContactHeader />

      {/* Contact Cards Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.id} contact={contact} index={index} />
        ))}
      </div>
    </section>
  );
}