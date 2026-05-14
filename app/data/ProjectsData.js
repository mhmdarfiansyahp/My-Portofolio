const projects = [
  {
    id: 1,
    title: "Dashboard 5K2S",

    description: [
      "A web platform designed to make it easier for users to view, create, display, and filter data for each student class.",
      "Implemented histogram charts and assessment history features for each user."
    ],

    image: "/images/Dashboard5K2S.png",

    screenshots: [
      "/images/Dashboard5K2S.png",
      "/images/Dashboard5K2S-2.png",
      "/images/Dashboard5K2S-3.png",
    ],

    tech: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],

    github: "https://github.com/mhmdarfiansyahp/Dashboard5K2S.git",
  },

  {
    id: 2,
    title: "HeroApp",

    description: [
      "Developed a mobile application for equipment lending and maintenance.",
      "Improved practicum efficiency for students and lecturers."
    ],

    image: "/images/HeroApp.png",

    screenshots: [
      "/images/HeroApp.png",
      "/images/HeroApp-2.png",
      "/images/HeroApp-3.png",
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
    id: 3,
    title: "Internak",

    description: [
      "Developed an Android application integrated with SQL Server.",
      "Automated livestock barn management and monitoring."
    ],

    image: "/images/Internak.png",

    screenshots: [
      "/images/Internak.png",
      "/images/Internak-2.png",
      "/images/Internak-3.png",
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
    id: 5,
    title: "Assesswatch",
    description: [
      "A certification platform for managing student competency assessments (Competent, Not Competent, Absent), providing an efficient and structured way to record and present performance data."
    ],
    image: "/images/Assesswatch.png",
    screenshots: [
      "/images/Assesswatch.png",
    ],
    tech: ["Laravel", "JavaScript", "PHP", "MySQL", "ASP.NET", "C#", "SQL Server"],
    github: [
      { label: "Laravel", url: "https://github.com/mhmdarfiansyahp/Assesswatch-Laravel.git" },
      { label: ".NET", url: "https://github.com/mhmdarfiansyahp/Sertifikasi.git" }
    ]
  }
];

export default projects;