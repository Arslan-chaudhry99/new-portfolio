"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AGENCY_NAME } from "../data/agency";

type ServiceItem = {
  id: string;
  label: string;
  content: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

type LandingServicesTabsProps = {
  heading: string;
  categories: ServiceCategory[];
};

export default function LandingServicesTabs({
  heading,
  categories,
}: LandingServicesTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tabsRef = useRef<HTMLDivElement>(null);

  const getScrollOffset = () => {
    const tabsHeight = tabsRef.current?.offsetHeight ?? 56;
    return 96 + tabsHeight + 48;
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash.startsWith("service-")) return;

    const categoryId = hash.replace("service-", "");
    if (!categories.some((cat) => cat.id === categoryId)) return;

    const timer = window.setTimeout(() => {
      setActiveCategory(categoryId);
      const el = sectionRefs.current[categoryId];
      if (!el) return;

      const top =
        el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [categories]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(cat.id);
          }
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = sectionRefs.current[id];
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  if (!categories.length) return null;

  return (
    <section id="landing-services" className="container mx-auto px-8 2xl:px-32 mt-24 lg:mt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground leading-snug">
          At{" "}
          <span className="gradient-text bg-clip-text">{AGENCY_NAME}</span>,{" "}
          {heading}
        </h2>
      </div>

      <div
        ref={tabsRef}
        className="sticky top-24 z-20 mt-12 lg:mt-16 -mx-8 px-8 2xl:-mx-32 2xl:px-32 py-4 bg-background/80 backdrop-blur-md border-b border-brand-border"
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToCategory(cat.id)}
                className={`pb-1 text-sm sm:text-base font-medium transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "text-foreground border-primary-light"
                    : "text-muted border-transparent hover:text-secondary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 space-y-32 lg:space-y-40">
        {categories.map((category) => (
            <div
              key={category.id}
              id={`service-${category.id}`}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
              className="scroll-mt-52 pt-8"
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="relative min-h-[200px]">
                  <span
                    className="absolute -top-2 lg:-top-6 left-0 text-[7rem] sm:text-[9rem] lg:text-[11rem] font-bold leading-none blur-md select-none pointer-events-none"
                    style={{ color: "rgba(25, 118, 255, 0.55)" }}
                    aria-hidden="true"
                  >
                    {category.number}
                  </span>
                  <div className="relative pt-10 lg:pt-14">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                      {category.title.split(" ").length > 2 ? (
                        <>
                          {category.title.split(" ").slice(0, 2).join(" ")}
                          <br />
                          {category.title.split(" ").slice(2).join(" ")}
                        </>
                      ) : (
                        category.title
                      )}
                    </h3>
                    <p className="mt-5 text-muted font-medium leading-relaxed max-w-md">
                      {category.description}
                    </p>
                    <Link
                      href={`/services/${category.id}`}
                      className="group/button inline-flex items-center gap-0 mt-6 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-md hover:gap-1.5 hover:scale-[1.03] transition-all duration-300 overflow-hidden"
                    >
                      Get started
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
                        className="w-0 h-3 opacity-0 -translate-x-2 shrink-0 overflow-hidden transition-all duration-300 ease-out group-hover/button:w-3 group-hover/button:opacity-100 group-hover/button:translate-x-0"
                        aria-hidden="true"
                      >
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${category.id}`}
                      className="group/card relative flex min-h-[120px] sm:min-h-[130px] flex-col justify-between rounded-2xl border border-brand-border bg-surface px-5 py-5 sm:px-6 sm:py-6 text-left transition-all duration-200 hover:border-primary-light/25 hover:bg-surface-2/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                    >
                      <span className="text-sm sm:text-base font-semibold leading-snug text-foreground pr-2">
                        {item.label}
                      </span>
                      <span className="mt-4 text-xs font-medium text-primary-light opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
                        Learn more →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
