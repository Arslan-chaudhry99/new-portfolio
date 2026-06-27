"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AGENCY_NAME, navLinks } from "../data/agency";
import arslan22 from "../assess/imgs/miocreate_faceswap.jpeg";

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollThreshold = scrollHeight * 0.1;
    setIsScrolled(scrollPosition >= scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const navLinkClass = (href: string, color: string) =>
    `px-4 lg:px-3 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset whitespace-nowrap ${
      isActive(href) ? `text-[${color}]` : "text-gray-300"
    }`;

  return (
    <div className="relative">
      <div className="absolute h-48 inset-x-0 top-0 bg-dots fade-b" />
      <div className="fixed inset-0 z-40 transition-colors duration-300 pointer-events-none">
        <header className="absolute top-8 inset-x-0">
          <div className="relative container px-8 2xl:px-32 mx-auto flex items-center">
            {isScrolled && (
              <div className="flex-shrink-0 pointer-events-auto">
                <Link
                  href="/"
                  className="rounded-full ring-2 ring-gray-800 flex focus:outline-none focus-visible:ring-blue-300 focus-visible:ring-offset-2 ring-offset-gray-950"
                >
                  <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-10 w-10 rounded-full shadow-xl shadow-black/20 overflow-hidden">
                    <Image
                      alt={AGENCY_NAME}
                      src={arslan22}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                </Link>
              </div>
            )}
            <div className="md:hidden ml-auto pointer-events-auto">
              <button
                className="pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-gray-300 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 backdrop-blur transition"
                style={{ background: "rgba(39, 39, 42, .9)" }}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <span>Menu</span>
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
              </button>
              {showMobileMenu && (
                <div
                  className="absolute top-14 right-8 font-medium py-3 shadow-xl rounded-xl pointer-events-auto ring-1 ring-inset ring-gray-700/20 max-h-[70vh] overflow-y-auto"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <nav className="flex flex-col">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-6 py-3 transition duration-500 hover:text-highlight ${
                          isActive(link.href) ? "text-sky-400" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
            <nav
              style={{ background: "rgba(39, 39, 42, .9)" }}
              className="pointer-events-auto hidden lg:inline-flex ml-auto px-2 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navLinkClass(link.href, link.color)}
                  style={isActive(link.href) ? { color: link.color } : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div
                      className="hidden lg:block absolute inset-x-0 bottom-0 h-px"
                      style={{
                        maskImage:
                          "linear-gradient(to right, transparent, black, transparent)",
                        opacity: 0.5,
                        background: link.color,
                      }}
                    />
                  )}
                </Link>
              ))}
            </nav>
            <nav
              style={{ background: "rgba(39, 39, 42, .9)" }}
              className="pointer-events-auto hidden md:inline-flex lg:hidden ml-auto px-2 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
            >
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-3 relative transition duration-500 text-gray-300 hover:text-highlight"
                  style={isActive(link.href) ? { color: link.color } : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav
              style={{ background: "rgba(39, 39, 42, .9)" }}
              className="pointer-events-auto hidden md:inline-flex ml-4 items-center px-3 h-11 text-sm rounded-full font-medium shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 backdrop-blur-md"
            >
              <a
                href="https://github.com/Arslan-chaudhry99/"
                className={`px-3 py-3 relative transition duration-500 hover:text-highlight ${
                  activeBtn === 2 ? "text-white" : "text-gray-300"
                }`}
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveBtn(2)}
                onMouseLeave={() => setActiveBtn(0)}
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
                >
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arslan-jameel/"
                className={`px-3 py-3 relative transition duration-500 hover:text-highlight ${
                  activeBtn === 3 ? "text-blue-400" : "text-gray-300"
                }`}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveBtn(3)}
                onMouseLeave={() => setActiveBtn(0)}
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
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 0 0-4 0" />
                </svg>
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Menu;
