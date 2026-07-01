export const AGENCY_NAME = "Digital Studio";

export const navLinks = [
  { href: "/", label: "Home", color: "#0ea5e9" },
  { href: "/services", label: "Services", color: "#10b981" },
  { href: "/portfolio", label: "Portfolio", color: "#34d399" },
  { href: "/technologies", label: "Technologies", color: "#f472b6" },
  { href: "/about", label: "About", color: "#a78bfa" },
  { href: "/blog", label: "Blog", color: "#f472b6" },
  { href: "/contact", label: "Contact", color: "#a78bfa" },
] as const;

export const homeHero = {
  heading: "Building Exceptional Digital Experiences for Modern Businesses",
  subheading:
    "A full-service studio for web, mobile, and 3D — we turn ideas into scalable products that help businesses grow and stand out.",
  primaryCta: { label: "Start Your Project", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
};

export const servicesOverview = [
  {
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites and web applications built using cutting-edge JavaScript technologies. We create digital experiences that are fast, secure, and designed for growth.",
    keyServices: [
      "Custom Website Development",
      "Full-Stack JavaScript Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Integrations",
      "Performance Optimization",
    ],
    highlightColor: "#0ea5e9",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile applications that deliver seamless user experiences across Android and iOS devices.",
    keyServices: [
      "Mobile App Development",
      "Cross-Platform Applications",
      "UI/UX Implementation",
      "Backend Integration",
      "Real-Time Applications",
      "Maintenance & Support",
    ],
    highlightColor: "#10b981",
  },
  {
    title: "3D Development",
    description:
      "Creative and immersive 3D solutions that bring products, brands, and ideas to life.",
    keyServices: [
      "3D Modeling",
      "3D Rigging",
      "3D Animations",
      "CGI Advertisements",
      "Environment Design",
    ],
    highlightColor: "#a78bfa",
  },
];

export const technologies = {
  heading: "Powered by Modern JavaScript Technologies",
  description:
    "We utilize industry-leading technologies and development practices to build reliable, scalable, and future-ready digital products.",
  categories: [
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "Socket.io",
      ],
    },
    {
      title: "Database & Cloud",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      title: "Development Tools",
      items: ["Git", "GitHub", "Vite", "Prisma", "Figma"],
    },
  ],
};

export const featuredProjects = [
  {
    title: "Enterprise Management Platform",
    description:
      "A scalable web application designed to streamline operations, automate workflows, and improve productivity through real-time analytics and intuitive dashboards.",
    category: "Web Application",
    highlightColor: "#0ea5e9",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "A high-performance online platform featuring secure payments, inventory management, and a seamless shopping experience across devices.",
    category: "Web Development",
    highlightColor: "#10b981",
  },
  {
    title: "On-Demand Mobile Application",
    description:
      "A cross-platform mobile solution connecting users with services through real-time notifications, location tracking, and intuitive user experiences.",
    category: "Mobile Application",
    highlightColor: "#34d399",
  },
  {
    title: "CGI Product Campaign",
    description:
      "A visually immersive 3D advertising campaign that transformed product presentations through cinematic animations and high-quality visual storytelling.",
    category: "3D Development",
    highlightColor: "#a78bfa",
  },
];

export const testimonials = [
  {
    quote:
      "Their team transformed our vision into a modern digital platform that exceeded our expectations. Professional, responsive, and highly skilled.",
    author: "Sarah Thompson",
  },
  {
    quote:
      "From planning to deployment, the entire process was seamless. The quality of work and attention to detail were exceptional.",
    author: "Michael Anderson",
  },
  {
    quote:
      "Their expertise in web technologies and 3D solutions helped us launch a product experience that truly stood out in the market.",
    author: "Daniel Carter",
  },
];

export const homeCta = {
  heading: "Ready to Build Something Extraordinary?",
  description:
    "Whether you're launching a startup, scaling your business, or creating immersive digital experiences, we're here to turn your ideas into powerful solutions.",
  primaryCta: { label: "Book a Free Consultation", href: "/contact" },
  secondaryCta: { label: "Get a Project Estimate", href: "/contact" },
};

