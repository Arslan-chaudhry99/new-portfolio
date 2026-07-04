import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import arslan3 from "../app/assess/imgs/coding.jpg";
import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan22 from "../app/assess/imgs/miocreate_faceswap.jpeg";
import arslan5 from "../app/assess/imgs/Screenshot from 2024-07-16 12-39-20.png";
import multiimage from "../app/assess/imgs/Multi.png";
import wanyaAndroid from "./assess/imgs/wanya-android.png";
import videoThumb from "./assess/imgs/thumbnail.webp";
import seoImage from "./assess/imgs/multiServ.jpeg";

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

const serviceImages = {
  web: arslan3,
  app: wanyaAndroid,
  "3d": arslan22,
  video: videoThumb,
  seo: seoImage,
} as const;

const homeSectionClass = "container mx-auto px-8 2xl:px-32";

export default function Page() {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />

        <main className="relative min-h-screen">
          {/* Hero */}
          <section className={`relative ${homeSectionClass} h-[100dvh] min-h-[640px] max-h-[900px] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 lg:gap-10 pt-24 pb-6 sm:pb-8 box-border overflow-hidden`}>
            <div className="w-full lg:w-[48%] xl:max-w-xl shrink-0 order-1 lg:order-1 flex flex-col justify-center">
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
            <div className="w-full lg:w-[52%] h-[42vh] sm:h-[45vh] lg:h-full lg:max-h-[calc(100dvh-8rem)] min-h-[220px] shrink-0 flex items-end lg:items-center justify-center lg:justify-end order-2 lg:order-2 overflow-hidden mt-auto lg:mt-0">
              <div className="relative h-full max-h-full aspect-square w-auto max-w-[min(100%,90vw)] sm:max-w-full overflow-hidden">
                <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(black_55%,transparent_75%)] rounded-full pointer-events-none" />
                <div className="absolute inset-0 [mask-image:radial-gradient(black_42%,transparent_57%)] rounded-full pointer-events-none">
                  <div className="absolute inset-[12%] highlight mask-dots rounded-full" />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/assess/glob_image.png"
                    alt="Global digital solutions"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 520px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Marquee */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-dots fade-y" />
            <div className="py-16 inline-flex min-w-full w-max relative">
              {[0, 1].map((row) => (
                <div
                  key={row}
                  className={`min-w-full justify-around flex-shrink-0 ${
                    row === 0 ? "animate-large-marquee" : "absolute top-16 inset-x-0 animate-large-marquee2"
                  }`}
                  style={{ display: "inline-flex" }}
                >
                  {marqueeImages.map((item, i) => (
                    <div key={i} className="flex-shrink-0 px-6">
                      <div className="relative group hover:scale-110 transition duration-300 rounded-xl shadow-lg shadow-background/50 hover:shadow-xl overflow-hidden -rotate-2 hover:-rotate-1">
                        <div className="scale-110 h-80 aspect-[8/10] group-hover:scale-100 transition-transform duration-300">
                          <Image
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                            src={item}
                            className="max-w-full h-full object-cover object-left"
                          />
                          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" aria-hidden="true" />
                        </div>
                        <div className="absolute inset-0 shadow-[0_1.5px_0_inset_rgba(255,255,255,0.3)] rounded-xl z-10 pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
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
                  image={serviceImages[service.icon]}
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
