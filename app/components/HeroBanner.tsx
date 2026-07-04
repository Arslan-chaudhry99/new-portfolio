import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "twitter" | "facebook" | "youtube" | "linkedin" | "github";
};

type HeroBannerProps = {
  heading: string;
  description: string;
  cta: { label: string; href: string };
  backgroundImage: StaticImageData | string;
  socialLabel: string;
  socialLinks: SocialLink[];
  clientBadge: {
    count: string;
    label: string;
    avatars: (StaticImageData | string)[];
  };
};

const socialIcons: Record<SocialLink["icon"], React.ReactNode> = {
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
    </svg>
  ),
};

export default function HeroBanner({
  heading,
  description,
  cta,
  backgroundImage,
  socialLabel,
  socialLinks,
  clientBadge,
}: HeroBannerProps) {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-8 2xl:px-0">
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

        <div className="relative z-10 flex h-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex-col items-center justify-center px-6 py-16 sm:px-12 text-center">
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {heading}
          </h1>
          <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/80 sm:text-base">
            {description}
          </p>
          <Link
            href={cta.href}
            className="group/button mt-8 inline-flex items-center gap-0 rounded-full hover:gap-2 hover:scale-[1.03] focus:outline-none transition-all duration-300 ring-offset-background bg-foreground text-background shadow-lg shadow-background/30 hover:opacity-95 focus:ring-1 ring-primary-light focus:ring-offset-2 text-sm font-medium pl-4 pr-4 group-hover/button:pr-3 py-2 w-fit overflow-hidden"
          >
            {cta.label}
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
              className="w-0 h-3.5 opacity-0 -translate-x-2 shrink-0 overflow-hidden transition-all duration-300 ease-out group-hover/button:w-3.5 group-hover/button:opacity-100 group-hover/button:translate-x-0"
              aria-hidden="true"
            >
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </Link>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 px-6 pb-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white/90">{socialLabel}</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1 shadow-lg">
            <div className="flex -space-x-1.5">
              {clientBadge.avatars.map((avatar, i) => (
                <div
                  key={i}
                  className="relative h-6 w-6 overflow-hidden rounded-full ring-1 ring-white"
                >
                  <Image
                    src={avatar}
                    alt=""
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="whitespace-nowrap text-[10px] font-semibold leading-none text-black sm:text-[11px]">
              <span className="font-bold">{clientBadge.count}</span>{" "}
              {clientBadge.label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