export const servicesPage = {
  hero: {
    heading: "Digital Solutions Designed for Growth",
    subheading:
      "From modern websites and mobile applications to immersive 3D experiences, we create scalable, high-performing solutions that help businesses innovate, engage, and grow.",
  },
  services: [
    {
      title: "Web Development That Performs",
      description:
        "We design and develop modern websites and web applications using the latest JavaScript technologies. Our solutions are built for speed, scalability, security, and exceptional user experiences across all devices.",
      offerings: [
        "Custom Website Development",
        "Full-Stack JavaScript Applications",
        "Single Page Applications (SPA)",
        "E-Commerce Development",
        "CMS Development",
        "API Integration & Development",
        "Progressive Web Apps (PWA)",
        "Website Optimization & Maintenance",
      ],
      technologies:
        "React.js • Next.js • Node.js • Express.js • TypeScript • MongoDB • PostgreSQL • Tailwind CSS",
      highlightColor: "#0ea5e9",
    },
    {
      title: "Mobile Experiences That Connect",
      description:
        "We build high-quality cross-platform mobile applications that deliver seamless performance and intuitive user experiences. From concept to deployment, we develop apps that are reliable, scalable, and designed to grow with your business.",
      offerings: [
        "Cross-Platform App Development",
        "Android & iOS Applications",
        "UI/UX Implementation",
        "Backend & API Integration",
        "Real-Time Applications",
        "App Performance Optimization",
        "Maintenance & Support",
        "App Store Deployment Assistance",
      ],
      technologies:
        "React Native • JavaScript • TypeScript • Node.js • Firebase • MongoDB • REST APIs • Socket.io",
      highlightColor: "#10b981",
    },
    {
      title: "Immersive 3D Experiences That Captivate",
      description:
        "We create visually stunning 3D assets and digital experiences that elevate brands, products, and marketing campaigns. Our creative team combines technical expertise with artistic vision to deliver high-quality visual solutions.",
      offerings: [
        "3D Modeling",
        "3D Rigging",
        "3D Animations",
        "CGI Advertisements",
        "Environment Design",
        "Product Visualization",
        "Motion Graphics",
        "Interactive 3D Experiences",
      ],
      deliverables:
        "Product Renders • Animated Videos • CGI Commercials • Virtual Environments • Marketing Assets",
      highlightColor: "#a78bfa",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your business goals, requirements, target audience, and project vision.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "We create a roadmap, define technical requirements, and establish project milestones.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Our team designs and develops your solution using modern technologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Every feature is thoroughly tested for performance, security, and reliability.",
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support, updates, and maintenance.",
    },
  ],
  pricing: {
    heading: "Flexible Pricing Built Around Your Needs",
    description:
      "Every project is unique, so our pricing is tailored according to your goals, requirements, features, and timeline.",
    models: [
      {
        title: "Fixed Price",
        description:
          "Perfect for projects with clearly defined requirements and timelines.",
      },
      {
        title: "Dedicated Team",
        description:
          "A dedicated team working exclusively on your project with complete flexibility and collaboration.",
      },
      {
        title: "Hourly Engagement",
        description:
          "Ideal for ongoing improvements, maintenance, consulting, and evolving project requirements.",
      },
    ],
    included: [
      "Project Consultation",
      "Strategic Planning",
      "UI/UX Guidance",
      "Development & Testing",
      "Quality Assurance",
      "Deployment Assistance",
      "Post-Launch Support",
    ],
  },
  cta: {
    heading: "Ready to Start Your Project?",
    description:
      "Let's turn your ideas into powerful digital experiences with modern web, mobile, and 3D solutions.",
    primaryCta: { label: "Start Your Project", href: "/contact" },
    secondaryCta: { label: "Schedule a Consultation", href: "/contact" },
  },
};

