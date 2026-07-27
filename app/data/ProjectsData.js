const projects = [
  {
    id: 1,
    title: "Certify",
    description: [
      "A competency assessment and certification management platform for vocational institutions.",
      "Handles student assessments, issues QR-verified certificates, and provides public verification via multi-mode QR scanner (camera, image upload, PDF parsing)."
    ],
    image: "/images/certify/dashboard-summary.png",
    screenshots: [
      "/images/certify/dashboard-summary.png",
      "/images/certify/student-assessment.png",
      "/images/certify/competency-status.png",
      "/images/certify/certificate-verification.png",
      "/images/certify/scan-qr-modal.png",
    ],
    tech: ["Laravel 11", "PostgreSQL", "TypeScript", "Tailwind CSS", "React.js"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/Certify-FE.git" },
      { label: "Backend", url: "https://github.com/mhmdarfiansyahp/Assesswatch-Laravel.git" },
    ]
  },
  {
    id: 2,
    title: "PotekGas",
    description: [
      "Developed a web application for medicine purchasing to simplify transactions and sales data management."
    ],
    image: "/images/PotekGas.png",
    screenshots: [
      "/images/PotekGas.png",
    ],
    tech: ["Java", "Spring Boot", "React.js", "SQL Server"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/PotekGas-Fe.git" },
      { label: "Backend", url: "https://github.com/mhmdarfiansyahp/PotekGas-Be.git" }
    ]
  },
  {
    id: 3,
    title: "Internak",
    description: [
      "Developed an Android application integrated with SQL Server.",
      "Automated livestock barn management and monitoring."
    ],
    image: "/assets/images/Internak.png",
    screenshots: [
      "/assets/images/Internak.png",
      "/assets/images/Internak-2.png",
      "/assets/images/Internak-3.png",
    ],
    tech: ["Java", "Android", "Spring Boot", "SQL Server"],
    github: [
      {
        label: "Frontend",
        url: "https://github.com/mhmdarfiansyahp/Internak.git",
      },
      {
        label: "Backend",
        url: "https://github.com/mhmdarfiansyahp/Internak-BE.git",
      },
    ],
  },
  {
    id: 4,
    title: "HeroApp",
    description: [
      "Developed a mobile application for equipment lending and maintenance.",
      "Improved practicum efficiency for students and lecturers."
    ],
    image: "/assets/images/HeroApp.png",
    screenshots: [
      "/assets/images/HeroApp.png",
      "/assets/images/HeroApp-2.png",
      "/assets/images/HeroApp-3.png",
    ],
    tech: ["Java", "Android", "PHP", "MySQL"],
    github: [
      {
        label: "Frontend",
        url: "https://github.com/DaffaAbiyyu29/HEROApp.git",
      },
      {
        label: "Backend",
        url: "https://github.com/salsans/HeroApp_BE.git",
      },
    ],
  },
  {
    id: 5,
    title: "Dashboard 5K2S", // 📌 Proyek Awal
    description: [
      "A web platform designed to make it easier for users to view, create, display, and filter data for each student class.",
      "Implemented histogram charts and assessment history features for each user."
    ],
    image: "/assets/images/Dashboard5K2S.png",
    screenshots: [
      "/assets/images/Dashboard5K2S.png",
      "/assets/images/Dashboard5K2S-2.png",
      "/assets/images/Dashboard5K2S-3.png",
    ],
    tech: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com/mhmdarfiansyahp/Dashboard5K2S.git",
  }
];

export default projects;