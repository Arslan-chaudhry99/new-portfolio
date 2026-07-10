export type ProjectCategory =
  | "web-development"
  | "app-development"
  | "3d-development"
  | "video-graphics"
  | "seo-marketing";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  preview: string;
  github: string;
  tag?: string;
  category: ProjectCategory;
};

export type ProjectYearGroup = {
  year: number;
  projects: Project[];
};

export type FlatProject = {
  project: Project;
  year: number;
};

export function flattenProjects(data: ProjectYearGroup[] = projectData): FlatProject[] {
  return data.flatMap(({ year, projects }) =>
    projects.map((project) => ({ project, year })),
  );
}

export function projectMatchesCategory(
  project: Project,
  categoryId: string,
): boolean {
  return project.category === categoryId;
}

export const projectData: ProjectYearGroup[] = [
  {
    year: 2024,
    projects: [
      {
        title: "wanya Web",
        description:
          "Wanya is a financial platform that empowers individuals and businesses in Peru and Latin America by providing secure, accessible, and transparent financial services. It facilitates easy access to cryptocurrencies and digital tools, promoting financial independence. With a focus on security and simplicity, Wanya aims to be the leading platform for financial inclusion in the region.",
        tags: ["Html", "Next.js", "TypeScript", "Tailwind CSS"],
        date: "",
        preview: "https://wanya.io/",
        github: "",
        tag: "contribute",
        category: "web-development",
      },
      {
        title: "wanya Mobile App",
        description:
          "I am currently collaborating with a team to develop Wanya, a trading platform utilizing React Native for cross-platform mobile application development. Our objective is to create a secure, user-friendly platform that enables users to manage their finances and cryptocurrencies efficiently. By leveraging React Native, we aim to deliver a seamless experience across both iOS and Android devices. Our platform offers features such as effortless fund deposits, secure withdrawals, flexible internal transfers, quick crypto swaps, and the ability to buy and sell cryptocurrencies. We prioritize advanced security measures, including two-factor authentication, Face ID, and anti-phishing protocols, to protect user data and assets. Additionally, Wanya provides comprehensive support tailored for both beginners and experts, ensuring a smooth and informative trading experience.",
        tags: ["React Native"],
        date: "",
        preview:
          "https://play.google.com/store/apps/details?hl=as&id=com.wanya.app",
        github: "",
        tag: "contribute",
        category: "app-development",
      },
    ],
  },
  {
    year: 2023,
    projects: [
      {
        title: "Audivi",
        description:
          "I worked as part of a team to develop the Audivi platform, which offers memory banks for users to save and access memories through an easy-to-use, audio-visual interface. Designed for individuals with dementia, the platform provides reminiscence therapy that helps reduce stress, boost mood, and improve overall well-being and self-worth. Our team aimed to create a meaningful solution to help users reconnect with their memories and enhance their quality of life.",
        tags: ["Html", "React.js", "TypeScript", "Tailwind CSS"],
        date: "",
        preview:
          "https://play.google.com/store/apps/details?id=world.audivi.audivi",
        github: "",
        tag: "contribute",
        category: "app-development",
      },
      {
        title: "Z Chat",
        description:
          "I developed a chat app using a modern tech stack that includes Electron, Node.js, Express, TypeScript, Tailwind CSS, and Socket.IO. The app features real-time communication capabilities, offering a seamless and responsive chat experience. With a focus on performance and user interface design, this application ensures smooth interaction and an intuitive user experience.",
        tags: [
          "Electron.js",
          "Node.js",
          "TypeScript",
          "Tailwind CSS",
          "Express.js",
          "Mongoose",
          "MongoDB",
        ],
        date: "",
        preview: "",
        github: "",
        tag: "contribute",
        category: "web-development",
      },
      {
        title: "Manjam",
        description:
          "I contributed to the development of Manajm, a trading platform. My involvement helped improve the platform's functionality and user experience, ensuring seamless operations for traders. The project focused on delivering reliable and efficient services to users in the fast-paced world of trading.",
        tags: ["TypeScript", "Tailwind CSS", "Next.js", "Redux"],
        date: "",
        preview: "",
        github: "",
        tag: "contribute",
        category: "web-development",
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        title: "Wits TV",
        description:
          "WITS, in collaboration with NASSAR MOTORS, brings you a chance to own a Vespa VXL. Check out our React app designed for this exclusive offer. Explore features, enter the contest, and stand a chance to ride home a Vespa VXL!",
        tags: ["Html", "React.js", "TypeScript", "Tailwind CSS"],
        date: "",
        preview:
          "https://wits-tv-sufian-zulfiqar-5jp7wylx5-sufianzulfiqar786.vercel.app/today-prize",
        github: "",
        tag: "contribute",
        category: "web-development",
      },
      {
        title: "Ajman Sewerage Web",
        description:
          "Ajman Sewerage, the first Public-Private Partnership (PPP) sewerage system in the UAE, revolutionizes wastewater management. This state-of-the-art plant ensures sustainable and efficient treatment solutions for Ajman's growing needs.",
        tags: [
          "Html",
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Mongoose",
          "MongoDB",
          "TypeScript",
          "MobX",
        ],
        date: "",
        preview: "https://www.ajmansewerage.ae/home",
        github: "",
        category: "web-development",
      },
      {
        title: "Hiring Hash",
        description:
          "A skill assessment platform developed using the MERN stack enables companies to evaluate candidates' abilities effectively. It provides a seamless interface for creating, managing, and grading assessments, ensuring an efficient hiring process. The platform includes real-time analytics to track candidate performance and streamline recruitment. Designed with scalability and user-friendliness in mind, it enhances the overall hiring experience for both recruiters and candidates.",
        tags: [
          "Html",
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Mongoose",
          "MongoDB",
          "TypeScript",
          "Redux Toolkit",
        ],
        date: "",
        preview: "",
        github: "",
        category: "web-development",
      },
      {
        title: "Ajman Sewerage Mobile App",
        description:
          "I developed a mobile app for Ajman Sewerage, the UAE's first Public-Private Partnership (PPP) sewerage system. The app, built with React Native, supports the efficient and sustainable management of wastewater, aligning with the state-of-the-art plant's goal to address Ajman's growing needs in wastewater treatment. The app enhances user experience and accessibility, contributing to the plant's innovative solutions.",
        tags: ["React Native"],
        date: "",
        preview:
          "https://play.google.com/store/apps/details?hl=en_US&id=com.moalajah.ajmansewerageutility",
        github: "",
        category: "app-development",
      },
      {
        title: "maweidi",
        description:
          "Discover our React app designed for efficient hospital management. Streamline administrative tasks, patient records, and appointment scheduling with ease. Enhance your hospital's productivity and patient care with our user-friendly solution.",
        tags: [
          "Html",
          "React.js",
          "Ant Design",
          "Redux",
          "Rest APIs",
          "TypeScript",
        ],
        date: "",
        preview: "https://maweidi-dashboard.netlify.app/",
        github: "",
        category: "web-development",
      },
      {
        title: "NFT Web",
        description:
          "Discover our NFT platform built with React, offering free minting and blue-chip utility. Engage in play-to-earn activities, generate passive income, and get allowlisted for exclusive opportunities. Join now to unlock free minting and more!",
        tags: ["Html", "React.js", "Tailwind CSS", "TypeScript"],
        date: " ",
        preview: "https://nft-web-sample.netlify.app/",
        github: "",
        category: "web-development",
      },
    ],
  },
  {
    year: 2021,
    projects: [
      {
        title: "School Management App",
        description:
          "A school management system built with the MERN stack streamlines administrative tasks. It manages student records, tracks attendance, schedules classes, and facilitates communication between teachers, students, and parents. The system features user-friendly interfaces and robust data handling for efficient school operations.",
        tags: [
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "TypeScript",
        ],
        date: "",
        preview: "",
        github: "https://github.com/Arslan-chaudhry99/gramer-school",
        tag: "Personal",
        category: "web-development",
      },
      {
        title: "Audio App",
        description:
          "Discover our audio app built with JavaScript, where you can easily listen to your favorite songs. Enjoy a seamless music experience with intuitive controls and high-quality audio streaming. Dive into your music world with just a few clicks!",
        tags: ["Html", "css", "OOPS", "Rest APIs", "TypeScript"],
        date: " ",
        preview:
          "https://arslan-chaudhry99.github.io/killer-responsive-audio-app-with-javascript/",
        github:
          "https://github.com/Arslan-chaudhry99/killer-responsive-audio-app-with-javascript",
        tag: "Personal",
        category: "web-development",
      },
      {
        title: "Covid-19 App",
        description:
          "Explore our COVID-19 app that provides real-time data on the pandemic. Stay updated with the latest statistics, trends, and insights to keep informed and safe. Access comprehensive information at your fingertips!",
        tags: ["Tailwind CSS", "React", "Redux", "APIs", "TypeScript"],
        date: " ",
        preview: "",
        github: "https://github.com/Arslan-chaudhry99/covid-19-react-app",
        tag: "Personal",
        category: "web-development",
      },
      {
        title: "Weather app",
        description:
          "Check out our weather app for accurate and up-to-date weather information. Stay prepared with real-time forecasts, detailed conditions, and weather alerts. Your reliable source for all weather-related updates!",
        tags: ["Tailwind CSS", "React", "Redux", "APIs", "TypeScript"],
        date: " ",
        preview: "",
        github: "https://github.com/Arslan-chaudhry99/react-weather-app",
        tag: "Personal",
        category: "web-development",
      },
      {
        title: "Coder feast",
        description:
          "WITS, in collaboration with NASSAR MOTORS, brings you a chance to own a Vespa VXL. Check out our React app designed for this exclusive offer. Explore features, enter the contest, and stand a chance to ride home a Vespa VXL!",
        tags: [
          "Html",
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Mongoose",
          "MongoDB",
          "TypeScript",
        ],
        date: "",
        preview: "https://coderfeast.com/",
        github: "",
        category: "web-development",
      },
      {
        title: "Multi Serv",
        description:
          "I developed a website for Multiserv, a company specializing in blockchain solutions. The site highlights their commitment to efficiency, security, and transparency, emphasizing how their innovative software solutions can drive business growth. The website reflects their experienced team's expertise in creating impactful software, positioning Multiserv as a trusted partner for businesses looking to leverage blockchain technology.",
        tags: ["Wordpress"],
        date: "",
        preview: "https://multiserv.org/our-team/",
        github: "",
        category: "web-development",
      },
    ],
  },
];