export const portfolioPage = {
  hero: {
    heading: "Projects That Deliver Results",
    subheading:
      "Explore our portfolio of web applications, mobile experiences, and immersive 3D projects crafted to solve real business challenges and create meaningful digital impact.",
    description:
      "Every project we build is driven by strategy, creativity, and technology. From startups to growing businesses, we help brands transform ideas into exceptional digital products.",
  },
  caseStudies: [
    {
      title: "Enterprise Management Platform",
      category: "Web Application",
      challenge:
        "The client needed a centralized platform to manage operations, automate workflows, and monitor business performance in real time.",
      solution:
        "We developed a scalable web application with custom dashboards, role-based access, reporting tools, and real-time data synchronization.",
      results: [
        "Increased operational efficiency",
        "Reduced manual processes",
        "Improved reporting and decision-making",
        "Scalable architecture for future growth",
      ],
      highlightColor: "#0ea5e9",
    },
    {
      title: "Multi-Vendor E-Commerce Platform",
      category: "Web Development",
      challenge:
        "The client wanted a modern online marketplace capable of handling multiple vendors and thousands of products.",
      solution:
        "We built a high-performance e-commerce platform with vendor management, secure payments, inventory tracking, and responsive design.",
      results: [
        "Faster order processing",
        "Improved user experience",
        "Increased customer engagement",
        "Scalable infrastructure",
      ],
      highlightColor: "#10b981",
    },
    {
      title: "On-Demand Service Mobile App",
      category: "Mobile Application",
      challenge:
        "The client required a mobile platform connecting customers with service providers in real time.",
      solution:
        "We designed and developed a cross-platform mobile application featuring user authentication, live notifications, booking management, and location tracking.",
      results: [
        "Seamless booking experience",
        "Improved customer retention",
        "Real-time service management",
        "Consistent performance across devices",
      ],
      highlightColor: "#34d399",
    },
    {
      title: "CGI Product Advertising Campaign",
      category: "3D Development",
      challenge:
        "The client needed a visually engaging marketing campaign to showcase products in a unique and memorable way.",
      solution:
        "We produced high-quality CGI advertisements, cinematic animations, and photorealistic product visualizations.",
      results: [
        "Increased audience engagement",
        "Stronger brand presentation",
        "Premium product storytelling",
        "Enhanced marketing performance",
      ],
      highlightColor: "#a78bfa",
    },
  ],
  showcase: {
    heading: "See Our Work in Action",
    description:
      "Every project is designed with attention to performance, usability, and visual excellence. Explore screenshots, interactive demos, and project highlights to experience our work firsthand.",
    items: [
      "Interactive Web Application Demos",
      "Mobile App Screenshots",
      "Dashboard Interfaces",
      "E-Commerce Experiences",
      "3D Product Visualizations",
      "CGI Animation Reels",
      "Environment Design Showcases",
    ],
  },
  categories: [
    {
      title: "Web Development",
      description:
        "Modern websites and scalable web applications built using the latest JavaScript technologies.",
      projects: [
        "Corporate Websites",
        "SaaS Platforms",
        "E-Commerce Solutions",
        "Admin Dashboards",
        "Custom Web Applications",
      ],
      highlightColor: "#0ea5e9",
    },
    {
      title: "App Development",
      description:
        "Cross-platform mobile applications designed for seamless experiences across Android and iOS.",
      projects: [
        "On-Demand Apps",
        "Business Applications",
        "Booking Platforms",
        "Social Applications",
        "Real-Time Communication Apps",
      ],
      highlightColor: "#10b981",
    },
    {
      title: "3D Development",
      description:
        "Immersive visual experiences that combine creativity and technology.",
      projects: [
        "3D Product Modeling",
        "Character Rigging",
        "Animated Commercials",
        "CGI Advertising Campaigns",
        "Environment Design",
        "Product Visualization Experiences",
      ],
      highlightColor: "#a78bfa",
    },
  ],
  cta: {
    heading: "Have an Idea for Your Next Project?",
    description:
      "We're passionate about turning ambitious ideas into exceptional digital products. Let's create something impactful together.",
    primaryCta: { label: "View More Projects", href: "/portfolio" },
    secondaryCta: { label: "Start Your Project", href: "/contact" },
  },
};

