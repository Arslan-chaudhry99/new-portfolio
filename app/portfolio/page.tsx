import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ArrowListItem from "../components/ArrowListItem";
import { AGENCY_NAME, portfolioPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Portfolio · ${AGENCY_NAME}`,
  description: portfolioPage.hero.subheading,
};

export default function PortfolioPage() {
  const { hero, caseStudies, showcase, categories, cta } = portfolioPage;

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen">
          <PageHero
            heading={hero.heading}
            subheading={hero.subheading}
            description={hero.description}
          />

          {/* Case Studies */}
          <section className="container mx-auto px-8 2xl:px-32 mt-8">
            <h2 className="text-3xl font-semibold !text-white">Featured Case Studies</h2>
            <div className="space-y-12 mt-12 max-w-5xl">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-10 rounded-2xl relative overflow-hidden"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-70" />
                  <div
                    className="absolute -top-1/2 -right-1/4 h-full aspect-square bg-gradient-to-c from-highlight to-transparent to-70% opacity-15"
                    style={{ "--highlight-color": study.highlightColor } as React.CSSProperties}
                  />
                  <div className="relative">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 !text-white">{study.title}</h3>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                      <div>
                        <h4 className="text-sm font-semibold text-sky-400 uppercase tracking-wide">Challenge</h4>
                        <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide">Solution</h4>
                        <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">Results</h4>
                        <ul className="mt-3 space-y-2">
                          {study.results.map((r) => (
                            <ArrowListItem key={r}>
                              <span className="text-sm text-gray-300">{r}</span>
                            </ArrowListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Showcase */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative">
                <h2 className="text-3xl font-semibold !text-white">{showcase.heading}</h2>
                <p className="mt-4 text-gray-400 font-medium max-w-2xl">{showcase.description}</p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                  {showcase.items.map((item) => (
                    <li
                      key={item}
                      className="shadow-[0_1px_inset_rgba(255,255,255,0.05)] text-sm font-medium bg-gray-700/20 text-gray-300 px-4 py-3 rounded-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <h2 className="text-3xl font-semibold !text-white">Project Categories</h2>
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl relative overflow-hidden"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div
                    className="absolute -top-1/2 -right-1/2 h-full aspect-square bg-gradient-to-c from-highlight to-transparent to-70% opacity-15"
                    style={{ "--highlight-color": cat.highlightColor } as React.CSSProperties}
                  />
                  <div className="relative">
                    <h3 className="text-xl font-semibold !text-white">{cat.title}</h3>
                    <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                      {cat.description}
                    </p>
                    <p className="mt-6 text-sm font-medium text-gray-300">Projects Include:</p>
                    <ul className="mt-3 space-y-2">
                      {cat.projects.map((p) => (
                        <ArrowListItem key={p}>
                          <span className="text-sm">{p}</span>
                        </ArrowListItem>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CTASection {...cta} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
