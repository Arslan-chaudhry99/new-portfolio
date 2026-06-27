import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ArrowListItem from "../components/ArrowListItem";
import { AGENCY_NAME, technologiesPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Technologies · ${AGENCY_NAME}`,
  description: technologiesPage.hero.subheading,
};

export default function TechnologiesPage() {
  const { hero, stack, capabilities, cta } = technologiesPage;

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
              <div className="relative">
                <h2 className="text-3xl font-semibold !text-white">{stack.title}</h2>
                <p className="mt-4 text-gray-400 font-medium max-w-2xl">{stack.description}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {stack.categories.map((cat) => (
                    <div
                      key={cat.title}
                      className="ring-1 ring-inset ring-gray-700/30 p-6 rounded-xl relative overflow-hidden bg-[#1b1b1e]"
                    >
                      <div
                        className="absolute -top-1/2 -right-1/2 h-full aspect-square bg-gradient-to-c from-highlight to-transparent to-70% opacity-15"
                        style={{ "--highlight-color": cat.highlightColor } as React.CSSProperties}
                      />
                      <div className="relative">
                        <h3 className="text-lg font-semibold" style={{ color: cat.highlightColor }}>
                          {cat.title}
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {cat.items.map((item) => (
                            <ArrowListItem key={item}>
                              <span className="text-sm text-gray-300">{item}</span>
                            </ArrowListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-8 2xl:px-32 mt-24">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative">
                <h2 className="text-3xl font-semibold !text-white">{capabilities.title}</h2>
                <p className="mt-4 text-gray-400 font-medium max-w-2xl">
                  {capabilities.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 mt-10">
                  {capabilities.items.map((item) => (
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
