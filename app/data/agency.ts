export const AGENCY_NAME = "Digital Studio";

export const navLinks = [
  { href: "/", label: "Home", color: "#1976FF" },
  { href: "/services", label: "Services", color: "#1976FF" },
  { href: "/projects", label: "Portfolio", color: "#38B6FF" },
  { href: "/blog", label: "Blog", color: "#38B6FF" },
  { href: "/contact", label: "Contact", color: "#1976FF" },
] as const;

export const homeHero = {
  heading: "Building Exceptional Digital Experiences for Modern Businesses",
  subheading:
    "A full-service studio for web, mobile, and 3D — we turn ideas into scalable products that help businesses grow and stand out.",
  cta: { label: "Let's get in touch", href: "/contact" },
  heroImage: "/assess/glob_image.png",
};

export const clientLogos = {
  heading: "Trusted by our Leading Clientele",
  brands: [
    {
      name: "ZERO CHEATING",
      src: "/assess/Companies/logo-DOQpZjhz.svg",
      monochrome: true,
    },
    {
      name: "AL KHALIL",
      src: "/assess/Companies/majam_fund.png",
    },
    // {
    //   name: "Buraq",
    //   src: "/assess/Companies/wanya.png",
    // },
   
    {
      name: "6-PACK MACROS",
      src: "/assess/Companies/download.png",
    },
  ],
};

export const servicesSection = {
  heading: "Services",
  subheading:
    "Silicon level delivery from ideation to digital solutions that solve your business problems in a secure and scalable manner.",
  cta: { label: "Explore services", href: "/services" },
};

export const servicesOverview = [
  {
    title: "Web Development Services",
    description:
      "Transform your ideas into reality with our cutting-edge web development services.",
    icon: "web" as const,
    image: "/images/web_development.jpeg",
    href: "/services#service-web-development",
  },
  {
    title: "App Development Services",
    description:
      "Build powerful mobile experiences with cross-platform apps designed for performance and scale.",
    icon: "app" as const,
    image: "/images/mobile-app-development.webp",
    href: "/services#service-app-development",
  },
  {
    title: "3D Development Services",
    description:
      "Bring products and brands to life with immersive 3D modeling, animation, and CGI.",
    icon: "3d" as const,
    image: "/images/3d_dev.jpg",
    href: "/services#service-3d-development",
  },
  {
    title: "Video Editing & Graphics Services",
    description:
      "Polished video content and creative graphics for campaigns, product launches, and social media that capture attention.",
    icon: "video" as const,
    image: "/images/video_editing.jpg",
    href: "/services#service-video-graphics",
  },
  {
    title: "SEO & Digital Marketing Services",
    description:
      "Grow your reach with data-driven SEO, content strategy, and digital marketing campaigns.",
    icon: "seo" as const,
    image: "/images/seo.jpeg",
    href: "/services#service-seo-marketing",
  },
];

