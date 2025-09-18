import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    id: 1,
    title: "GitHub",
    description: "View my repositories and open source contributions",
    icon: Github,
    color: "text-cyan-400",
    link: "https://github.com/mhmdarfiansyahp",
  },
  {
    id: 2,
    title: "LinkedIn",
    description: "Connect with me professionally",
    icon: Linkedin,
    color: "text-blue-400",
    link: "https://www.linkedin.com/in/mohamad-arfiansyah-putra/",
  },
  {
    id: 3,
    title: "Email",
    description: "Send me an email",
    icon: Mail,
    color: "text-pink-400",
    link: "mailto:mhmdarfiansyahp@gmail.com",
  },
  {
    id: 4,
    title: "WhatsApp",
    description: "Send me a message",
    icon: MessageCircle,
    color: "text-green-400",
    link: "https://wa.me/6287880614046",
  },
];

export default contacts;
