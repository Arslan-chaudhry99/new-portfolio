"use client";

import { useState } from "react";

export default function ReadMoreAbout() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <p className={`md:block ${readMore ? "block" : "hidden"}`}>
        Since then, I have been working on improving my skills in Web
        development. I decided to dip my feet in web development because I
        wanted to build products that were easily accessible to anyone on any
        device. It always motivates me when I hear how my project has helped
        someone solve their problem.
      </p>
      <p className={`md:block ${readMore ? "block" : "hidden"}`}>
        I completed my undergrad in Computer Science and Engineering from
        Virtual University. Most of the things I build or learn is still driven
        by curiosity even today.
      </p>
      <div className="lg:hidden text-center absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-75% to-surface-2 rounded-b-2xl">
        <button
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-background bg-surface ring-1 ring-inset ring-brand-border hover:bg-surface-2 focus:ring-primary/50 focus:ring-offset-2 text-sm font-medium px-4 py-2 mt-14 text-foreground"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Read less" : "Read more"}
        </button>
      </div>
    </>
  );
}
