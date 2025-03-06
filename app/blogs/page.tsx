"use client";
import { useState } from "react";
import Image from "next/image";
import arslan1 from "../assess/imgs/Vidnoz_AI_Headshots.png";
import arslan2 from "../assess/imgs/FB_IMG_1718445386247.jpg";
import arslan3 from "../assess/imgs/FB_IMG_1718445434529.jpg";
import arslan4 from "../assess/imgs/FB_IMG_1718445502672.jpg";
import arslan5 from "../assess/imgs/FB_IMG_1718445513140.jpg";
import arslan6 from "../assess/imgs/FB_IMG_1718445535404.jpg";
import codingPicture from "../assess/imgs/thumbnail.webp";
import project1 from "./assess/imgs/ajman.png";
import audioApp from "./assess/imgs/audioApp.png";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import dynamic from 'next/dynamic';

const Project = () => {
  return (
    <>
      <div id="___gatsby">
        <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <Menu />
          <main className="relative min-h-screen">
            <section className="md:h-screen-1/2 pt-56 pb-20 md:pt-56 md:pb-0 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-semibold tracking-tight leading-tight">
                My blog
              </h1>
              <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-2xl">
                A place where I share my learnings and ideas about technologies
              </p>
            </section>
            <section className="container mx-auto px-8 2xl:px-32 pt-16 pb-48 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="w-full h-full lg:first:row-span-3">
                  <div
                    className="group bg-gray-800/20 rounded-2xl relative overflow-hidden shadow-md hover:shadow-2xl hover:bg-gray-800/50 transition w-full h-full block @container"
                    style={
                      {
                        "--highlight-color": "#3fa4ff" as string,
                        background: "rgba(39, 39, 42, .2)",
                      } as React.CSSProperties
                    }
                  >
                    <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>

                    <div className="relative flex h-full flex-col">
                      <div className="flex flex-col h-full p-8 pb-5 @lg:p-12">
                        <div className="flex flex-col h-full p-8 pb-5 @lg:p-12">
                          <h2 className="font-semibold mb-6 lg:leading-normal text-xl lg:text-3xl">
                            <a href="/blog/full-page-theme-toggle-animation-with-view-transitions-api/">
                              <span className="z-10 absolute inset-0"></span>
                              Full-page theme toggle animation with{" "}
                              <span className="text-highlight">
                                View Transitions API
                              </span>
                            </a>
                          </h2>
                          <p className="hidden @lg:block text-gray-400 font-medium tracking-wide mb-4">
                            The Telegram app has a very interesting animation
                            for its dark mode toggle where the dark theme grows
                            from the switch…
                          </p>
                          <div className="text-gray-400 font-medium mt-auto flex gap-2 @lg:text-gray-500 text-sm @lg:text-base @lg:gap-3">
                            <time>November 2, 2023</time>
                            <span aria-hidden="true">•</span>
                            <span>9 min read</span>
                          </div>
                        </div>
                        <div className="relative mt-auto">
                          <div
                            data-gatsby-image-wrapper
                            className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform origin-top"
                          >
                            <div
                              style={{ maxWidth: "1387px", display: "block" }}
                            >
                              <Image
                                alt=""
                                role="presentation"
                                aria-hidden="true"
                                src={arslan1}
                                style={{
                                  maxWidth: "100%",
                                  display: "block",
                                  position: "static",
                                }}
                              />
                            </div>
                            <Image
                              aria-hidden="true"
                              data-placeholder-image=""
                              style={{
                                opacity: 0,
                                transition: "opacity 500ms linear 0s",
                                objectFit: "cover",
                              }}
                              decoding="async"
                              src={arslan1}
                              layout="fill"
                              alt=""
                            />
                            <Image
                              width="1387"
                              height="816"
                              data-main-image=""
                              style={{ objectFit: "cover", opacity: 1 }}
                              sizes="(min-width: 1387px) 1387px, 100vw"
                              decoding="async"
                              loading="lazy"
                              src={arslan1}                              alt="Full-page theme toggle animation with View Transitions API"
                            />
                          </div>
                          <div className="absolute inset-0 overflow-hidden opacity-10">
                            <div className="absolute -inset-x-6 inset-y-4 bg-noise [mask-image:linear-gradient(transparent,white,transparent)] -rotate-6 -translate-y-full"></div>
                          </div>
                          <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>

                <div className="relative flex h-full">
                  <div className="flex flex-col h-full p-7 w-[45%]">
                    <h2 className="font-semibold mb-6 @lg:leading-normal text-lg">
                      <a href="/blog/internals-of-async-await-in-javascript/">
                        <span className="z-10 absolute inset-0"></span>
                        Internals of{" "}
                        <span className="text-highlight">async / await</span> in
                        JavaScript
                      </a>
                    </h2>
                    <div className="text-gray-400 font-medium mt-auto flex gap-2 text-xs">
                      <time dateTime="2023-07-02T00:00:00.000Z">
                        July 2, 2023
                      </time>
                      <span aria-hidden="true">•</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                  <div className="relative w-[55%]">
                    <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform h-full object-cover origin-left">
                      <div style={{ maxWidth: "1387px", display: "block" }}>
                        <Image
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src=""
                          style={{
                            maxWidth: "100%",
                            display: "block",
                            position: "static",
                          }}
                         layout="fill"
                        />
                      </div>
                      <Image
                        aria-hidden="true"
                        data-placeholder-image=""
                        style={{
                          opacity: 0,
                          transition: "opacity 500ms linear 0s",
                          objectFit: "cover",
                        }}
                        decoding="async"
                        src=""
                        alt=""
                       layout="fill"
                      />
                    </div>
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                      <div
                        className="absolute -inset-x-6 inset-y-4 bg-noise"
                        style={{
                          maskImage:
                            "linear-gradient(transparent, white, transparent)",
                          transform: "rotate(-6deg) translateY(-100%)",
                        }}
                      ></div>
                    </div>

                    <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                </div>
                <div className="relative flex h-full">
                  <div className="flex flex-col h-full p-7 w-[45%]">
                    <h2 className="font-semibold mb-6 @lg:leading-normal text-lg">
                      <a href="/blog/internals-of-async-await-in-javascript/">
                        <span className="z-10 absolute inset-0"></span>
                        Internals of{" "}
                        <span className="text-highlight">async / await</span> in
                        JavaScript
                      </a>
                    </h2>
                    <div className="text-gray-400 font-medium mt-auto flex gap-2 text-xs">
                      <time dateTime="2023-07-02T00:00:00.000Z">
                        July 2, 2023
                      </time>
                      <span aria-hidden="true">•</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                  <div className="relative w-[55%]">
                    <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform h-full object-cover origin-left">
                      <div style={{ maxWidth: "1387px", display: "block" }}>
                        <Image
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src=""
                          style={{
                            maxWidth: "100%",
                            display: "block",
                            position: "static",
                          }}
                         layout="fill"
                        />
                      </div>
                      <Image
                        aria-hidden="true"
                        data-placeholder-image=""
                        style={{
                          opacity: 0,
                          transition: "opacity 500ms linear 0s",
                          objectFit: "cover",
                        }}
                        decoding="async"
                        src={''}
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                      <div
                        className="absolute -inset-x-6 inset-y-4 bg-noise"
                        style={{
                          maskImage:
                            "linear-gradient(transparent, white, transparent)",
                          transform: "rotate(-6deg) translateY(-100%)",
                        }}
                      ></div>
                    </div>

                    <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                </div>
                <div className="relative flex h-full">
                  <div className="flex flex-col h-full p-7 w-[45%]">
                    <h2 className="font-semibold mb-6 @lg:leading-normal text-lg">
                      <a href="/blog/internals-of-async-await-in-javascript/">
                        <span className="z-10 absolute inset-0"></span>
                        Internals of{" "}
                        <span className="text-highlight">async / await</span> in
                        JavaScript
                      </a>
                    </h2>
                    <div className="text-gray-400 font-medium mt-auto flex gap-2 text-xs">
                      <time dateTime="2023-07-02T00:00:00.000Z">
                        July 2, 2023
                      </time>
                      <span aria-hidden="true">•</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                  <div className="relative w-[55%]">
                    <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform h-full object-cover origin-left">
                      <div style={{ maxWidth: "1387px", display: "block" }}>
                        <Image
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                          src=""
                          style={{
                            maxWidth: "100%",
                            display: "block",
                            position: "static",
                          }}
                          layout="fill"
                        />
                      </div>
                      <Image
                        aria-hidden="true"
                        data-placeholder-image=""
                        style={{
                          opacity: 0,
                          transition: "opacity 500ms linear 0s",
                          objectFit: "cover",
                        }}
                        decoding="async"
                        alt=""
                        src={""}
                      layout="fill"
                        
                      />
                    </div>
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                      <div
                        className="absolute -inset-x-6 inset-y-4 bg-noise"
                        style={{
                          maskImage:
                            "linear-gradient(transparent, white, transparent)",
                          transform: "rotate(-6deg) translateY(-100%)",
                        }}
                      ></div>
                    </div>

                    <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 5, 6].map(() => {
                  return (
                    <>
                      <div
                        className="group bg-gray-800/20 rounded-2xl relative overflow-hidden shadow-md hover:shadow-2xl hover:bg-gray-800/50 transition w-full h-full block @container"
                        style={
                          {
                            "--highlight-color": "#3fa4ff" as string,
                            background: "rgba(39, 39, 42, .2)",
                          } as React.CSSProperties
                        }
                      >
                        <div className="absolute inset-0 bg-dots fade-y opacity-50"></div>
                        <div className="relative flex h-full flex-col">
                          <div className="flex flex-col h-full p-8 pb-5 @lg:p-12">
                            <h2 className="font-semibold mb-6 @lg:leading-normal text-xl @lg:text-3xl">
                              <a href="/blog/variant-groups-in-tailwindcss/">
                                <span className="z-10 absolute inset-0"></span>
                                <span className="text-highlight">
                                  Variant Groups
                                </span>{" "}
                                in Tailwind CSS
                              </a>
                            </h2>
                            <p className="hidden @lg:block text-gray-400 font-medium tracking-wide mb-4"></p>
                            <div className="text-gray-400 font-medium mt-auto flex gap-2 lg:text-gray-500 text-sm lg:text-base lg:gap-3">
                              <time dateTime="2022-11-02T00:00:00.000Z">
                                November 2, 2022
                              </time>
                              <span aria-hidden="true">•</span>
                              <span>13 min read</span>
                            </div>
                          </div>
                          <div className="relative mt-auto">
                            <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained group-hover:scale-[1.025] transition-transform origin-top">
                              <div
                                style={{ maxWidth: "1387px", display: "block" }}
                              >
                                <Image
                                  alt=""
                                  role="presentation"
                                  aria-hidden="true"
                                  src=""
                                  style={{
                                    maxWidth: "100%",
                                    display: "block",
                                    position: "static",
                                  }}
                                 layout="fill"
                                />
                              </div>
                              <Image
                                aria-hidden="true"
                                data-placeholder-image=""
                                style={{
                                  opacity: 0,
                                  transition: "opacity 500ms linear 0s",
                                  objectFit: "cover",
                                }}
                                decoding="async"
                                src=""
                                alt=""
                               layout="fill"
                              />
                            </div>
                            <div className="absolute inset-0 overflow-hidden opacity-10">
                              <div className="absolute -inset-x-6 inset-y-4 bg-noise mask-image-linear-gradient -rotate-6 -translate-y-full"></div>
                            </div>
                            <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                          </div>
                        </div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-gray-700/30 rounded-2xl pointer-events-none"></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
            <section className="h-32" aria-hidden="true"></section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Project;
