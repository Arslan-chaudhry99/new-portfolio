import type { Metadata } from "next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ArrowListItem from "../components/ArrowListItem";
import { AGENCY_NAME, servicesPage } from "../data/agency";

export const metadata: Metadata = {
  title: `Services · ${AGENCY_NAME}`,
  description: servicesPage.hero.subheading,
};

export default function ServicesPage() {
  const { hero, services, process, pricing, cta } = servicesPage;

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen">
          <PageHero heading={hero.heading} subheading={hero.subheading} />

          {services.map((service, index) => (
            <section
              key={service.title}
              className={`container mx-auto px-8 2xl:px-32 ${index === 0 ? "mt-8" : "mt-24"}`}
            >
              <div
                className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative overflow-hidden"
                style={{ background: "rgba(39, 39, 42, .9)" }}
              >
                <div className="absolute inset-0 bg-dots fade-y opacity-70" />
                <div
                  className="absolute -top-1/2 -right-1/4 h-full aspect-square bg-gradient-to-c from-highlight to-transparent to-70% opacity-15"
                  style={{ "--highlight-color": service.highlightColor } as React.CSSProperties}
                />
                <div className="relative">
                  <h2 className="text-3xl font-semibold !text-white">{service.title}</h2>
                  <p className="mt-6 text-gray-400 font-medium leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                  <div className="mt-10 grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200">What We Offer</h3>
                      <ul className="mt-4 space-y-2">
                        {service.offerings.map((item) => (
                          <ArrowListItem key={item}>
                            <span className="text-sm text-gray-300">{item}</span>
                          </ArrowListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200">Technologies</h3>
                      <p className="mt-4 text-sm text-gray-400 font-medium leading-relaxed">
                        {service.technologies}
                      </p>
                      {"deliverables" in service && service.deliverables && (
                        <>
                          <h3 className="text-lg font-semibold text-gray-200 mt-8">Deliverables</h3>
                          <p className="mt-4 text-sm text-gray-400 font-medium leading-relaxed">
                            {service.deliverables}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Process */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <h2 className="text-3xl font-semibold !text-white">Our Process</h2>
            <div className="grid md:grid-cols-5 gap-6 mt-12">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="ring-1 ring-inset ring-gray-700/30 p-6 rounded-2xl relative"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
                >
                  <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                  <div className="relative">
                    <span className="text-2xl font-bold gradient-text">{step.step}</span>
                    <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-400 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="container mx-auto px-8 2xl:px-32 mt-32">
            <div
              className="ring-1 ring-inset ring-gray-700/30 p-8 lg:p-12 rounded-2xl relative"
              style={{ background: "rgba(39, 39, 42, .9)" }}
            >
              <div className="absolute inset-0 bg-dots fade-y opacity-70" />
              <div className="relative">
                <h2 className="text-3xl font-semibold !text-white">{pricing.heading}</h2>
                <p className="mt-4 text-gray-400 font-medium max-w-2xl">{pricing.description}</p>
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  {pricing.models.map((model) => (
                    <div
                      key={model.title}
                      className="ring-1 ring-inset ring-gray-700/30 p-6 rounded-xl bg-[#1b1b1e]"
                    >
                      <h3 className="text-lg font-semibold text-sky-400">{model.title}</h3>
                      <p className="mt-3 text-sm text-gray-400 font-medium leading-relaxed">
                        {model.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-gray-200">What&apos;s Included</h3>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                    {pricing.included.map((item) => (
                      <ArrowListItem key={item}>
                        <span className="text-sm text-gray-300">{item}</span>
                      </ArrowListItem>
                    ))}
                  </ul>
                </div>
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