export const featuredProjects = [
  {
    title: "Enterprise Management Platform",
    description:
      "A scalable web application designed to streamline operations, automate workflows, and improve productivity through real-time analytics and intuitive dashboards.",
    category: "Web Application",
    highlightColor: "#1976FF",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "A high-performance online platform featuring secure payments, inventory management, and a seamless shopping experience across devices.",
    category: "Web Development",
    highlightColor: "#38B6FF",
  },
  {
    title: "On-Demand Mobile Application",
    description:
      "A cross-platform mobile solution connecting users with services through real-time notifications, location tracking, and intuitive user experiences.",
    category: "Mobile Application",
    highlightColor: "#38B6FF",
  },
  {
    title: "CGI Product Campaign",
    description:
      "A visually immersive 3D advertising campaign that transformed product presentations through cinematic animations and high-quality visual storytelling.",
    category: "3D Development",
    highlightColor: "#1976FF",
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
    heading: "Join today to build products, grow faster, and stand out online!",
    description:
      "Partner with a full-service digital studio for web, mobile, and 3D — from idea to launch, we help modern businesses create experiences that convert.",
    cta: { label: "Join Now", href: "/contact" },
    backgroundImage: "/assess/landing-hero.jpg",
    socialLabel: "Follow us:",
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/Arslan-chaudhry99/",
        icon: "github" as const,
      },
      {
        label: "Fiverr",
        href: "https://www.fiverr.com/s/2KYv87Q",
        icon: "fiverr" as const,
      },
    ],
    clientBadge: {
      count: "25+",
      label: "Satisfied Clients With Us",
    },
  },
  services: {
    heading:
      "we craft software using the latest technologies to drive innovation and meet your business needs.",
    categories: [
      {
        id: "web-development",
        label: "Web Development",
        number: "01",
        title: "Web Development Services",
        description:
          "Transform your ideas into reality with cutting-edge web applications built for performance, security, and scale.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "GraphQL",
          "AWS",
          "Tailwind CSS",
        ],
        items: [
          {
            id: "web-apps",
            label: "Web Application Development",
            content:
              "Modern, responsive web applications using React, Next.js, and proven backend stacks. We focus on performance, security, and intuitive UX so your users get a fast, reliable experience on every device.",
          },
          {
            id: "custom-software",
            label: "Custom Software Development",
            content:
              "We build tailored software that fits your workflows — from internal tools and dashboards to full-scale platforms. Our team handles architecture, development, and deployment so you get a solution built around your business, not the other way around.",
          },
          {
            id: "ui-ux",
            label: "UI/UX Design",
            content:
              "User-centered design from wireframes to polished interfaces. We combine research, prototyping, and visual design to create experiences that convert and delight.",
          },
          {
            id: "database",
            label: "Database & API Design",
            content:
              "Robust data layers, RESTful and GraphQL APIs, and database optimization for applications that scale with your users.",
          },
          {
            id: "cloud-architecture",
            label: "Cloud Architecture",
            content:
              "We design resilient cloud architectures on AWS, GCP, and Azure — optimized for cost, performance, and high availability.",
          },
        ],
      },
      {
        id: "app-development",
        label: "App Development",
        number: "02",
        title: "App Development Services",
        description:
          "Build powerful mobile experiences with cross-platform apps designed for performance and scale.",
        technologies: [
          "React Native",
          "Flutter",
          "Swift",
          "Kotlin",
          "Firebase",
          "Expo",
          "App Store",
          "Google Play",
        ],
        items: [
          {
            id: "mobile-apps",
            label: "Mobile App Development",
            content:
              "Cross-platform and native mobile apps designed for performance and scale. From onboarding flows to push notifications and offline support, we deliver apps your users will love.",
          },
          {
            id: "deployment",
            label: "App Deployment & Support",
            content:
              "We handle CI/CD, cloud hosting, monitoring, and post-launch updates. Your product stays secure, up to date, and ready to grow with your business.",
          },
          {
            id: "devops",
            label: "DevOps & CI/CD",
            content:
              "Automated pipelines, infrastructure as code, and deployment workflows that speed up releases and reduce downtime.",
          },
          {
            id: "qa-testing",
            label: "QA & Automated Testing",
            content:
              "Manual and automated testing across browsers and devices. We catch bugs early and ensure every release meets your quality standards.",
          },
          {
            id: "maintenance",
            label: "Ongoing Maintenance",
            content:
              "Regular updates, dependency management, bug fixes, and feature enhancements to keep your product healthy long after launch.",
          },
        ],
      },
      {
        id: "3d-development",
        label: "3D Development",
        number: "03",
        title: "3D Development Services",
        description:
          "Bring products and brands to life with immersive 3D modeling, animation, and CGI.",
        technologies: [
          "Blender",
          "Cinema 4D",
          "Three.js",
          "Unity",
          "Unreal Engine",
          "Maya",
          "AR / VR",
          "WebGL",
        ],
        items: [
          {
            id: "3d-cgi",
            label: "3D Modeling & CGI",
            content:
              "Photorealistic 3D assets, product visualizations, and cinematic animations for marketing, e-commerce, and brand campaigns that capture attention.",
          },
          {
            id: "ar-vr",
            label: "3D Animation",
            content:
              "Immersive augmented and virtual reality experiences for training, product demos, and interactive storytelling that engage audiences in new ways.",
          },
          {
            id: "ar-vr",
            label: "3D rigging",
            content:
              "3D rigging is the process of creating a skeleton for a 3D model. It is used to create a skeleton for a 3D model. It is used to create a skeleton for a 3D model. It is used to create a skeleton for a 3D model. It is used to create a skeleton for a 3D model. It is used to create a skeleton for a 3D model.",
          },
          {
            id: "ai-integration",
            label: "AI Integration",
            content:
              "Smart features powered by AI — chatbots, recommendations, automation, and custom models integrated into your existing products and workflows.",
          },
          {
            id: "product-viz",
            label: "Product Visualization",
            content:
              "High-fidelity 3D renders and interactive product viewers that help customers explore your offerings before they buy.",
          },
        ],
      },
      {
        id: "video-graphics",
        label: "Video & Graphics",
        number: "04",
        title: "Video Editing & Graphics Services",
        description:
          "Polished video content and creative graphics for campaigns, product launches, and social media that capture attention.",
        technologies: [
          "Adobe Premiere",
          "After Effects",
          "DaVinci Resolve",
          "Photoshop",
          "Illustrator",
          "Figma",
          "Motion Graphics",
          "Color Grading",
        ],
        items: [
          {
            id: "video-editing",
            label: "Video Editing & Post-Production",
            content:
              "Professional video editing, color grading, and post-production for commercials, product demos, and brand storytelling.",
          },
          {
            id: "motion-graphics",
            label: "Motion Graphics",
            content:
              "Animated graphics, title sequences, and visual effects that bring your brand message to life across digital channels.",
          },
          {
            id: "social-content",
            label: "Social Media Content",
            content:
              "Short-form video, reels, and platform-optimized creative assets designed to engage audiences and drive conversions.",
          },
          {
            id: "brand-graphics",
            label: "Brand Graphics & Assets",
            content:
              "Campaign visuals, banners, and creative assets that maintain brand consistency across every touchpoint.",
          },
        ],
      },
      {
        id: "seo-marketing",
        label: "SEO & Marketing",
        number: "05",
        title: "SEO & Digital Marketing Services",
        description:
          "Grow your reach with data-driven SEO, content strategy, and digital marketing campaigns.",
        technologies: [
          "Google Analytics",
          "SEMrush",
          "Ahrefs",
          "Google Ads",
          "Meta Ads",
          "HubSpot",
          "Mailchimp",
          "Content Strategy",
        ],
        items: [
          {
            id: "seo",
            label: "Search Engine Optimization",
            content:
              "Technical SEO audits, keyword strategy, and on-page optimization to improve rankings and drive organic traffic.",
          },
          {
            id: "content-strategy",
            label: "Content Strategy",
            content:
              "Data-driven content planning, blog production, and editorial calendars that build authority and attract your target audience.",
          },
          {
            id: "digital-campaigns",
            label: "Digital Marketing Campaigns",
            content:
              "Paid and organic campaigns across search, social, and email channels — optimized for reach, engagement, and ROI.",
          },
          {
            id: "analytics",
            label: "Analytics & Reporting",
            content:
              "Performance tracking, conversion analysis, and actionable insights so you know what's working and where to invest next.",
          },
          {
            id: "dedicated-support",
            label: "Dedicated Support",
            content:
              "Responsive support packages with SLAs, dedicated channels, and a team that knows your product inside and out.",
          },
        ],
      },
    ],
  },
};

