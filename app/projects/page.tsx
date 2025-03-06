"use client";
import { useState } from "react";
import Image from "next/image";
import arslan1 from "../../app/assess/imgs/Vidnoz_AI_Headshots.png";
import arslan2 from "../../app/assess/imgs/FB_IMG_1718445386247.jpg";
import arslan3 from "../../app/assess/imgs/FB_IMG_1718445434529.jpg";
import arslan4 from "../../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan5 from "../../app/assess/imgs/FB_IMG_1718445513140.jpg";
import arslan6 from "../../app/assess/imgs/FB_IMG_1718445535404.jpg";
import codingPicture from "../../app/assess/imgs/thumbnail.webp";
import project1 from "./assess/imgs/ajman.png";
import redux from "./assess/imgs/redux.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

// import highSchool from "./assess/imgs/audioApp.png"

const Project = () => {
  const [hovered, setHovered] = useState(false);
  const [currentDiv, setCurrentDiv] = useState<number | string>(-1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [projectData, setProjectData] = useState([
    {
      year: 2024,
      projects: [
        {
          img: "../../public/images/school.png",
          title: "wanya Web",
          description:
            "Wanya is a financial platform that empowers individuals and businesses in Peru and Latin America by providing secure, accessible, and transparent financial services. It facilitates easy access to cryptocurrencies and digital tools, promoting financial independence. With a focus on security and simplicity, Wanya aims to be the leading platform for financial inclusion in the region.",

          tags: ["Html", "Next.js", "TypeScript", "Tailwind CSS"],
          date: "",
          preview: "https://wanya.io/",
          github: "",
          tag: "contribute",
        },
        {
          img: "../../public/images/school.png",
          title: "wanya Mobile App",
          description:
            "I am currently collaborating with a team to develop Wanya, a trading platform utilizing React Native for cross-platform mobile application development. Our objective is to create a secure, user-friendly platform that enables users to manage their finances and cryptocurrencies efficiently. By leveraging React Native, we aim to deliver a seamless experience across both iOS and Android devices. Our platform offers features such as effortless fund deposits, secure withdrawals, flexible internal transfers, quick crypto swaps, and the ability to buy and sell cryptocurrencies. We prioritize advanced security measures, including two-factor authentication, Face ID, and anti-phishing protocols, to protect user data and assets. Additionally, Wanya provides comprehensive support tailored for both beginners and experts, ensuring a smooth and informative trading experience.",

          tags: ["React Native"],
          date: "",
          preview: "https://play.google.com/store/apps/details?hl=as&id=com.wanya.app",
          github: "",
          tag: "contribute",
        },
      ],
    },
    {
      year: 2023,
      projects: [
        {
          img: "../../public/images/school.png",
          title: "Audivi",
          description:
            "I worked as part of a team to develop the Audivi platform, which offers memory banks for users to save and access memories through an easy-to-use, audio-visual interface. Designed for individuals with dementia, the platform provides reminiscence therapy that helps reduce stress, boost mood, and improve overall well-being and self-worth. Our team aimed to create a meaningful solution to help users reconnect with their memories and enhance their quality of life.",

          tags: ["Html", "React.js", "TypeScript", "Tailwind CSS"],
          date: "",
          preview:
            "https://play.google.com/store/apps/details?id=world.audivi.audivi",
          github: "",
          tag: "contribute",
        },
        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
          title: "Manjam",
          description:
            "I contributed to the development of Manajm, a trading platform. My involvement helped improve the platform's functionality and user experience, ensuring seamless operations for traders. The project focused on delivering reliable and efficient services to users in the fast-paced world of trading.",

          tags: ["TypeScript", "Tailwind CSS", "Next.js", "Redux"],
          date: "",
          preview: "",
          github: "",
          tag: "contribute",
        },
      ],
    },
    {
      year: 2022,
      projects: [
        {
          img: "../../public/images/school.png",
          title: "Wits TV",
          description:
            "WITS, in collaboration with NASSAR MOTORS, brings you a chance to own a Vespa VXL. Check out our React app designed for this exclusive offer. Explore features, enter the contest, and stand a chance to ride home a Vespa VXL!",

          tags: ["Html", "React.js", "TypeScript", "Tailwind CSS"],
          date: "",
          preview:
            "https://wits-tv-sufian-zulfiqar-5jp7wylx5-sufianzulfiqar786.vercel.app/today-prize",
          github: "",
          tag: "contribute",
        },

        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
          title: "Ajman Sewerage Mobile App",
          description:
            "I developed a mobile app for Ajman Sewerage, the UAE's first Public-Private Partnership (PPP) sewerage system. The app, built with React Native, supports the efficient and sustainable management of wastewater, aligning with the state-of-the-art plant's goal to address Ajman's growing needs in wastewater treatment. The app enhances user experience and accessibility, contributing to the plant's innovative solutions.",

          tags: ["React Native"],
          date: "",
          preview:
            "https://play.google.com/store/apps/details?hl=en_US&id=com.moalajah.ajmansewerageutility",
          github: "",
        },
        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
          title: "NFT Web",
          description:
            "Discover our NFT platform built with React, offering free minting and blue-chip utility. Engage in play-to-earn activities, generate passive income, and get allowlisted for exclusive opportunities. Join now to unlock free minting and more!",

          tags: ["Html", "React.js", "Tailwind CSS", "TypeScript"],
          date: " ",
          preview: "https://nft-web-sample.netlify.app/",
          github: "",
        },
      ],
    },

    {
      year: 2021,
      projects: [
        {
          img: "../../public/images/school.png",
          title: "School Management App",
          description:
            "A school management system built with the MERN stack  streamlines administrative tasks. It manages student records, tracks attendance, schedules classes, and facilitates communication between teachers, students, and parents. The system features user-friendly interfaces and robust data handling for efficient school operations.",

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
        },
        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
          title: "Covid-19 App",
          description:
            "Explore our COVID-19 app that provides real-time data on the pandemic. Stay updated with the latest statistics, trends, and insights to keep informed and safe. Access comprehensive information at your fingertips!",

          tags: ["Tailwind CSS", "React", "Redux", "APIs", "TypeScript"],
          date: " ",
          preview: "",
          github: "https://github.com/Arslan-chaudhry99/covid-19-react-app",
          tag: "Personal",
        },
        {
          img: "../../public/images/school.png",
          title: "Weather app",
          description:
            "Check out our weather app for accurate and up-to-date weather information. Stay prepared with real-time forecasts, detailed conditions, and weather alerts. Your reliable source for all weather-related updates!",

          tags: ["Tailwind CSS", "React", "Redux", "APIs", "TypeScript"],
          date: " ",
          preview: "",
          github: "https://github.com/Arslan-chaudhry99/react-weather-app",
          tag: "Personal",
        },
        {
          img: "../../public/images/school.png",
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
        },
        {
          img: "../../public/images/school.png",
          title: "Multi Serv",
          description:
            "I developed a website for Multiserv, a company specializing in blockchain solutions. The site highlights their commitment to efficiency, security, and transparency, emphasizing how their innovative software solutions can drive business growth. The website reflects their experienced team's expertise in creating impactful software, positioning Multiserv as a trusted partner for businesses looking to leverage blockchain technology.",

          tags: ["Wordpress"],
          date: "",
          preview: "https://multiserv.org/our-team/",
          github: "",
        },
      ],
    },
  ]);

  const handleMouseEnter = (id: number, year: number) => {
    setHovered(true);
    setCurrentDiv(id + "." + year);
  };

  const handleMouseMove = (event: any, state: Boolean) => {
    const x = event.clientX - event.target.getBoundingClientRect().left;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    x.toFixed(1);
    y.toFixed(2);
    if (state) {
      setTranslate({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTranslate({ x: 0, y: 0 });
  };

  const setDivStyle = (id: number, year: number) => {
    return {
      display: hovered && currentDiv === id + "." + year ? "flex" : "",
      transform:
        hovered && currentDiv === id + "." + year
          ? `translate(${translate.x}px, ${translate.y}px) translateZ(0px)`
          : "translate(0, 0)",
      transition: "transform 0.1s out",
    };
  };

  return (
    <>
      <div id="___gatsby">
        <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <Menu />
          <main className="relative min-h-screen">
            <section className="md:h-screen-1/2 pt-56 pb-20 md:pt-56 md:pb-0 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-semibold tracking-tight leading-tight">
                My projects
              </h1>
              <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-2xl">
                All the things I have built till date, some of them being
                improved even today!
              </p>
            </section>
            <div className="container mx-auto p-8 lg:pl-24 lg:p-16 2xl:p-40 2xl:pl-48">
              {projectData.map((item) => {
                return (
                  <>
                    <section
                      className="py-4 md:py-16 md:flex relative items-start first:pt-0 last:pb-0 group/section scroll-m-14"
                      id={`${item.year}`}
                    >
                      <div
                        className="w-px hidden md:block absolute left-1 top-16 -bottom-16 rounded-full group-last/section:bg-gradient-to-b group-last/section:from-gray-700/30 group-last/section:bg-transparent bg-gray-700/30"
                        aria-hidden="true"
                      ></div>
                      <div className="group-first/section:-mt-20 pt-24 pb-6 -mx-8 px-8 md:!mt-12 md:mr-10 md:py-0  sticky z-10 -top-px md:top-72 flex gap-8 items-center">
                        <div className="hidden md:block w-2 h-2 rounded-full bg-gray-500 ring-2 ring-offset-2 ring-offset-gray-900 ring-gray-600"></div>
                        <h2 className="text-3xl md:text-4xl font-semibold lg:w-36 flex-shrink-0">
                          {item.year}
                        </h2>
                      </div>

                      <div className="relative grid xl:grid-cols-2 gap-8">
                        {item.projects.map((val, index) => {
                          return (
                            <>
                              <div
                                className="relative h-full"
                                onMouseEnter={() => {
                                  handleMouseEnter(index, item.year);
                                }}
                                onMouseMove={(e: any) => {
                                  handleMouseMove(e, true);
                                }}
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="p-px lg:h-full rounded-2xl relative overflow-hidden bg-gray-700/30 shadow-md hover:shadow-2xl transition group">
                                  <div
                                    className="absolute opacity-[0.4] h-full hidden aspect-square bg-gradient-to-c from-sky-500 to-transparent to-70% -top-1/2 -left-1/2"
                                    style={setDivStyle(index, item.year)}
                                  ></div>

                                  <div className="bg-[#1b1b1e] group-hover:bg-[#1d1d20] transition-colors relative rounded-2xl h-full">
                                    <div className="absolute inset-0 bg-dots fade-y opacity-40"></div>
                                    <div
                                      className="absolute h-full opacity-[0.07] hidden aspect-square bg-gradient-to-c from-sky-500 to-transparent to-70% -top-1/2 -left-1/2"
                                      style={setDivStyle(index, item.year)}
                                    ></div>

                                    <div className="relative p-8 h-full flex flex-col">
                                      <div className="flex justify-between">
                                        <time
                                          dateTime="2023-05-25"
                                          className="font-medium text-gray-400 text-sm"
                                        >
                                          {val.date}
                                        </time>
                                      </div>
                                      {/* <div
                                        data-gatsby-image-wrapper
                                        className="gatsby-image-wrapper gatsby-image-wrapper-constrained mt-8 w-9 h-9 rounded-full bg-gray-900 ring-2 ring-gray-800 saturate-0 group-hover:saturate-100 transition duration-300"
                                      >
                                        <div
                                          style={{
                                            maxWidth: "64px",
                                            display: "block",
                                          }}
                                        >
                                          <Image
                                            alt={arslan4}
                                            role="presentation"
                                            aria-hidden="true"
                                            style={{
                                              maxWidth: "100%",
                                              display: "block",
                                              position: "static",
                                            }}
                                            src={""}
                                          />
                                        </div>
                                        <div
                                          aria-hidden="true"
                                          data-placeholder-image=""
                                          style={{
                                            opacity: 0,
                                            transition:
                                              "opacity 500ms linear 0s",
                                            backgroundColor: "rgb(24, 24, 24)",
                                            position: "absolute",
                                            inset: 0,
                                            objectFit: "cover",
                                          }}
                                        ></div>
                                      </div> */}
                                      <h3 className="mt-4 text-2xl font-semibold flex justify-between items-center">
                                        <a>
                                          <span className="absolute inset-0"></span>
                                          {val.title}
                                        </a>

                                        {val.tag && (
                                          <div className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-green-600 text-white   transition-colors px-2 py-1 rounded-full">
                                            {val.tag}
                                          </div>
                                        )}
                                      </h3>
                                      <p className="text-gray-400 font-medium text-sm mt-3 mb-6 leading-relaxed tracking-wide">
                                        {val.description}
                                      </p>
                                      <ul
                                        className="flex flex-wrap gap-1.5 text-sm mt-auto"
                                        aria-label="Technologies used in this project"
                                      >
                                        {val.tags.map((tag) => {
                                          return (
                                            <>
                                              <li className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-gray-700/20 text-gray-400 sm:group-hover:bg-gray-50/5 sm:group-hover:text-gray-300 transition-colors px-3 py-1 rounded-md">
                                                {tag}
                                              </li>
                                            </>
                                          );
                                        })}
                                      </ul>
                                      <div
                                        className="mt-10 flex justify-between relative pointer-events-none"
                                        onMouseMove={(e) => {
                                          handleMouseMove(e, false);
                                        }}
                                      >
                                        {val.preview && (
                                          <a
                                            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
                                            href={val.preview}
                                            target="_blank"
                                            aria-label="View Vyaakaran"
                                          >
                                            View
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
                                            >
                                              <path d="M17 7l-10 10"></path>
                                              <path d="M8 7l9 0l0 9"></path>
                                            </svg>
                                          </a>
                                        )}
                                        {val.github && (
                                          <a
                                            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
                                            href={val.github}
                                            target="_blank"
                                            style={{
                                              background:
                                                "rgba(39, 39, 42, .9)",
                                            }}
                                          >
                                            GitHub
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
                                            >
                                              <path d="M17 7l-10 10"></path>
                                              <path d="M8 7l9 0l0 9"></path>
                                            </svg>
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </section>
                  </>
                );
              })}
            </div>
            <section className="h-32" aria-hidden="true"></section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Project;
