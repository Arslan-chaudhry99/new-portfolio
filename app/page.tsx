import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import arslan3 from "../app/assess/imgs/coding.jpg";
import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan22 from "../app/assess/imgs/miocreate_faceswap.jpeg";
import arslan5 from "../app/assess/imgs/Screenshot from 2024-07-16 12-39-20.png";
import multiimage from "../app/assess/imgs/Multi.png";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ClientLogos from "./components/ClientLogos";
import ServiceCard from "./components/ServiceCard";
import FAQAccordion from "./components/FAQAccordion";
import ReviewsSection from "./components/ReviewsSection";
import {
  AGENCY_NAME,
  homeHero,
  clientLogos,
  servicesSection,
  servicesOverview,
  homeFaq,
  homeReviews,
} from "./data/agency";

export const metadata: Metadata = {
  title: `${AGENCY_NAME} — Digital Agency`,
  description: homeHero.subheading,
};

const marqueeImages = [arslan4, multiimage, arslan3, arslan5, arslan22];

const homeSectionClass = "container mx-auto px-8 2xl:px-32";

export default function Page() {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />

        <main className="relative min-h-screen">
          {/* Hero */}
          <section className="relative h-[100dvh] min-h-[640px] max-h-[900px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 w-full">
              <div className="absolute inset-0 bg-dots opacity-25" />
            </div>

            <div className={`relative z-10 ${homeSectionClass} h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-12 pt-24 pb-6 sm:pb-8`}>
              <div className="w-full max-w-xl">
              <h1 className="font-semibold tracking-tight text-foreground text-4xl leading-[1.2] sm:text-[2.5rem] md:text-5xl lg:leading-tight">
                {homeHero.heading.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gradient-text bg-clip-text font-semibold">
                  {homeHero.heading.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed font-medium text-secondary max-w-lg">
                {homeHero.subheading}
              </p>
              <div className="mt-6 sm:mt-8">
              <Link
                href={homeHero.cta.href}
                className="group/button inline-flex items-center gap-0 rounded-full hover:gap-2 hover:scale-[1.03] focus:outline-none transition-all duration-300 ring-offset-background bg-foreground text-background shadow-lg shadow-background/30 hover:opacity-95 focus:ring-1 ring-primary-light focus:ring-offset-2 text-sm font-medium pl-4 pr-4 group-hover/button:pr-3 py-2 w-fit overflow-hidden"
              >
                {homeHero.cta.label}
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
                  className="w-0 h-3.5 opacity-0 -translate-x-2 shrink-0 overflow-hidden transition-all duration-300 ease-out group-hover/button:w-3.5 group-hover/button:opacity-100 group-hover/button:translate-x-0"
                  aria-hidden="true"
                >
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </Link>
              <ClientLogos
                heading={clientLogos.heading}
                brands={clientLogos.brands}
              />
              </div>
              </div>

              <div className="relative hidden lg:block w-full max-w-lg xl:max-w-xl shrink-0">
                <Image
                  src={homeHero.heroImage}
                  alt=""
                  width={1424}
                  height={1104}
                  priority
                  sizes="576px"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Showcase Video */}
          <section className="relative w-full mt-12 sm:mt-16 lg:mt-20">
            <div className="relative w-full overflow-hidden bg-black">
              <video
                className="w-full aspect-video min-h-[280px] sm:min-h-[420px] lg:min-h-[560px] object-cover"
                src={homeHero.showcaseVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Studio showcase reel"
              />
            </div>
          </section>

          {/* Services */}
          <section id="services" className={`${homeSectionClass} mt-32`}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                {servicesSection.heading.slice(0, -1)}
                <span className="gradient-text bg-clip-text">
                  {servicesSection.heading.slice(-1)}
                </span>
              </h2>
              <p className="mt-4 text-muted font-medium leading-relaxed">
                {servicesSection.subheading}
              </p>
              <Link
                href={servicesSection.cta.href}
                className="group/button inline-flex items-center gap-2 mt-8 rounded-full ring-1 ring-brand-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:ring-primary-light/40 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground/10">
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 18l6-6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </span>
                {servicesSection.cta.label}
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-14">
              {servicesOverview.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                  href={service.href}
                />
              ))}
            </div>
          </section>

          <ReviewsSection {...homeReviews} />

          {/* FAQ */}
          <section className={`${homeSectionClass} mt-32`}>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-center">
              FAQ
            </h2>
            <div className="mt-10 w-full">
              <FAQAccordion items={homeFaq} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
