"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

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

function StarRating() {
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
          className="text-amber-400"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  isActive,
  width,
}: {
  review: Review;
  isActive: boolean;
  width: number;
}) {
  return (
    <article
      style={width ? { width, flexShrink: 0 } : undefined}
      className={`rounded-2xl p-6 sm:p-7 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isActive
          ? "bg-[#f4f6fa] text-[#111827] shadow-xl shadow-black/20 scale-[1.02]"
          : "bg-surface ring-1 ring-inset ring-brand-border text-foreground scale-100 opacity-90"
      }`}
    >
      <div>
        <p
          className={`text-base font-semibold transition-colors duration-700 ${
            isActive ? "text-[#111827]" : "text-foreground"
          }`}
        >
          {review.name}
        </p>
        {review.company && (
          <p
            className={`mt-0.5 text-sm transition-colors duration-700 ${
              isActive ? "text-[#6b7280]" : "text-muted"
            }`}
          >
            {review.company}
          </p>
        )}
      </div>
      <div className="mt-4">
        <StarRating />
      </div>
      <p
        className={`mt-5 text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? "text-[#374151]" : "text-secondary"
        }`}
      >
        {review.quote}
      </p>
    </article>
  );
}

export default function ReviewsSection({
  heading,
  subheading,
  items,
}: ReviewsSectionProps) {
  const count = items.length;
  const extendedItems = count > 0 ? [...items, ...items, ...items] : [];

  const [slideIndex, setSlideIndex] = useState(count);
  const [slideOffset, setSlideOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const getGap = () => (window.innerWidth >= 1024 ? 20 : 16);
  const getStep = useCallback(
    () => (cardWidth > 0 ? cardWidth + getGap() : 0),
    [cardWidth],
  );

  const updateLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container || count === 0) return;

    const gap = getGap();
    const visible = window.innerWidth >= 768 ? 3 : 1;
    const width = (container.offsetWidth - gap * (visible - 1)) / visible;

    setCardWidth(width);
    setSlideOffset(slideIndex * (width + gap));
  }, [count, slideIndex]);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  useLayoutEffect(() => {
    if (!transitionEnabled) {
      const frame = requestAnimationFrame(() => setTransitionEnabled(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [transitionEnabled, slideOffset]);

  const normalizeIndex = useCallback(
    (index: number) => {
      if (count === 0) return 0;

      if (index >= count * 2) {
        const normalized = index - count;
        setTransitionEnabled(false);
        setSlideIndex(normalized);
        setSlideOffset(normalized * getStep());
        return;
      }

      if (index < count) {
        const normalized = index + count;
        setTransitionEnabled(false);
        setSlideIndex(normalized);
        setSlideOffset(normalized * getStep());
      }
    },
    [count, getStep],
  );

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;
    setIsAnimating(false);
    normalizeIndex(slideIndex);
  };

  const goPrev = () => {
    if (isAnimating || count === 0) return;
    setIsAnimating(true);
    const nextIndex = slideIndex - 1;
    setSlideIndex(nextIndex);
    setSlideOffset(nextIndex * getStep());
  };

  const goNext = () => {
    if (isAnimating || count === 0) return;
    setIsAnimating(true);
    const nextIndex = slideIndex + 1;
    setSlideIndex(nextIndex);
    setSlideOffset(nextIndex * getStep());
  };

  if (count === 0) return null;

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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-1 ring-inset ring-brand-border text-secondary hover:text-foreground hover:bg-surface-2 transition-colors duration-300"
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
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface ring-1 ring-inset ring-brand-border text-secondary hover:text-foreground hover:bg-surface-2 transition-colors duration-300"
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

      <div ref={containerRef} className="mt-10 overflow-hidden">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-4 lg:gap-5 will-change-transform ${
            transitionEnabled
              ? "transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              : ""
          }`}
          style={{ transform: `translate3d(-${slideOffset}px, 0, 0)` }}
        >
          {extendedItems.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              review={review}
              isActive={index === slideIndex}
              width={cardWidth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
