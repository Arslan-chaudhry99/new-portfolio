import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import arslan3 from "../app/assess/imgs/coding.jpg";
import arslan4 from "../app/assess/imgs/FB_IMG_1718445502672.jpg";
import arslan22 from "../app/assess/imgs/miocreate_faceswap.jpeg";
import arslan5 from "../app/assess/imgs/Screenshot from 2024-07-16 12-39-20.png";
import multiimage from "../app/assess/imgs/Multi.png";
import project1 from "./assess/imgs/ajman.png";
import audioApp from "./assess/imgs/audioApp.png";
import wanyaIcon from "./assess/imgs/wanya.png";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import ArrowListItem from "./components/ArrowListItem";
import {
  AGENCY_NAME,
  homeHero,
  servicesOverview,
  technologies,
  featuredProjects,
  testimonials,
  homeCta,
} from "./data/agency";

export const metadata: Metadata = {
  title: `${AGENCY_NAME} — Digital Agency`,
  description: homeHero.subheading,
};

const marqueeImages = [arslan4, multiimage, arslan3, arslan5, arslan22];
const projectImages = [project1, wanyaIcon, audioApp];

export default function Page() {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />

        <main className="relative min-h-screen">
          {/* Hero */}
          <section className="relative container mx-auto h-[100dvh] min-h-[600px] max-h-[900px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10 px-8 xl:px-32 pt-24 pb-8 box-border overflow-hidden">
            <div className="w-full lg:w-[48%] xl:max-w-xl shrink-0 order-2 lg:order-1">
              <h1 className="font-semibold tracking-tight text-gray-100 text-3xl sm:text-4xl md:text-5xl leading-tight">
                {homeHero.heading.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="gradient-text bg-clip-text font-semibold">
                  {homeHero.heading.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed font-medium text-gray-400 max-w-lg">
                {homeHero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row mt-7 sm:mt-8 gap-4">
                <Link
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center"
                  href={homeHero.primaryCta.href}
                >
                  {homeHero.primaryCta.label}
                </Link>
                <Link
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center !text-white"
                  href={homeHero.secondaryCta.href}
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  {homeHero.secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[52%] h-[38vh] sm:h-[42vh] lg:h-full lg:max-h-[calc(100dvh-8rem)] min-h-0 flex items-center justify-center lg:justify-end order-1 lg:order-2 overflow-hidden">
              <div className="relative h-full max-h-full aspect-square w-auto max-w-full overflow-hidden">
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
                      <div className="relative group hover:scale-110 transition duration-300 rounded-xl shadow-lg shadow-black/30 hover:shadow-xl overflow-hidden -rotate-2 hover:-rotate-1">
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

          {/* Services Overview */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <h2 className="text-3xl font-semibold tracking-tight !text-white">
              Our Services
            </h2>
            <p className="mt-4 text-gray-400 font-medium max-w-2xl">
              End-to-end digital solutions across web, mobile, and immersive 3D experiences.
            </p>
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {servicesOverview.map((service) => (
                <div
                  key={service.title}
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative overflow-hidden"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-70" />
                  <div
                    className="absolute -top-1/2 -right-1/2 h-full aspect-square bg-gradient-to-c from-highlight to-transparent to-70% opacity-20"
                    style={{ "--highlight-color": service.highlightColor } as React.CSSProperties}
                  />
                  <div className="relative">
                    <h3 className="text-xl font-semibold !text-white">{service.title}</h3>
                    <p className="mt-4 text-gray-400 font-medium text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <p className="mt-6 text-sm font-medium text-gray-300">Key Services:</p>
                    <ul className="mt-3 space-y-2">
                      {service.keyServices.map((item) => (
                        <ArrowListItem key={item}>
                          <span className="text-sm">{item}</span>
                        </ArrowListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
              >
                Explore all services
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Technologies */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight !text-white">
                  {technologies.heading}
                </h2>
                <p className="mt-4 text-gray-400 font-medium max-w-2xl">
                  {technologies.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                  {technologies.categories.map((cat) => (
                    <div key={cat.title}>
                      <h3 className="text-lg font-semibold text-sky-400">{cat.title}</h3>
                      <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                        {cat.items.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="container mx-auto px-8 2xl:px-32 mt-48">
            <h2 className="text-3xl font-semibold tracking-tight !text-white">
              Projects That Drive Real Business Results
            </h2>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end justify-between">
              <p className="mt-6 text-gray-400 font-medium max-w-2xl leading-relaxed">
                Selected work showcasing our expertise across web, mobile, and 3D development.
              </p>
              <Link
                href="/portfolio"
                className="flex-shrink-0 font-medium inline-flex items-center gap-2 text-green-300 hover:underline hover:text-sky-400 underline-offset-4 transition"
              >
                View portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8">
              {featuredProjects.map((project, i) => (
                <div
                  key={project.title}
                  className="flex flex-col rounded-2xl relative overflow-hidden shadow-md hover:shadow-xl transition group bg-[#1b1b1e] ring-1 ring-gray-700/30 ring-inset"
                  style={{ "--highlight-color": project.highlightColor } as React.CSSProperties}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div className="absolute z-20 bottom-20 -right-1/2 h-[101%] aspect-square bg-gradient-to-c from-highlight to-[70%] to-transparent rounded-full opacity-30 sm:group-hover:opacity-30 group-hover:scale-150 transition duration-300" />
                  <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
                    <p className="text-gray-200/60 font-medium text-sm my-6 leading-[1.8] tracking-wide">
                      {project.description}
                    </p>
                  </div>
                  {projectImages[i] && (
                    <div className="relative z-20 lg:mix-blend-luminosity group-hover:mix-blend-normal">
                      <Image
                        alt={project.title}
                        src={projectImages[i]}
                        className="w-full object-cover"
                        style={{ maxHeight: 280 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-8 2xl:px-32 mt-48">
            <h2 className="text-3xl font-semibold tracking-tight !text-white text-center">
              Trusted by Businesses Worldwide
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <blockquote className="relative">
                    <p className="text-gray-300 font-medium text-sm leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6 text-sm font-semibold text-sky-400">
                      — {t.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </section>

          <CTASection {...homeCta} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
