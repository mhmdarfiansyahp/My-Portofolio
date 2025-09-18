const projects = [
  {
    id: 1,
    title: "Dashboard 5K2S",
    description: [
      "A web platform designed to make it easier for users to view, create, display, and filter data for each student class." +
      "This platform implements features such as histogram graphs to visualize the order of class data. In addition, 5K2S also allows users to enter presentations for each class with radio button options and provides assessment history for each user."
    ],
    image: "/images/Dashboard5K2S.png",
    tech: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com/mhmdarfiansyahp/Dashboard5K2S.git",
  },
  {
    id: 2,
    title: "HeroApp",
    description: [
      "Developed a mobile application for the Heavy Equipment Engineering Study Program to streamline equipment lending and maintenance, enhancing practicum efficiency for students and lecturers."
    ],
    image: "/images/HeroApp.png",
    tech: ["Java", "Android", "PHP", "MySQL"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/Assesswatch-Laravel.git" },
      { label: "Backend", url: "https://github.com/mhmdarfiansyahp/PotekGas-Be.git" }
    ]
  },
  {
    id: 3,
    title: "Internak",
    description: [
      "Developed an Android application with SQL Server integration to automate livestock barn management, including feeding, watering, temperature monitoring, and CCTV supervision."
    ],
    image: "/images/Internak.png",
    tech: ["Java", "Android", "Spring Boot", "SQL Server"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/Internak.git" },
      { label: "Backend", url: "https://github.com/mhmdarfiansyahp/Internak-BE.git" }
    ]
  },
  {
    id: 4,
    title: "PotekGas",
    description: [
      "Developed a web application for medicine purchasing to simplify transactions and sales data management."
    ],
    image: "/images/PotekGas.png",
    tech: ["Java", "Spring Boot", "React.js", "SQL Server"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/Assesswatch-Laravel.git" },
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
    tech: ["Laravel", "JavaScript", "PHP", "MySQL", "ASP.NET", "C#", "SQL Server"],
    github: [
      { label: "Laravel", url: "https://github.com/mhmdarfiansyahp/Assesswatch-Laravel.git" },
      { label: ".NET", url: "https://github.com/mhmdarfiansyahp/Sertifikasi.git" }
    ]
  }
];

export default projects;