const experienceData = {
  experience: [
    {
      id: 1,
      role: "Fullstack Developer (Contract)",
      company: "BPJS Kesehatan (outsourced via PT IDstar Cipta Teknologi)",
      period: "Jan 2026 – Sep 2026",
      description: [
        "Developed the foreign national (WNA) registration/mutation approval feature and the 'WNA Expiring Soon' report in eDabu KC and eDabu BU using ASP.NET MVC 5, jQuery, and PostgreSQL. Delivered 4 new REST APIs and modified 1 existing REST API to list participants whose residence permit/RPTKA expires in under 3 months, support search per Business Entity, and provide password-protected Excel downloads, so branch offices (KC) and Business Entities (BU) can monitor and follow up on expiring foreign national participants.",
        "Developed the 'Priority Business Entity Mapping' feature on SIRETA using ASP.NET Core 8, AngularJS, and TypeScript, backed by 9 authenticated REST APIs. Covered multi-level recapitulation (Branch Office, Regional Office, Head Office), flag management by the division head with eligibility checks, change history, Excel export, and automated monthly status revocation, making the granting and revoking of Priority BU flags more accurate, controlled, and auditable.",
        "Developed the PELATIF feature using .NET, AngularJS, and TypeScript, with 4 new and 2 modified REST APIs. Implemented automatic flagging of parent entities and SSI, real-time participant segment migration, entity search and filtering on the frontend, and adjustments to the UHC approval flow, preventing entities from being handled incorrectly when they become active immediately.",
        "Developed the Complaint feature in the 'SIPP BU' menu of Edabu Business Entity using ASP.NET MVC 5, jQuery, and PostgreSQL. Built 8 core REST APIs covering business rule validation, ticket creation, and document upload, allowing Business Entities to submit complaints directly through Edabu.",
        "Migrated 15 stored procedures from SQL Server to PostgreSQL, including database connection reconfiguration, query conversion, code refactoring, and performance optimization.",
        "Refactored and developed membership data processing services on the Membership Web Application using .NET Framework and RESTful API, improving maintainability and integration reliability."
      ],
      tech: [
        ".NET Framework",
        "ASP.NET Core 8",
        "ASP.NET MVC 5",
        "C#",
        "jQuery",
        "PostgreSQL",
        "SQL Server",
        "REST API",
        "AngularJS",
        "TypeScript"
      ]
    },
    {
      id: 2,
      role: "Fullstack Developer (Internship)",
      company: "PT. Global Service Indonesia",
      period: "Jan 2025 – Nov 2025",
      description: [
        "Migrated the Gotjob backend from Django to Laravel, covering nearly 20 API endpoints, to improve long-term security and maintainability.",
        "Rebuilt the Gotjob interface using Vue.js and TypeScript to make the application more responsive, efficient, and easier to maintain.",
        "Built an Asset Management application end-to-end with Laravel and MySQL, digitizing manual asset records into a centralized web system. Implemented role-based approval and automatic QR Code generation, cutting approval time from 29 minutes to 1.58 minutes (a 94.5% reduction).",
        "Rebuilt the Company Profile website by migrating its entire structure from WordPress to Vue.js, resulting in a more modern and maintainable frontend architecture.",
        "Designed database structures for project efficiency using Lucidchart.",
        "Maintained system stability and supported ongoing digitalization projects."
      ],
      tech: ["Laravel", "PHP", "MySQL", "Vue.js", "TypeScript", "Lucidchart"]
    },
    {
      id: 3,
      role: "Systems Analyst & Developer (Project-Based)",
      company: "PT. Astra Honda Motor",
      period: "Apr 2024 – Dec 2024",
      description: [
        "Migrated the Bill of Materials (BOM) Accessories application to Java Spring Boot, enabling the creation, activation, and data integration of accessories by manufacturer, motorcycle type, and color.",
        "Migrated the Motor Unit Download application to Java Spring Boot, enabling efficient data retrieval and export to Excel and XML."
      ],
      tech: ["Java", "Spring Boot", "Oracle"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Associate Degree (D3) in Information Management",
      school: "Astra Polytechnic",
      period: "2022 – 2025",
      description: [
        "Educated in an industry-driven environment tailored to Astra Group's professional standards."
      ],
      gpa: "3.31 / 4.00"
    }
  ]
};

export default experienceData;