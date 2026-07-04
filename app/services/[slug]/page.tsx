import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import {
  AGENCY_NAME,
  getAllServiceSlugs,
  getServiceBySlug,
} from "../../data/agency";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} · ${AGENCY_NAME}`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen pt-32 pb-24">
          <section className="container mx-auto px-8 2xl:px-32 max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Ready to get started?
            </h1>
            <p className="mt-3 text-sm text-muted font-medium">
              {service.title}
            </p>
            <div className="mt-8 rounded-2xl bg-surface ring-1 ring-inset ring-brand-border p-6 sm:p-8">
              <ContactForm formName="service-inquiry" serviceName={service.title} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
