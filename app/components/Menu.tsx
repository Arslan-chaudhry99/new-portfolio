"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AGENCY_NAME, navLinks, serviceCategories } from "../data/agency";

const menuTechnologies = Array.from(
  new Set(serviceCategories.flatMap((category) => category.technologies)),
);

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesButtonRef = useRef<HTMLDivElement>(null);
  const servicesPanelRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServicesMenu = () => {
    servicesCloseTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setShowMobileMenu(false);
    setShowMobileServices(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) {
        clearTimeout(servicesCloseTimerRef.current);
      }
    };
  }, []);

  const navLinkClass = (href: string, color: string) =>
    `px-4 lg:px-3 py-3 relative transition duration-500 hover:text-highlight focus:text-highlight ring-inset whitespace-nowrap ${
      isActive(href) ? `text-[${color}]` : "text-secondary"
    }`;

  return (
    <div className="relative">
      <div className="absolute h-48 inset-x-0 top-0 bg-dots fade-b" />
      <div className="fixed inset-0 z-40 transition-colors duration-300 pointer-events-none">
        <header className="absolute top-8 inset-x-0">
          <div className="relative container px-8 2xl:px-32 mx-auto flex items-center gap-4">
            <Link
              href="/"
              className="flex-shrink-0 pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
            >
              <Image
                src="/assess/logo.png"
                alt={AGENCY_NAME}
                width={140}
                height={48}
                className="h-9 sm:h-11 w-auto object-contain"
                priority
              />
            </Link>
            <div className="md:hidden ml-auto pointer-events-auto">
              <button
                className="pointer-events-auto inline-flex gap-2 h-10 px-4 font-medium text-sm justify-center items-center rounded-full text-secondary shadow-xl shadow-background/40 bg-surface ring-1 ring-inset ring-brand-border hover:bg-surface-2 backdrop-blur transition"
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
                <div className="absolute top-14 right-8 font-medium py-3 shadow-xl rounded-xl pointer-events-auto bg-surface ring-1 ring-inset ring-brand-border max-h-[70vh] overflow-y-auto w-72">
                  <nav className="flex flex-col">
                    {navLinks.map((link) =>
                      link.label === "Services" ? (
                        <div key={link.href}>
                          <button
                            type="button"
                            onClick={() =>
                              setShowMobileServices(!showMobileServices)
                            }
                            className={`w-full flex items-center justify-between px-6 py-3 transition duration-500 hover:text-highlight ${
                              isActive(link.href) ? "text-primary-light" : ""
                            }`}
                          >
                            {link.label}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-transform ${showMobileServices ? "rotate-180" : ""}`}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </button>
                          {showMobileServices && (
                            <div className="pb-2">
                              {serviceCategories.map((category) => (
                                <div key={category.id} className="px-4 py-2">
                                  <Link
                                    href={`/services#service-${category.id}`}
                                    className="block px-2 py-1.5 text-sm font-semibold text-primary-light hover:text-foreground"
                                  >
                                    {category.label}
                                  </Link>
                                  <ul className="mt-1 space-y-1">
                                    {category.items.map((item) => (
                                      <li key={item.id}>
                                        <Link
                                          href={`/services#service-${category.id}`}
                                          className="block px-2 py-1 text-xs text-muted hover:text-secondary"
                                        >
                                          {item.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <div className="px-6 pt-3">
                                <p className="text-xs font-semibold text-primary-light mb-2">
                                  Technologies
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {menuTechnologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-[9px] font-medium text-muted bg-surface-2 px-1.5 py-0.5 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`px-6 py-3 transition duration-500 hover:text-highlight ${
                            isActive(link.href) ? "text-primary-light" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      ),
                    )}
                  </nav>
                </div>
              )}
            </div>
            <nav className="pointer-events-auto hidden md:inline-flex ml-auto items-center px-2 text-sm rounded-full font-medium shadow-xl shadow-background/40 bg-surface ring-1 ring-inset ring-brand-border backdrop-blur-md">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.href}
                    ref={servicesButtonRef}
                    className="relative flex"
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={closeServicesMenu}
                  >
                    <button
                      type="button"
                      className={`${navLinkClass(link.href, link.color)} inline-flex items-center gap-1 !bg-transparent hover:!bg-transparent ${
                        isActive(link.href) || servicesOpen
                          ? "text-primary-light"
                          : ""
                      }`}
                      style={
                        isActive(link.href) || servicesOpen
                          ? { color: link.color }
                          : undefined
                      }
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      {(isActive(link.href) || servicesOpen) && (
                        <div
                          className="hidden md:block absolute inset-x-2 bottom-1 h-px rounded-full"
                          style={{
                            background: link.color,
                            opacity: 0.7,
                          }}
                        />
                      )}
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navLinkClass(link.href, link.color)}
                    style={isActive(link.href) ? { color: link.color } : undefined}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <div
                        className="hidden md:block absolute inset-x-0 bottom-0 h-px"
                        style={{
                          maskImage:
                            "linear-gradient(to right, transparent, black, transparent)",
                          opacity: 0.5,
                          background: link.color,
                        }}
                      />
                    )}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {servicesOpen && (
            <div
              ref={servicesPanelRef}
              className="pointer-events-auto hidden md:block absolute left-0 right-0 top-full pt-1"
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
              <div className="container px-8 2xl:px-32 mx-auto">
                <div className="rounded-2xl bg-surface ring-1 ring-inset ring-brand-border shadow-2xl shadow-background/60 p-6 lg:p-8">
                  <div className="flex gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-6">
                        {serviceCategories.map((category) => (
                          <div key={category.id}>
                            <Link
                              href={`/services#service-${category.id}`}
                              onClick={() => setServicesOpen(false)}
                              className="text-sm font-semibold text-primary-light hover:text-foreground transition-colors"
                            >
                              {category.label}
                            </Link>
                            <ul className="mt-3 space-y-2">
                              {category.items.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={`/services#service-${category.id}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="text-xs text-muted hover:text-secondary transition-colors leading-snug block"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-brand-border">
                        <p className="text-xs font-semibold text-primary-light mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {menuTechnologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-muted bg-surface-2 ring-1 ring-inset ring-brand-border rounded hover:text-secondary hover:bg-surface transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block w-56 xl:w-64 shrink-0">
                      <div className="rounded-2xl bg-primary/10 ring-1 ring-inset ring-primary/20 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-muted">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground">
                              Brijesh Pati
                            </p>
                            <span className="inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                              Client
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-xs text-muted leading-relaxed">
                          &ldquo;One of the best devs I have come across. Ever reliable,
                          great quality of code. Thorough &amp; professional&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Menu;
