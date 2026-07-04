"use client";

import { useState } from "react";

type Review = {
  name: string;
  company: string;
  quote: string;
};

type ReviewsSectionProps = {
  heading: string;
  subheading: string;
  items: Review[];
};

function StarRating({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={active ? "text-amber-400" : "text-amber-400"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection({
  heading,
  subheading,
  items,
}: ReviewsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const visibleCards = [
    items[activeIndex],
    items[(activeIndex + 1) % items.length],
    items[(activeIndex + 2) % items.length],
  ];

  return (
    <section className="container mx-auto px-8 2xl:px-32 mt-32">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            {heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted font-medium">
            {subheading}
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-1 ring-inset ring-brand-border text-secondary hover:text-foreground hover:bg-surface-2 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-1 ring-inset ring-brand-border text-secondary hover:text-foreground hover:bg-surface-2 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {visibleCards.map((review, index) => {
          const isActive = index === 0;
          return (
            <article
              key={`${review.name}-${activeIndex}-${index}`}
              className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                isActive
                  ? "bg-[#f4f6fa] text-[#111827] shadow-xl shadow-black/20"
                  : "bg-surface ring-1 ring-inset ring-brand-border text-foreground"
              }`}
            >
              <div>
                <p
                  className={`text-base font-semibold ${
                    isActive ? "text-[#111827]" : "text-foreground"
                  }`}
                >
                  {review.name}
                </p>
                {review.company && (
                  <p
                    className={`mt-0.5 text-sm ${
                      isActive ? "text-[#6b7280]" : "text-muted"
                    }`}
                  >
                    {review.company}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <StarRating active={isActive} />
              </div>
              <p
                className={`mt-5 text-sm leading-relaxed font-medium ${
                  isActive ? "text-[#374151]" : "text-secondary"
                }`}
              >
                {review.quote}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
