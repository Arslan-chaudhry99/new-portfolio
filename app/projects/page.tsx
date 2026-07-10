import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PortfolioTabs from "../components/PortfolioTabs";
import { AGENCY_NAME, portfolioPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Portfolio · ${AGENCY_NAME}`,
  description: portfolioPage.hero.subheading,
};

export default function PortfolioPage() {
  const { hero, categories } = portfolioPage;

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen pt-32 pb-24">
          <section className="container mx-auto px-8 2xl:px-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight text-foreground">
                {hero.heading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed font-medium text-muted">
                {hero.subheading}
              </p>
            </div>

            <PortfolioTabs categories={categories} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
