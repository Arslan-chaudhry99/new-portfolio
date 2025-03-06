"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import arslan1 from "../app/assess/imgs/Vidnoz_AI_Headshots.png";
import arslan2 from "../app/assess/imgs/FB_IMG_1718445386247.jpg";
import arslan3 from "../app/assess/imgs/coding.jpg";
import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan22 from "../assess/imgs/miocreate_faceswap.jpeg";
import arslan5 from "../app/assess/imgs/Screenshot from 2024-07-16 12-39-20.png";
import arslan6 from "../app/assess/imgs/jsmkl.png";
import codingPicture from "../app/assess/imgs/thumbnail.webp";
import project1 from "./assess/imgs/ajman.png";
import audioApp from "./assess/imgs/audioApp.png";

import multiServ from "./assess/imgs/multiServ.jpeg";
import txLabz from "./assess/imgs/txlabz.jpeg";
import multiimage from "../app/assess/imgs/Multi.png";
import theHexa from "./assess/imgs/thehexatown.jpeg";
import zechTech from "./assess/imgs/zech.jpeg";
import redux from "./assess/imgs/redux.png";

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState("");
  const [activeRoute, setActiveRoute] = useState(0);
  const style = {
    backgroundColor: "#8b5cf6",
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollThreshold = scrollHeight * 0.1;

    if (scrollPosition >= scrollThreshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
    <>
      <div className="relative">
        <div className="absolute h-48 inset-x-0 top-0 bg-dots fade-b"></div>
        <div className="fixed inset-0 z-40 transition-colors duration-300 pointer-events-none">
          <header className="absolute top-8 inset-x-0">
            <div className="relative container px-8 2xl:px-32 mx-auto flex items-center">
              {isScrolled && (
                <div className="flex-shrink- pointer-events-auto">
                  <div
                    className="focus-within:!opacity-100"
                    style={{ opacity: 1 }}
                  >
                    <Link
                      href="/"
                      aria-current="page"
                      className="rounded-full ring-2 ring-gray-800 flex focus:outline-none focus-visible:ring-blue-300 focus-visible:ring-offset-2 ring-offset-gray-950"
                    >
                      <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-10 w-10 rounded-full shadow-xl shadow-black/20">
                        <div style={{ maxWidth: "80px", display: "block" }}>
                          <Image
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            style={{
                              maxWidth: "100%",
                              display: "block",
                              position: "static",
                            }}
                            src={arslan22}
                          />
                        </div>
                        <Image
                          aria-hidden="true"
                          data-placeholder-image=""
                          style={{
                            opacity: 0,
                            transition: "opacity 500ms linear 0s",
                          }}
                          decoding="async"
                          src={arslan22}
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              <div className="md:hidden ml-auto pointer-events-auto">
                <button
                  className="pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-gray-300  shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 backdrop-blur transition"
                  style={{ background: "rgba(39, 39, 42, .9) !important" }}
                  onClick={() => {
                    setShowMobileMenu(!showMobileMenu);
                  }}
                >
                  <span style={{ opacity: 1, transform: "none" }}>Menu</span>
                  <div style={{ transform: "none" }}>
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
                      className="w-3.5 h-3.5"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>
                {showMobileMenu && (
                  <div
                    className="absolute top-14 right-8 font-medium py-3  shadow-xl rounded-xl pointer-events-auto ring-1 ring-inset ring-gray-700/20"
                    style={{
                      opacity: 1,
                      transform: "none",
                      background: "rgba(39, 39, 42, .9)",
                    }}
                  >
                    <nav className="flex flex-col">
                      <Link
                        href="/"
                        className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
                      >
                        Home
                      </Link>
                      <Link
                        href="/projects/"
                        className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
                      >
                        Projects
                      </Link>
                      {/* <Link
                        href="/blogs/"
                        className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
                      >
                        Blogs
                      </Link> */}
                      <Link
                        href="/contact"
                        className="px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined"
                      >
                        Contact
                      </Link>
                    </nav>
                    <nav className="flex pr-9 pl-3">
                      <a
                        href="https://twitter.com/blenderskool"
                        className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
                        aria-label="Twitter profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={
                          {
                            "--highlight-color": "rgb(14, 165, 233)" as string,
                          } as React.CSSProperties
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tabler-icon tabler-icon-brand-twitter"
                        >
                          <path d="M22 4.01c-1 .49-1.98 .689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245 .083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Arslan-chaudhry99/"
                        className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
                        aria-label="GitHub profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={
                          {
                            "--highlight-color": "rgb(255, 255, 255)" as string,
                          } as React.CSSProperties
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tabler-icon tabler-icon-brand-github"
                        >
                          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/arslan-jameel/"
                        className="px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset text-gray-300"
                        aria-label="LinkedIn profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={
                          {
                            "--highlight-color": "rgb(59, 130, 246)" as string,
                          } as React.CSSProperties
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tabler-icon tabler-icon-brand-linkedin"
                        >
                          <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"></path>
                          <path d="M8 11v5"></path>
                          <path d="M8 8v.01"></path>
                          <path d="M12 16v-5"></path>
                          <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
                        </svg>
                      </a>
                    </nav>
                  </div>
                )}
              </div>
              <nav
                style={{ background: "rgba(39, 39, 42, .9)" }}
                className="pointer-events-auto hidden md:inline-flex ml-auto  px-3.5 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
              >
                <Link
                  href="/"
                  className={`px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined  ${
                    pathname === "/" ? "text-[#0ea5e9]" : "text-gray-300"
                  }`}
                >
                  Home
                  {pathname === "/" && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#0ea5e9",
                      }}
                    ></div>
                  )}
                </Link>
                <Link
                  href="/projects/"
                  className={`px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined  ${
                    pathname === "/projects"
                      ? "text-[#10b981]"
                      : "text-gray-300"
                  }`}
                >
                  Projects
                  {pathname === "/projects" && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#10b981",
                      }}
                    ></div>
                  )}
                </Link>
             

                <Link
                  href="/contact/"
                  className={`px-6 lg:px-3.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset undefined  ${
                    pathname === "/contact" ? "text-[#a78bfa]" : "text-gray-300"
                  }`}
                >
                  Contacts
                  {pathname === "/contact" && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#a78bfa",
                      }}
                    ></div>
                  )}
                </Link>
              </nav>
              <nav
                style={{ background: "rgba(39, 39, 42, .9)" }}
                className="pointer-events-auto hidden md:inline-flex ml-4  items-center px-3 h-11 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
              >
                <a
                  href="https://twitter.com/blenderskool"
                  style={
                    {
                      "--highlight-color": "rgb(14, 165, 233)" as string,
                    } as React.CSSProperties
                  }
                  className={`px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset ${
                    activeBtn === 1 ? "text-[#0ea5e9]" : "text-gray-300"
                  }`}
                  aria-label="Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setActiveBtn(1);
                  }}
                  onMouseLeave={() => {
                    setActiveBtn(0);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-twitter"
                  >
                    <path d="M22 4.01c-1 .49-1.98 .689-3 .99-1.121-1.265-2.783-1.335-4.38-.737s-2.643 2.06-2.62 3.737v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
                  </svg>
                  {activeBtn === 1 && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#0ea5e9",
                      }}
                    ></div>
                  )}
                </a>

                <a
                  href="https://github.com/Arslan-chaudhry99/"
                  style={
                    {
                      "--highlight-color": "rgb(255, 255, 255)" as string,
                    } as React.CSSProperties
                  }
                  className={`px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset  ${
                    activeBtn === 2 ? "text-[#10b981]" : "text-gray-300"
                  }`}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setActiveBtn(2);
                  }}
                  onMouseLeave={() => {
                    setActiveBtn(0);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  {activeBtn === 2 && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#10b981",
                      }}
                    ></div>
                  )}
                </a>
                <a
                  href="https://www.linkedin.com/in/arslan-jameel/"
                  style={
                    {
                      "--highlight-color": "rgb(59, 130, 246)" as string,
                    } as React.CSSProperties
                  }
                  className={`px-3 lg:px-2.5 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset ${
                    activeBtn === 3 ? "text-[#a78bfa]" : "text-gray-300 "
                  }`}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setActiveBtn(3);
                  }}
                  onMouseLeave={() => {
                    setActiveBtn(0);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                  {activeBtn === 3 && (
                    <div
                      className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-highlight"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: "#a78bfa",
                      }}
                    ></div>
                  )}
                </a>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Menu;
