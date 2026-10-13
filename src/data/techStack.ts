export type Tech = {
  name: string;
  icon: string;
  projects: { name: string; description: string }[];
};

export const techStack = [

  {

    name: "React",

    icon: "react",

    projects: [

      {

        name: "Medico",

        description:

          "Built a component-based pharmacy management interface for medicines, inventory, vendors, users, and orders.",

      },

      {

        name: "Word Hunt",

        description:

          "Built an interactive dictionary application with word search, API integration, and responsive UI.",

      },

    ],

  },

  {

    name: "Angular",

    icon: "angular",

    projects: [

      {

        name: "Taskflow",

        description:

          "Built a modular frontend for workspaces, boards, tasks, role-based access, and permission management.",

      },

    ],

  },

  {

    name: "Next.js",

    icon: "nextjs",

    projects: [

      {

        name: "ATS SaaS",

        description:

          "Developing an AI-powered resume builder and ATS scoring application with job-description-based analysis.",

      },

    ],

  },

  {

    name: "TypeScript",

    icon: "typescript",

    projects: [

      {

        name: "Taskflow",

        description:

          "Used typed models, services, and permission logic to improve maintainability across the application.",

      },

      {

        name: "ATS SaaS",

        description:

          "Used type-safe application logic for the resume builder and ATS analysis workflows.",

      },

    ],

  },

  {

    name: "JavaScript",

    icon: "js",

    projects: [

      {

        name: "Word Hunt",

        description:

          "Implemented interactive search, API handling, and dynamic UI updates.",

      },

    ],

  },

  {

    name: "Node.js",

    icon: "nodejs",

    projects: [

      {

        name: "Taskflow",

        description:

          "Implemented backend APIs for tasks, boards, workspaces, membership, and access control.",

      },

    ],

  },

  {

    name: "Express.js",

    icon: "expressjs",

    projects: [

      {

        name: "Taskflow",

        description:

          "Used for REST API routing, middleware, request validation, and backend authorization.",

      },

    ],

  },

  {

    name: "NestJS",

    icon: "nestjs",

    projects: [],

  },

  {

    name: "MongoDB",

    icon: "mongodb",

    projects: [

      {

        name: "Medico",

        description:

          "Stored pharmacy data, including medicines, inventory, users, and orders.",

      },

    ],

  },

  {

    name: "PostgreSQL",

    icon: "postgresql",

    projects: [

      {

        name: "Sparkle",

        description:

          "Selected as the relational database for the multi-tenant e-commerce SaaS architecture.",

      },

    ],

  },

  {

    name: "Prisma",

    icon: "prisma",

    projects: [

      {

        name: "ATS SaaS",

        description: "Used for database access and application data modeling.",

      },

      {

        name: "Sparkle",

        description:

          "Planned for schema modeling and database operations in the SaaS backend.",

      },

    ],

  },

  {

    name: "Java",

    icon: "java",

    projects: [

      {

        name: "Medico",

        description:

          "Implemented backend application logic and APIs for pharmacy management.",

      },

    ],

  },

  {

    name: "Spring Boot",

    icon: "spring",

    projects: [

      {

        name: "Medico",

        description:

          "Built REST APIs for authentication, medicines, orders, reports, and pharmacy operations.",

      },

    ],

  },

  {

    name: "Tailwind CSS",

    icon: "tailwindcss",

    projects: [

      {

        name: "ATS SaaS",

        description:

          "Used for styling the application interface and building responsive layouts.",

      },

    ],

  },

  {

    name: "Firebase",

    icon: "firebase",

    projects: [

      {

        name: "Word Hunt",

        description: "Hosted the deployed dictionary application.",

      },

    ],

  },

] as Tech[];
