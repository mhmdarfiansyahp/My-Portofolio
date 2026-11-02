const projects = [
  {
    id: 2,
    title: "Medix — Pharmacy Management System",
    description: [
      "A role-based pharmacy management system with point-of-sale, inventory control, and sales reporting for admin, cashier, and owner.",
      "Supports multi-method payments (cash, QRIS, debit, credit, transfer) with automatic change calculation, digital receipts via email/WhatsApp, low-stock and expiry alerts, and price-snapshot transaction history."
    ],
    image: "/images/medix/dashboard.png",
    screenshots: [
      "/images/medix/dashboard.png",
      "/images/medix/pos-cart.png",
      "/images/medix/payment.png",
      "/images/medix/receipt.png",
      "/images/medix/drug-management.png",
      "/images/medix/notifications-stock.png",
      "/images/medix/reports.png",
    ],
    tech: ["Golang", "Gin", "GORM", "PostgreSQL", "React.js", "TypeScript", "Docker"],
    github: [
      { label: "Frontend", url: "https://github.com/mhmdarfiansyahp/medix-web.git" },
      { label: "Backend", url: "https://github.com/mhmdarfiansyahp/medix-be.git" },
    ]
  },
  {
    id: 1,
    title: "Student Competency Certification Platform",
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
  
  // },
  // {
  //   id: 3,
  //   title: "Internak",
  //   description: [
  //     "Developed an Android application integrated with SQL Server.",
  //     "Automated livestock barn management and monitoring."
  //   ],
  //   image: "/assets/images/Internak.png",
  //   screenshots: [
  //     "/assets/images/Internak.png",
  //     "/assets/images/Internak-2.png",
  //     "/assets/images/Internak-3.png",
  //   ],
  //   tech: ["Java", "Android", "Spring Boot", "SQL Server"],
  //   github: [
  //     {
  //       label: "Frontend",
  //       url: "https://github.com/mhmdarfiansyahp/Internak.git",
  //     },
  //     {
  //       label: "Backend",
  //       url: "https://github.com/mhmdarfiansyahp/Internak-BE.git",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "HeroApp",
  //   description: [
  //     "Developed a mobile application for equipment lending and maintenance.",
  //     "Improved practicum efficiency for students and lecturers."
  //   ],
  //   image: "/assets/images/HeroApp.png",
  //   screenshots: [
  //     "/assets/images/HeroApp.png",
  //     "/assets/images/HeroApp-2.png",
  //     "/assets/images/HeroApp-3.png",
  //   ],
  //   tech: ["Java", "Android", "PHP", "MySQL"],
  //   github: [
  //     {
  //       label: "Frontend",
  //       url: "https://github.com/DaffaAbiyyu29/HEROApp.git",
  //     },
  //     {
  //       label: "Backend",
  //       url: "https://github.com/salsans/HeroApp_BE.git",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Dashboard 5K2S",
  //   description: [
  //     "A web platform designed to make it easier for users to view, create, display, and filter data for each student class.",
  //     "Implemented histogram charts and assessment history features for each user."
  //   ],
  //   image: "/assets/images/Dashboard5K2S.png",
  //   screenshots: [
  //     "/assets/images/Dashboard5K2S.png",
  //     "/assets/images/Dashboard5K2S-2.png",
  //     "/assets/images/Dashboard5K2S-3.png",
  //   ],
  //   tech: ["CodeIgniter", "PHP", "JavaScript", "MySQL"],
  //   github: "https://github.com/mhmdarfiansyahp/Dashboard5K2S.git",
//   }
];

export default projects;