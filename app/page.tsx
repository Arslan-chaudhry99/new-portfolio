"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import arslan1 from "../app/assess/imgs/Vidnoz_AI_Headshots.png";
import arslan2 from "../app/assess/imgs/FB_IMG_1718445386247.jpg";
import arslan3 from "../app/assess/imgs/coding.jpg";
import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan22 from "../app/assess/imgs/miocreate_faceswap.jpeg";
import arslan5 from "../app/assess/imgs/Screenshot from 2024-07-16 12-39-20.png";
import codingPicture from "../app/assess/imgs/thumbnail.webp";
import project1 from "./assess/imgs/ajman.png";
import audioApp from "./assess/imgs/audioApp.png";
import wanyaIcon from "./assess/imgs/wanya.png";
import wanyaIconAndroid from "./assess/imgs/wanya-android.png";

//
import multiServ from "./assess/imgs/multiServ.jpeg";
import txLabz from "./assess/imgs/txlabz.jpeg";
import multiimage from "../app/assess/imgs/Multi.png";
import theHexa from "./assess/imgs/thehexatown.jpeg";
import zechTech from "./assess/imgs/zech.jpeg";
import redux from "./assess/imgs/redux.png";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [readMore, setReadMore] = useState(false);
  const style = {
    backgroundColor: "#8b5cf6",
  };

  return (
    <>
      <div id="___gatsby">
        <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <Menu />

          <main className="relative min-h-screen">
            <section className="relative min-h-[75vh] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between pt-16 container mx-auto px-8 xl:px-32 overflow-x-hidden">
              <div className="max-w-2xl">
                <h1 className="mt-2 font-semibold tracking-tight text-gray-100 text-4xl md:text-5xl leading-tight md:leading-tight">
                  Hey there, I’m <br />
                  <span className="gradient-text bg-clip-text font-semibold md:text-5xl md:leading-none">
                    {" "}
                    Arslan Jameel.
                  </span>
                </h1>
                <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
                  I am enthusiastic about creating innovative web products with
                  a strong emphasis on good design. I enjoy learning new
                  technologies and actively contributing to open source
                  projects.
                </p>
                <div className="flex flex-col sm:flex-row mt-10 gap-4">
                  <Link
                    className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
                    href="/my-resume/"
                  >
                    Download Resume
                  </Link>
                  <Link
                    className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&amp;:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
                    href="/contact/"
                    style={{ background: "rgba(39, 39, 42, .9)" }}
                  >
                    Let’s connect
                  </Link>
                </div>
              </div>
              <div className="p-10 lg:p-20 flex-shrink-0 -ml-8 lg:ml-0 lg:-mr-20 relative -order-1 lg:order-1">
                <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(black_55%,transparent_75%)] rounded-full"></div>
                <div className="absolute inset-0 [mask-image:radial-gradient(black_42%,transparent_57%)] rounded-full">
                  <div className="absolute inset-6 lg:inset-12 highlight mask-dots rounded-full"></div>
                </div>
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained relative w-72 h-72 rounded-full border-8 border-gray-900 bg-gray-900">
                  <div
                    style={{
                      maxWidth: "284px",
                      maxHeight: "284px",
                      display: "block",
                    }}
                  >
                    <Image
                      src={arslan22}
                      alt="Cover Image"
                      style={{
                        width: "284px",
                        height: "284px",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </div>
                  <Image
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                      width: "284px",
                      height: "284px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    decoding="async"
                    alt=""
                    src={arslan1}
                  />
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-dots fade-y"></div>
              <div className="py-16 inline-flex min-w-full w-max relative">
                <div
                  className=" min-w-full justify-around flex-shrink-0 animate-large-marquee"
                  style={{ display: "inline-flex" }}
                >
                  {[arslan4, multiimage, arslan3, arslan5, arslan22].map(
                    (item) => {
                      return (
                        <>
                          <div className="flex-shrink-0 px-6">
                            <div className="relative group hover:scale-110 transition duration-300 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/30 overflow-hidden -rotate-2 hover:-rotate-1">
                              <div className="scale-110 h-80 aspect-[8/10] group-hover:scale-100 transition-transform duration-300">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full h-full object-cover object-left">
                                  <div
                                    style={{
                                      maxWidth: "281px",
                                      display: "block",
                                      height: "100%",
                                    }}
                                  >
                                    <Image
                                      alt=""
                                      role="presentation"
                                      aria-hidden="true"
                                      style={{
                                        maxWidth: "100%",
                                        display: "block",
                                        position: "static",
                                      }}
                                      src={item}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute inset-0 bg-noise opacity-20 pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </div>
                              <div
                                className="absolute inset-0 shadow-[0_1.5px_0_inset_rgba(255,255,255,0.3)] rounded-xl z-10 pointer-events-none"
                                aria-hidden={true}
                              ></div>
                            </div>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
                <div
                  className="absolute top-16 inset-x-0 inline-flex justify-around flex-shrink-0 animate-large-marquee2"
                  style={{ display: "inline-flex" }}
                >
                  {[arslan4, multiimage, arslan3, arslan5, arslan22].map(
                    (item) => {
                      return (
                        <>
                          <div className="flex-shrink-0 px-6">
                            <div className="relative group hover:scale-110 transition duration-300 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/30 overflow-hidden -rotate-2 hover:-rotate-1">
                              <div className="scale-110 h-80 aspect-[8/10] group-hover:scale-100 transition-transform duration-300">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained w-full h-full object-cover object-left">
                                  <div
                                    style={{
                                      maxWidth: "281px",
                                      display: "block",
                                      height: "100%",
                                    }}
                                  >
                                    <Image
                                      alt=""
                                      role="presentation"
                                      aria-hidden="true"
                                      style={{
                                        maxWidth: "100%",
                                        display: "block",
                                        position: "static",
                                      }}
                                      src={item}
                                    />
                                  </div>
                                </div>
                                <div
                                  className="absolute inset-0 bg-noise opacity-20 pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </div>
                              <div
                                className="absolute inset-0 shadow-[0_1.5px_0_inset_rgba(255,255,255,0.3)] rounded-xl z-10 pointer-events-none"
                                aria-hidden={true}
                              ></div>
                            </div>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </section>

            <section className="container flex flex-col gap-8 mx-auto px-8 2xl:px-32 mt-32">
              <div className="flex flex-col lg:flex-row gap-8">
                <div
                  className=" flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      About me
                    </h2>
                    <div className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
                      <p>
                        Hi! {"I'm"} Arslan, a 22-year-old creative enthusiast
                        who loves building products with code.
                      </p>
                      <p>
                        I have always been curious about how things work since
                        my childhood. This curiosity led me to the world of
                        programming and computer science. When I was 16, I build
                        a school management system for my high school to manage
                        student attendance leaves and exam result data. That’s
                        when I learned Javascript frameworks and libraries.
                      </p>

                      <p
                        className={`md:block  ${readMore ? "block" : "hidden"}`}
                      >
                        Since then, I have been working on improving my skills
                        in Web development. I decided to dip my feet in web
                        development because I wanted to build products that were
                        easily accessible to anyone on any device. It always
                        motivates me when I hear how my project has helped
                        someone solve their problem.
                      </p>
                      <p
                        className={`md:block  ${readMore ? "block" : "hidden"}`}
                      >
                        I completed my undergrad in Computer Science and
                        Engineering from Virtual University. Most of the things
                        I build or learn is still driven by curiosity even
                        today.
                      </p>
                    </div>
                  </div>
                  <div className="lg:hidden text-center absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-75% to-[#1E1E21] rounded-b-2xl">
                    <button
                      style={{ background: "rgba(39, 39, 42, .9) !important" }}
                      className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-sm font-medium px-4 py-2 mt-14"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
                <div
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                  className=" xl:w-4/12 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
                  <div className="relative">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Experience
                    </h2>

                    <div className="mt-7">
                      <ol className="space-y-7">
                        <li className="flex items-center">
                          <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
                            <Image
                              src={zechTech}
                              alt="Razorpay"
                              loading="lazy"
                              className="bg-white w-6 h-6"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="ml-5">
                              <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
                                <a
                                  className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
                                  href="https://www.linkedin.com/company/zech-inc/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  ZECH Inc.{" "}
                                </a>
                                <div className="text-xs text-gray-400">
                                  <time dateTime="2022-07">Nov 2023</time>
                                  &nbsp;&nbsp;–&nbsp;&nbsp;<span>Present</span>
                                </div>
                              </div>
                              <div className="font-medium text-xs mt-0.5 text-gray-400">
                                Software Engineer
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="flex items-center">
                          <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
                            <Image
                              src={txLabz}
                              alt="Razorpay"
                              loading="lazy"
                              className="bg-white w-6 h-6"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="ml-5">
                              <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
                                <a
                                  className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
                                  href="https://www.linkedin.com/company/txlabz/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  TxLabz{" "}
                                </a>
                                <div className="text-xs text-gray-400">
                                  <time dateTime="2022-07">Nov 2022</time>
                                  &nbsp;&nbsp;–&nbsp;&nbsp;<span>Oct 2023</span>
                                </div>
                              </div>
                              <div className="font-medium text-xs mt-0.5 text-gray-400">
                                Software Engineer
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <div className="rounded-full overflow-hidden w-9 h-9 sm:w-10 sm:h-10 mt-6 sm:mt-0 ring-4 ring-gray-800 flex-shrink-0 bg-white flex items-center justify-center">
                            <Image
                              src={multiServ}
                              alt="Razorpay"
                              loading="lazy"
                              className="bg-white w-6 h-6"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="relative w-full">
                            <div className="ml-5">
                              <div className="flex flex-col-reverse items-start sm:flex-row justify-between gap-2 sm:gap-4">
                                <a
                                  className="font-medium text-sm hover:bg-gray-700 px-2 -ml-2 py-0.5 -my-0.5 rounded-full transition-colors"
                                  href="https://www.linkedin.com/company/multi-serv/posts/?feedView=all"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  MultiServ{" "}
                                </a>
                                <div className="text-xs text-gray-400">
                                  <time dateTime="">Jan 2022</time>
                                  &nbsp;&nbsp;–&nbsp;&nbsp;
                                  <time dateTime="">May 2022</time>
                                </div>
                              </div>
                              <div className="font-medium text-xs mt-0.5 text-gray-400">
                                Software Engineering Intern
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ background: "rgba(39, 39, 42, .9)" }}
                className=" flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
              >
                <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
                <div className="relative flex flex-col items-start h-full">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    My skills
                  </h2>
                  <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium">
                    I constantly learn new and exciting concepts in computer
                    science and web development. I try applying these concepts
                    to solve real-world problems. A few technologies I enjoy
                    working with:
                  </p>
                  <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 font-medium">
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      JavaScript
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      React native
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      CSS
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      React.js
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Next.js
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Redux
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Node.js
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Express.js
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Mongoose
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      MongoDB
                    </li>
                    <li className="flex items-center gap-3 group">
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
                        className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M13 18l6-6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                      Socket.io
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="container mx-auto px-8 2xl:px-32 mt-48">
              <h2 className="text-3xl font-semibold tracking-tight leading-normal">
                Projects I Take the Most Pride In
              </h2>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
                <p className="mt-6 space-y-4 tracking-wide leading-relaxed text-gray-400 font-medium max-w-2xl">
                  I love creating products that solve problems. I take pride in
                  viewing things from the end {"users'"} perspectives and
                  working backward to design compelling experiences.
                </p>
                <Link
                  className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
                  href="/projects/"
                >
                  View all projects
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
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M13 18l6-6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                </Link>
              </div>

              <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8">
                <div
                  className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
                  style={
                    {
                      "--highlight-color": "#0ea5e9" as string,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                  <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
                  <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
                  <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-3 justify-between">
                      <h3 className="text-4xl font-semibold">Ajman Sewerage</h3>
                      {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                        2,178
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <span className="text-gray-400 text-xs">on GitHub</span>
                      </div> */}
                    </div>
                    <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
                      Ajman Sewerage, the first Public-Private Partnership (PPP)
                      sewerage system in the UAE, revolutionizes wastewater
                      management. This state-of-the-art plant ensures
                      sustainable and efficient treatment solutions for{" "}
                      {"Ajman's"}
                      growing needs.
                      <br />
                      <br />
                      By leveraging advanced technology and innovative
                      practices, it enhances water quality and environmental
                      protection. The partnership demonstrates a successful
                      collaboration between public and private sectors, setting
                      a benchmark for future infrastructure projects in the
                      region.
                    </p>
                    <div className="flex justify-between mt-auto">
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
                        href="https://www.ajmansewerage.ae/home"
                        target="_blank"
                      >
                        Live
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
                      {/* <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
                        href="https://github.com/blenderskool/blaze"
                        target="_blank"
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
                      </a> */}
                    </div>
                  </div>
                  <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
                    <Image
                      alt="Project image"
                      role="presentation"
                      aria-hidden="true"
                      src={project1}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
                  style={
                    {
                      "--highlight-color": "#10b981" as string,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                  <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
                  <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
                  <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-3 justify-between">
                      <h3 className="text-4xl font-semibold">wanya</h3>
                      {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                        2,178
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <span className="text-gray-400 text-xs">on GitHub</span>
                      </div> */}
                    </div>
                    <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
                      Wanya is a financial platform that empowers individuals
                      and businesses in Peru and Latin America by providing
                      secure, accessible, and transparent financial services. It
                      facilitates easy access to cryptocurrencies and digital
                      tools, promoting financial independence. With a focus on
                      security and simplicity, Wanya aims to be the leading
                      platform for financial inclusion in the region.
                    </p>
                    <div className="flex justify-between mt-auto">
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
                        href="https://wanya.io/"
                        target="_blank"
                      >
                        Live
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
                    </div>
                  </div>
                  <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
                    <Image
                      alt="Project image"
                      role="presentation"
                      aria-hidden="true"
                      src={wanyaIcon}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
                  style={
                    {
                      "--highlight-color": "#10b981" as string,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                  <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
                  <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
                  <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-3 justify-between">
                      <h3 className="text-4xl font-semibold">Wanya Android</h3>
                      {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                        2,178
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <span className="text-gray-400 text-xs">on GitHub</span>
                      </div> */}
                    </div>
                    <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
                      I am currently collaborating with a team to develop Wanya,
                      a trading platform utilizing React Native for
                      cross-platform mobile application development. Our
                      objective is to create a secure, user-friendly platform
                      that enables users to manage their finances and
                      cryptocurrencies efficiently. By leveraging React Native,
                      we aim to deliver a seamless experience across both iOS
                      and Android devices. Our platform offers features such as
                      effortless fund deposits, secure withdrawals, flexible
                      internal transfers, quick crypto swaps, and the ability to
                      buy and sell cryptocurrencies. We prioritize advanced
                      security measures, including two-factor authentication,
                      Face ID, and anti-phishing protocols, to protect user data
                      and assets. Additionally, Wanya provides comprehensive
                      support tailored for both beginners and experts, ensuring
                      a smooth and informative trading experience.{" "}
                    </p>
                    <div className="flex justify-between mt-auto">
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
                        href="https://play.google.com/store/apps/details?hl=as&id=com.wanya.app"
                        target="_blank"
                      >
                        Play store
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
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
                        href="https://apps.apple.com/pk/app/wanya/id6602891152"
                        target="_blank"
                      >
                        App Store
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
                    </div>
                  </div>
                  <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
                    <Image
                      alt="Project image"
                      role="presentation"
                      aria-hidden="true"
                      src={wanyaIconAndroid}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
                  style={
                    {
                      "--highlight-color": "#10b981" as string,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                  <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:opacity-20 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300"></div>
                  <div className="absolute bottom-36 fade-b -right-20 hidden sm:block"></div>
                  <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row gap-3 justify-between">
                      <h3 className="text-4xl font-semibold">Audio App</h3>
                      {/* <div className="flex items-center gap-1.5 text-gray-300 font-medium">
                        2,178
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                        </svg>
                        <span className="text-gray-400 text-xs">on GitHub</span>
                      </div> */}
                    </div>
                    <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">
                      I developed a dynamic web music app designed to enhance
                      the listening experience for users. This app allows users
                      to explore, create, and share personalized playlists with
                      ease. Featuring an intuitive interface, it offers seamless
                      navigation and quick access to a vast library of tracks.
                      <br />
                      <br />
                      The app also includes smart recommendations based on user
                      preferences, ensuring a tailored music journey. By
                      focusing on user-centric design, I aimed to create a
                      compelling and enjoyable musical experience.
                    </p>
                    <div className="flex justify-between mt-auto">
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2"
                        href="https://arslan-chaudhry99.github.io/killer-responsive-audio-app-with-javascript/"
                        target="_blank"
                      >
                        Live
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
                      <a
                        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50/10 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2"
                        href="https://github.com/Arslan-chaudhry99/killer-responsive-audio-app-with-javascript"
                        target="_blank"
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
                    </div>
                  </div>
                  <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal min-w-[560px] max-w-[560px] min-h-[329.45px] max-h-[329.45px]">
                    <Image
                      alt="Project image"
                      role="presentation"
                      aria-hidden="true"
                      src={audioApp}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-8 2xl:px-32 py-32">
              <div
                style={{ background: "rgba(39, 39, 42, .9)" }}
                className=" ring-1 ring-inset ring-gray-700/30 px-8 lg:px-16 py-16 md:py-24 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-dots fade-y opacity-70"></div>
                <div className="relative flex flex-col gap-10 md:flex-row items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="font-semibold tracking-tight text-gray-100 text-4xl leading-tight">
                      Let’s get
                      <span className="gradient-text bg-clip-text font-semibold md:text-5xl md:leading-none">
                        in touch
                      </span>
                    </h2>
                    <p className="mt-7 md:text-lg leading-relaxed font-medium text-gray-400 max-w-xl">
                      I’m open to hearing about new opportunities. Feel free to
                      reach out to me if you have a question, or just want to
                      say hi!
                    </p>
                  </div>
                  <div className="md:mt-0 w-full md:w-auto flex-shrink-0">
                    <Link
                      href="/contact/"
                      className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 w-full md:w-auto justify-center"
                    >
                      Start a conversation
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
                        className="w-3.5 h-3.5 group-hover/button:translate-x-0.5 transition-transform"
                      >
                        <path d="M5 12l14 0"></path>
                        <path d="M13 18l6 -6"></path>
                        <path d="M13 6l6 6"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
