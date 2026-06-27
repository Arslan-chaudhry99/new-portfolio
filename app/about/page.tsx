import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ArrowListItem from "../components/ArrowListItem";
import { AGENCY_NAME, aboutPage } from "../data/agency";

export const metadata: Metadata = {
  title: `About · ${AGENCY_NAME}`,
  description: aboutPage.hero.subheading,
};

export default function AboutPage() {
  const { hero, story, mission, whyChooseUs, cta } = aboutPage;

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen">
          <PageHero heading={hero.heading} subheading={hero.subheading} />

          <section className="container mx-auto px-8 2xl:px-32 mt-8">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative max-w-3xl">
                <h2 className="text-3xl font-semibold !text-white">{story.title}</h2>
                <div className="mt-6 space-y-4 text-gray-400 font-medium leading-relaxed">
                  {story.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-8 2xl:px-32 mt-24">
            <h2 className="text-3xl font-semibold !text-white">{mission.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {mission.items.map((item) => (
                <div
                  key={item.title}
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-sky-400">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-8 2xl:px-32 mt-24">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative">
                <h2 className="text-3xl font-semibold !text-white">{whyChooseUs.title}</h2>
                <ul className="grid sm:grid-cols-2 gap-4 mt-8">
                  {whyChooseUs.items.map((item) => (
                    <ArrowListItem key={item}>
                      <span className="text-sm text-gray-300">{item}</span>
                    </ArrowListItem>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <CTASection {...cta} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
