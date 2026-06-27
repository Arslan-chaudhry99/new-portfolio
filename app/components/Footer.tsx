import Link from "next/link";
import { AGENCY_NAME, navLinks } from "../data/agency";

const START_YEAR = 2021;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-9 md:py-7"
      style={{ background: "rgba(9, 9, 11, .4)" }}
    >
      <div className="absolute inset-0 bg-dots fade-t opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-7 left-0 h-7 w-7"
        style={{ background: "rgba(9,9,11,.4)" }}
      >
        <div
          className="absolute inset-0 rounded-bl-full"
          style={{ background: " rgb(24 24 27/1" }}
        />
      </div>
      <div
        className="absolute -top-7 right-0 h-7 w-7"
        style={{ background: "rgba(9,9,11,.4)" }}
      >
        <div
          className="absolute inset-0 rounded-br-full"
          style={{ background: " rgb(24 24 27/1" }}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4 justify-between container mx-auto px-8 2xl:px-32 relative text-gray-400 text-sm">
        <div className="tracking-wide flex space-x-1.5">
          <span>©</span>
          <span>
            {START_YEAR}&nbsp;&nbsp;–&nbsp;&nbsp;{currentYear}
          </span>
          <span>{AGENCY_NAME}.</span>
        </div>
        <nav className="-order-1 lg:order-1 flex flex-wrap justify-center font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
