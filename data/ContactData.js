import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const contacts = [
  {
    id: 1,
    title: "GitHub",
    description: "Explore my source code, open-source projects, and technical contributions.",
    ctaText: "View Repositories",
    icon: FaGithub,
    color: "text-neutral-800 dark:text-neutral-200",
    link: "https://github.com/mhmdarfiansyahp",
  },
  {
    id: 2,
    title: "LinkedIn",
    description: "Let's connect for career opportunities, recruitment, or professional discussions.",
    ctaText: "Connect on LinkedIn",
    icon: FaLinkedin,
    color: "text-blue-600 dark:text-blue-400",
    link: "https://www.linkedin.com/in/mohamad-arfiansyah-putra/",
  },
  {
    id: 3,
    title: "Direct Email",
    description: "Send project inquiries, job proposals, or technical questions straight to my inbox.",
    ctaText: "Send an Email",
    icon: HiEnvelope,
    color: "text-rose-500 dark:text-rose-400",
    link: "mailto:mhmdarfiansyahp@gmail.com",
  },
  {
    id: 4,
    title: "WhatsApp",
    description: "Quickest way to reach me for direct consultations or urgent project chats.",
    ctaText: "Chat on WhatsApp",
    icon: FaWhatsapp,
    color: "text-emerald-600 dark:text-emerald-400",
    link: "https://wa.me/6287880614046",
  },
];

export default contacts;