export type ServiceItem = {
  id: string;
  label: string;
  content: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  items: ServiceItem[];
};

export const serviceCategories =
  servicesPage.services.categories as ServiceCategory[];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((service) => service.id === slug);
}

export function getAllServiceSlugs() {
  return serviceCategories.map((service) => service.id);
}

export const footerContent = {
  cta: {
    eyebrow: "Your dream project is just a click away.",
    heading: "Let's code the future together!",
    button: { label: "Get in Touch", href: "/contact" },
  },
  description:
    "Delivering custom digital solutions to ensure your business stays competitive and future-ready.",
  newsletter: {
    label: "Subscribe to our newsletter",
    placeholder: "Enter Your Email Address",
    button: "Subscribe",
  },
  locations: [
    {
      label: "USA",
      address: "DE, USA, 8 The Green, STE R, Dover, DE 19901",
    },
    {
      label: "PAK",
      address: "7/B-3 Aziz Avenue, Canal Rd, Gulberg-V Lahore, 54000",
    },
  ],
  contact: {
    phones: ["PAK +923104350342", "PAK +923415403790"],
    email: "xenorstudio@gmail.com",
  },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/Arslan-chaudhry99/",
      icon: "github" as const,
    },
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/s/2KYv87Q",
      icon: "fiverr" as const,
    },
  ],
  legal: {
    terms: "/contact",
    privacy: "/contact",
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
    secondaryCta: { label: "View Our Work", href: "/projects" },
  },
};

