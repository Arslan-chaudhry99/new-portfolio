import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ServiceIcon = "web" | "app" | "3d" | "video" | "seo";

const icons: Record<ServiceIcon, ReactNode> = {
  web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 8h6" />
      <path d="M7 12h4" />
      <path d="M16 16l3 3" />
    </svg>
  ),
  app: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  "3d": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12l8-4.5" />
      <path d="M12 12v9" />
      <path d="M12 12L4 7.5" />
    </svg>
  ),
  video: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="15" height="14" rx="2" />
      <path d="M17 9l5-3v12l-5-3z" />
    </svg>
  ),
  seo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M8 11h6" />
      <path d="M11 8v6" />
    </svg>
  ),
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIcon;
  image: StaticImageData;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-2xl ring-1 ring-inset ring-brand-border bg-surface transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
    >
      {/* Background image — visible on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
          className="object-cover object-center scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
      </div>

      {/* Default content */}
      <div className="relative z-10 flex flex-col gap-4 p-5 sm:p-6 transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-foreground/90">{icons[icon]}</div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted font-medium leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      {/* Hover content — icon badge + white text */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col gap-4 p-5 sm:p-6 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black shadow-lg">
          {icons[icon]}
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/85 font-medium leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
