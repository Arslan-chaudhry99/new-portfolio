"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="relative py-9 md:py-7 "
        style={{ background: "rgba(9, 9, 11, .4)" }}
      >
        <div className="absolute inset-0 bg-dots fade-t opacity-60"></div>
        <div
          className="absolute -top-7 left-0 h-7 w-7 "
          style={{ background: "rgba(9,9,11,.4)" }}
        >
          <div
            className="absolute inset-0  rounded-bl-full"
            style={{ background: " rgb(24 24 27/1" }}
          ></div>
        </div>
        <div
          className="absolute -top-7 right-0 h-7 w-7 "
          style={{ background: "rgba(9,9,11,.4)" }}
        >
          <div
            className="absolute inset-0 rounded-br-full"
            style={{ background: " rgb(24 24 27/1" }}
          ></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between container mx-auto px-8 2xl:px-32 relative text-gray-400 text-sm">
          <div className="tracking-wide flex space-x-1.5">
            <span>©</span>
            <span>2021&nbsp;&nbsp;–&nbsp;&nbsp;present</span>
            <span>Arslan Chaudhry.</span>
          </div>
          <nav className="-order-1 lg:order-1 flex flex-wrap justify-center font-medium">
            <Link
              href="/"
              className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3"
            >
              Home
            </Link>
            <Link
              href="/projects/"
              className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3"
            >
              Projects
            </Link>
            {/* <Link
              href="/blogs/"
              className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3"
            >
              Blog
            </Link> */}

            <Link
              href="/contact/"
              className="hover:text-sky-400 hover:underline underline-offset-4 transition px-3.5 py-3"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
