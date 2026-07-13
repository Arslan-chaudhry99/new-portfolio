"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AGENCY_NAME,
  footerContent,
  serviceCategories,
} from "../data/agency";

const socialIcons = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
    </svg>
  ),
  fiverr: (
    <Image
      src="/assess/fiverr-svgrepo-com.svg"
      alt=""
      width={16}
      height={16}
      className="h-4 w-4"
    />
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { cta, description, newsletter, locations, contact, social, legal } =
    footerContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-32">
      <div className="container mx-auto px-8 2xl:px-32 relative z-10">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#f4f6fa] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between shadow-2xl shadow-black/30 -mb-20 sm:-mb-24">
          <div>
            <p className="text-sm font-medium text-[#6b7280]">{cta.eyebrow}</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
              {cta.heading}
            </h2>
          </div>
          <Link
            href={cta.button.href}
            className="inline-flex items-center gap-3 self-start rounded-full border border-[#d1d5db] bg-white px-5 py-3 text-sm font-semibold text-[#111827] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
              </svg>
            </span>
            {cta.button.label}
          </Link>
        </div>
      </div>

      <div className="relative bg-background pt-28 sm:pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-dots fade-t opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary/30 via-primary-light/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-8 2xl:px-32 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <Image
                  src="/assess/logo.png"
                  alt={AGENCY_NAME}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="mt-5 text-sm text-secondary leading-relaxed max-w-xs">
                {description}
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground mb-3">
                  {newsletter.label}
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-2 max-w-md"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder={newsletter.placeholder}
                    className="flex-1 rounded-xl bg-white/10 border border-brand-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-light/40"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition shrink-0"
                  >
                    {newsletter.button}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">Services</h3>
              <ul className="mt-5 space-y-3">
                {serviceCategories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/services#service-${category.id}`}
                      className="text-sm text-secondary hover:text-primary-light transition"
                    >
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">Locations</h3>
              <div className="mt-5 space-y-5">
                {locations.map((location) => (
                  <div key={location.label}>
                    <p className="text-sm font-semibold text-foreground">
                      {location.label}
                    </p>
                    <p className="mt-1.5 text-sm text-secondary leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground">Contact Us</h3>
              <div className="mt-5 space-y-2 text-sm text-secondary">
                {contact.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
                <a
                  href={`mailto:${contact.email}`}
                  className="block hover:text-primary-light transition"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-brand-border flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] hover:scale-105 transition"
                >
                  {socialIcons[item.icon]}
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted">
              <p>
                © {currentYear} {AGENCY_NAME}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href={legal.terms} className="hover:text-primary-light transition">
                  Terms
                </Link>
                <Link href={legal.privacy} className="hover:text-primary-light transition">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="self-start lg:self-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111827] hover:scale-105 transition shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" /><path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
