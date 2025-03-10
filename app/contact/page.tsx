"use client";
import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div id="___gatsby">
        <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
          <Menu />
          <section className="md:h-screen-1/2 pt-56 pb-20 md:pt-56 md:pb-0 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-semibold tracking-tight leading-tight">
              Let’s get in touch
            </h1>
            <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-2xl">
              I’m open to hearing about new opportunities. Feel free to reach
              out to me if you have a question, or just want to say hi!
            </p>
          </section>
          <main className="relative min-h-screen">
          <section className="container md:max-w-3xl mx-auto px-8 py-16 perspective relative">
            <div className="form bg-dots ring-1 ring-inset ring-gray-700/70 bg-gray-800/20 p-2 sm:p-4 shadow-lg rounded-xl relative overflow-hidden will-change-transform">
              <div className="opacity-60 pointer-events-none">
                <div className="absolute -top-1/3 -left-1/3 h-full aspect-square bg-gradient-to-c from-green-500 via-transparent blur-2xl"></div>
                <div className="absolute -top-1/3 -right-1/3 h-full aspect-square bg-gradient-to-c from-sky-500 via-transparent blur-2xl"></div>
                <div className="absolute -bottom-1/3 -left-1/3 h-full aspect-square bg-gradient-to-c from-pink-500 via-transparent blur-2xl"></div>
                <div className="absolute -bottom-1/3 -right-1/3 h-full aspect-square bg-gradient-to-c from-amber-500 via-transparent blur-2xl"></div>
              </div>
              <div className="bg-gray-900 rounded-lg">
                <div className="bg-gray-100 text-black px-4 py-12 pb-4 md:px-12 md:py-20 shadow-md relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-noise pointer-events-none"></div>
                  <form className="relative">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <label className="flex flex-col gap-2">
                      <span className="font-medium text-gray-500 text-sm">
                        Your email
                      </span>
                      <input
                        className="w-full sm:w-1/2 bg-transparent letter-lines px-1 focus:outline-none font-cursive text-2xl rounded autofill selection:bg-blue-300"
                        name="email"
                        type="email"
                        required
                      />
                    </label>
                    <label className="flex flex-col gap-2 mt-12">
                      <span className="font-medium text-gray-500 text-sm">
                        Message
                      </span>
                      <textarea
                        name="message"
                        className="w-full bg-transparent letter-lines font-cursive focus:outline-none text-2xl selection:bg-blue-300"
                        spellCheck="false"
                        rows={6}
                        required
                      />
                    </label>
                    <label className="flex flex-col gap-2 mt-12">
                      <span className="font-medium text-gray-500 text-sm">
                        Your name
                      </span>
                      <input
                        name="name"
                        className="w-full sm:w-1/2 bg-transparent letter-lines px-1 focus:outline-none font-cursive text-2xl rounded autofill selection:bg-blue-300"
                        required
                        defaultValue=""
                      />
                    </label>
                    <div className="cf-turnstile">
                      <div
                        className="border: 0px; margin: 0px; padding: 0px;"
                        style={{ border: 0, margin: 0, padding: 0 }}
                      >
                        <input
                          type="hidden"
                          name="cf-turnstile-response"
                          id="cf-chl-widget-xdzkw_response"
                          value={""}
                        />
                      </div>
                      <button
                        className="inline-flex items-center gap-1 !text-[#27272ae6] group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900  shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 mt-12 text-white gap-2 w-full justify-center md:w-auto"
                        type="submit"
                        // style={{ backgroundColor: "#27272ae6 !important" }}
                      >
                        Send mail
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
                          className="w-4 h-4 mt-0.5"
                        >
                          <path d="M10 14l11 -11"></path>
                          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
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
};

export default Contact;
