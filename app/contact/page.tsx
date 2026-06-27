import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { AGENCY_NAME, contactPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Contact · ${AGENCY_NAME}`,
  description: contactPage.hero.subheading,
};

export default function ContactPage() {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <section className="md:h-screen-1/2 pt-56 pb-20 md:pt-56 md:pb-0 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-zinc-100 max-w-3xl">
            {contactPage.hero.heading}
          </h1>
          <p className="mt-7 text-lg leading-relaxed font-medium text-gray-400 max-w-2xl">
            {contactPage.hero.subheading}
          </p>
        </section>
        <main className="relative min-h-screen">
          <section className="container md:max-w-5xl mx-auto px-8 py-16 perspective relative">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="form bg-dots ring-1 ring-inset ring-gray-700/70 bg-gray-800/20 p-2 sm:p-4 shadow-lg rounded-xl relative overflow-hidden will-change-transform">
                  <div className="opacity-60 pointer-events-none">
                    <div className="absolute -top-1/3 -left-1/3 h-full aspect-square bg-gradient-to-c from-green-500 via-transparent blur-2xl" />
                    <div className="absolute -top-1/3 -right-1/3 h-full aspect-square bg-gradient-to-c from-sky-500 via-transparent blur-2xl" />
                    <div className="absolute -bottom-1/3 -left-1/3 h-full aspect-square bg-gradient-to-c from-pink-500 via-transparent blur-2xl" />
                    <div className="absolute -bottom-1/3 -right-1/3 h-full aspect-square bg-gradient-to-c from-amber-500 via-transparent blur-2xl" />
                  </div>
                  <div className="bg-gray-900 rounded-lg">
                    <div className="bg-zinc-900/95 text-zinc-100 px-4 py-12 pb-4 md:px-12 md:py-20 shadow-md relative rounded-lg overflow-hidden ring-1 ring-inset ring-gray-700/40">
                      <div className="absolute inset-0 bg-noise pointer-events-none" />
                      <form className="relative">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <label className="flex flex-col gap-2">
                          <span className="font-medium text-gray-400 text-sm">Your name</span>
                          <input
                            className="w-full sm:w-1/2 bg-transparent letter-lines px-1 focus:outline-none font-cursive text-2xl rounded text-zinc-100 caret-sky-400 placeholder:text-zinc-500 selection:bg-sky-500/30"
                            name="name"
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 mt-12">
                          <span className="font-medium text-gray-400 text-sm">Your email</span>
                          <input
                            className="w-full sm:w-1/2 bg-transparent letter-lines px-1 focus:outline-none font-cursive text-2xl rounded text-zinc-100 caret-sky-400 placeholder:text-zinc-500 selection:bg-sky-500/30"
                            name="email"
                            type="email"
                            required
                          />
                        </label>
                        <label className="flex flex-col gap-2 mt-12">
                          <span className="font-medium text-gray-400 text-sm">Project details</span>
                          <textarea
                            name="message"
                            className="w-full bg-transparent letter-lines font-cursive focus:outline-none text-2xl text-zinc-100 caret-sky-400 placeholder:text-zinc-500 selection:bg-sky-500/30"
                            spellCheck="false"
                            rows={6}
                            required
                            placeholder="Tell us about your project..."
                          />
                        </label>
                        <button
                          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 shadow-xl shadow-black/20 ring-1 ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 mt-12 !text-white gap-2 w-full justify-center md:w-auto"
                          type="submit"
                        >
                          Send message
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5">
                            <path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div className="relative">
                    <h2 className="text-xl font-semibold !text-white">Get in Touch</h2>
                    <div className="mt-6 space-y-4 text-sm text-gray-400 font-medium">
                      <p>
                        <span className="text-gray-300">Email:</span>{" "}
                        <a href="mailto:hello@digitalstudio.com" className="text-sky-400 hover:underline">
                          hello@digitalstudio.com
                        </a>
                      </p>
                      <p>
                        <span className="text-gray-300">Consultation:</span> Book a free 30-minute discovery call
                      </p>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <a
                        href="https://www.linkedin.com/in/arslan-jameel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-400 transition"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 0 0-4 0" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/Arslan-chaudhry99/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-400 transition"
                        aria-label="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div className="relative">
                    <h2 className="text-xl font-semibold !text-white">FAQ</h2>
                    <div className="mt-6 space-y-6">
                      {contactPage.faq.map((item) => (
                        <div key={item.question}>
                          <h3 className="text-sm font-semibold text-gray-200">{item.question}</h3>
                          <p className="mt-2 text-sm text-gray-400 font-medium leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