export const portfolioPage = {
  hero: {
    heading: "Our Work",
    subheading:
      "Explore projects we've built for clients, open-source contributions, and personal experiments across web and mobile.",
  },
  categories: [
    { id: "web-development", label: "Web Development" },
    { id: "app-development", label: "App Development" },
    { id: "3d-development", label: "3D Development" },
    { id: "video-graphics", label: "Video & Graphics" },
    { id: "brand-identity", label: "Brand Identity" },
  ],
} as const;

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

export const homeFaq = [
  {
    question: "What services does your studio offer?",
    answer:
      "We provide web development, mobile app development, 3D modeling & CGI, video editing & graphics, and SEO & digital marketing — from strategy and design through launch and ongoing support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A marketing website may take 4–6 weeks, while a custom web or mobile app typically runs 8–16 weeks. 3D campaigns and larger platforms can take 3–6 months depending on scope. We share a clear timeline after discovery.",
  },
  {
    question: "Do you work with startups and existing businesses?",
    answer:
      "Yes. We partner with startups launching their first product and with established teams that need extra capacity for web, mobile, 3D, or marketing work.",
  },
  {
    question: "Can you integrate with our existing team or tools?",
    answer:
      "Absolutely. We can join your in-house developers and designers, work within your stack, and connect with the APIs, CRMs, and platforms you already use.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We provide maintenance, updates, performance monitoring, and dedicated support packages so your product stays secure, fast, and up to date.",
  },
  {
    question: "How do I get started on a project?",
    answer:
      "Reach out through our contact form or book a free consultation. We'll discuss your goals, timeline, and budget, then put together a tailored proposal.",
  },
];

export const homeReviews = {
  heading: "Our clients keep talking",
  subheading: "Listen to what they say about our services",
  items: [
    {
      name: "Abdul-Majeed Ahmed",
      company: "",
      quote: "Great work with the React Native conversions. Cheers!",
    },
    {
      name: "Bassam El Koussa",
      company: "CoinLab",
      quote:
        "Great experience with Digital Studio, high knowledge in React Components, outstanding results!",
    },
    {
      name: "Brijesh Pati",
      company: "",
      quote:
        "One of the best devs I have come across. Ever reliable, great quality of code. Thorough & professional",
    },
    {
      name: "Sarah Mitchell",
      company: "LaunchPad",
      quote:
        "They delivered our web platform on time with clean code and excellent communication throughout.",
    },
    {
      name: "Omar Hassan",
      company: "TechVerse",
      quote:
        "Professional team with strong expertise in Next.js and mobile development. Highly recommended.",
    },
  ],
};
