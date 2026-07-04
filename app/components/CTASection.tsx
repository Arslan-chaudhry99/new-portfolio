import Link from "next/link";

type CTAProps = {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CTASection({
  heading,
  description,
  primaryCta,
  secondaryCta,
}: CTAProps) {
  return (
    <section className="container mx-auto px-8 2xl:px-32 py-32">
      <div
        className="bg-surface ring-1 ring-inset ring-brand-border px-8 lg:px-16 py-16 md:py-24 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots fade-y opacity-70" />
        <div className="relative flex flex-col gap-10 md:flex-row items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-semibold tracking-tight text-foreground text-3xl md:text-4xl leading-tight">
              {heading}
            </h2>
            <p className="mt-7 md:text-lg leading-relaxed font-medium text-muted max-w-xl">
              {description}
            </p>
          </div>
          <div className="md:mt-0 w-full md:w-auto flex-shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-background bg-foreground text-background shadow-xl shadow-background/40 hover:opacity-90 focus:ring-1 ring-primary-light focus:ring-offset-2 text-base font-medium px-5 py-2.5 w-full md:w-auto justify-center"
            >
              {primaryCta.label}
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
                className="w-3.5 h-3.5 group-hover/button:translate-x-0.5 transition-transform"
              >
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-background shadow-xl shadow-background/40 bg-surface ring-1 ring-inset ring-brand-border hover:bg-surface-2 focus:ring-primary/50 focus:ring-offset-2 text-base font-medium px-5 py-2.5 w-full md:w-auto justify-center text-foreground"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
