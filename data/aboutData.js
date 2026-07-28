// UI Icons from Heroicons v2 (hi2)
import {
    HiCommandLine,
    HiComputerDesktop,
    HiServerStack
} from "react-icons/hi2";

// Database Icons from Heroicons v1 (hi)
import { HiDatabase } from "react-icons/hi";

// Brand Logos
import { VscVscode } from "react-icons/vsc";
import {
    SiGit,
    SiFigma,
    SiGooglecloud,
    SiDbeaver,
    SiDocker,
} from "react-icons/si";

export const INFO_LIST = [
    {
        id: "frontend",
        icon: HiComputerDesktop,
        title: "Frontend Architecture",
        description: "Next.js, React.js, Vue.js, Tailwind CSS",
        isPrimary: true,
        badgeText: "Core Stack",
    },
    {
        id: "backend",
        icon: HiServerStack,
        title: "Backend & APIs",
        description: "Go (Gin), Java Spring Boot, Laravel, .NET Framework",
        isPrimary: true,
        badgeText: "Core Stack",
    },
    {
        id: "languages",
        icon: HiCommandLine,
        title: "Languages",
        description: "Go, PHP, Java, JavaScript, TypeScript, C#",
    },
    {
        id: "databases",
        icon: HiDatabase,
        title: "Databases & Tools",
        description: "PostgreSQL, SQL Server, MySQL, Docker, GCP",
    },
];

export const TOOLS_LIST = [
    { id: "vscode", name: "VS Code", icon: VscVscode },
    { id: "git", name: "Git", icon: SiGit },
    { id: "docker", name: "Docker", icon: SiDocker },
    { id: "dbeaver", name: "DBeaver", icon: SiDbeaver },
    { id: "figma", name: "Figma", icon: SiFigma },
    // { id: "gcp", name: "GCP", icon: SiGooglecloud },
];