export const aboutPage = {
  hero: {
    heading: "A Studio Built for the Digital Age",
    subheading:
      "We are a passionate team of developers, designers, and 3D artists dedicated to crafting exceptional digital experiences that drive real business results.",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Founded with a vision to bridge cutting-edge technology and creative excellence, our studio has grown into a full-service digital partner for businesses worldwide. We combine deep expertise in modern JavaScript development with immersive 3D capabilities to deliver solutions that stand out.",
      "From startups launching their first product to enterprises scaling complex platforms, we've helped clients across industries transform their digital presence. Every project we take on is an opportunity to push boundaries and create something remarkable.",
    ],
  },
  mission: {
    title: "Mission & Values",
    items: [
      {
        title: "Innovation First",
        description:
          "We embrace modern technologies and creative approaches to solve complex challenges.",
      },
      {
        title: "Quality Without Compromise",
        description:
          "Every line of code, every design detail, and every 3D asset meets our high standards.",
      },
      {
        title: "Client Partnership",
        description:
          "We work collaboratively, keeping you informed and involved throughout the entire journey.",
      },
      {
        title: "Results-Driven",
        description:
          "We measure success by the impact our work has on your business growth and goals.",
      },
    ],
  },
  whyChooseUs: {
    title: "Why Clients Choose Us",
    items: [
      "Full-stack expertise across web, mobile, and 3D development",
      "Modern JavaScript technology stack for scalable solutions",
      "Transparent communication and agile project management",
      "End-to-end service from strategy to post-launch support",
      "Proven track record with startups and enterprise clients",
      "Creative 3D studio capabilities for immersive brand experiences",
    ],
  },
  cta: {
    heading: "Let's Build Something Great Together",
    description:
      "Ready to partner with a team that cares about your success as much as you do?",
    primaryCta: { label: "Get in Touch", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/portfolio" },
  },
};

export const technologiesPage = {
  hero: {
    heading: "Technology Stack & Capabilities",
    subheading:
      "We build with industry-leading JavaScript technologies, modern frameworks, and proven development practices to deliver reliable, scalable digital products.",
  },
  stack: {
    title: "Our JavaScript Stack",
    description:
      "From frontend interfaces to backend APIs and mobile apps, our technology choices are driven by performance, maintainability, and long-term scalability.",
    categories: [
      {
        title: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5 & CSS3",
        ],
        highlightColor: "#0ea5e9",
      },
      {
        title: "Backend",
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "GraphQL",
          "Socket.io",
        ],
        highlightColor: "#10b981",
      },
      {
        title: "Mobile",
        items: [
          "React Native",
          "Cross-Platform Development",
          "Firebase",
          "Push Notifications",
        ],
        highlightColor: "#34d399",
      },
      {
        title: "Database & Cloud",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"],
        highlightColor: "#f472b6",
      },
      {
        title: "3D & Creative",
        items: [
          "3D Modeling",
          "Animation",
          "CGI Production",
          "Product Visualization",
        ],
        highlightColor: "#a78bfa",
      },
      {
        title: "Tools & Workflow",
        items: ["Git", "GitHub", "Vite", "Figma", "CI/CD"],
        highlightColor: "#facc15",
      },
    ],
  },
  capabilities: {
    title: "Development Process & Capabilities",
    description:
      "Our development approach combines agile methodology with rigorous quality standards to ensure every project is delivered on time and exceeds expectations.",
    items: [
      "Agile sprint-based development with regular client updates",
      "Responsive, mobile-first design and development",
      "API-first architecture for seamless integrations",
      "Performance optimization and security best practices",
      "Automated testing and quality assurance",
      "Scalable cloud deployment and DevOps support",
      "Real-time features with WebSocket and push notifications",
      "Cross-platform mobile development with shared codebases",
    ],
  },
  cta: {
    heading: "Built with the Right Tools for Your Project",
    description:
      "Not sure which technologies fit your needs? We'll help you choose the optimal stack for your goals.",
    primaryCta: { label: "Discuss Your Project", href: "/contact" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
};

export const contactPage = {
  hero: {
    heading: "Let's Start Your Project",
    subheading:
      "Have a question, need a consultation, or ready to kick off your next digital project? We'd love to hear from you.",
  },
  faq: [
    {
      question: "How do I get started?",
      answer:
        "Fill out the contact form or book a free consultation. We'll discuss your goals, timeline, and requirements to create a tailored proposal.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary based on scope. A simple website may take 4–6 weeks, while complex platforms can take 3–6 months. We'll provide a detailed timeline during discovery.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We provide post-launch maintenance, updates, and dedicated support packages to keep your product running smoothly.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely. We offer dedicated team engagements and can integrate seamlessly with your in-house developers and designers.",
    },
  ],
};
