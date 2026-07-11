"use client";

import { useEffect, useState } from "react";
import type { Project } from "../projects/data";

type ProjectCardProps = {
  project: Project;
  index: number;
  year: number;
};

export default function ProjectCard({ project, index, year }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const cardId = `${index}.${year}`;
  const [activeCardId, setActiveCardId] = useState<string | number>(-1);
  const [slide, setSlide] = useState(0);
  const [videoSlide, setVideoSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMedia, setModalMedia] = useState<"images" | "video">("images");

  const images = project.images ?? [];
  const videos =
    project.videos ?? (project.video ? [project.video] : []);

  useEffect(() => {
    if (images.length <= 1 || modalOpen) return;
    const timer = window.setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [images.length, modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      } else if (modalMedia === "images" && images.length > 1) {
        if (event.key === "ArrowRight") {
          setSlide((prev) => (prev + 1) % images.length);
        } else if (event.key === "ArrowLeft") {
          setSlide((prev) => (prev - 1 + images.length) % images.length);
        }
      } else if (modalMedia === "video" && videos.length > 1) {
        if (event.key === "ArrowRight") {
          setVideoSlide((prev) => (prev + 1) % videos.length);
        } else if (event.key === "ArrowLeft") {
          setVideoSlide((prev) => (prev - 1 + videos.length) % videos.length);
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, modalMedia, images.length, videos.length]);

  const openImageModal = (i: number) => {
    setSlide(i);
    setModalMedia("images");
    setModalOpen(true);
  };

  const openVideoModal = (i: number) => {
    setVideoSlide(i);
    setModalMedia("video");
    setModalOpen(true);
  };

  const nextSlide = () => setSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  const nextVideo = () => setVideoSlide((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setVideoSlide((prev) => (prev - 1 + videos.length) % videos.length);

  const isActive = hovered && activeCardId === cardId;

  const gradientStyle = {
    display: isActive ? "flex" : undefined,
    transform: isActive
      ? `translate(${translate.x}px, ${translate.y}px) translateZ(0px)`
      : "translate(0, 0)",
    transition: "transform 0.1s out",
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>,
    trackPosition: boolean
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (trackPosition) {
      setTranslate({ x, y });
    }
  };

  return (
    <>
    <div
      className="relative h-full"
      onMouseEnter={() => {
        setHovered(true);
        setActiveCardId(cardId);
      }}
      onMouseMove={(event) => handleMouseMove(event, true)}
      onMouseLeave={() => {
        setHovered(false);
        setActiveCardId(-1);
        setTranslate({ x: 0, y: 0 });
      }}
    >
      <div className="p-px lg:h-full rounded-2xl relative overflow-hidden bg-surface-2/80 shadow-md hover:shadow-2xl transition group">
        <div
          className="absolute opacity-[0.4] h-full hidden aspect-square bg-gradient-to-c from-primary to-transparent to-70% -top-1/2 -left-1/2"
          style={gradientStyle}
        />
        <div className="bg-surface-2 group-hover:bg-[#1d1d20] transition-colors relative rounded-2xl h-full">
          <div className="absolute inset-0 bg-dots fade-y opacity-40" />
          <div
            className="absolute h-full opacity-[0.07] hidden aspect-square bg-gradient-to-c from-primary to-transparent to-70% -top-1/2 -left-1/2"
            style={gradientStyle}
          />
          <div className="relative p-8 h-full flex flex-col">
            <div className="flex justify-between">
              <time
                dateTime="2023-05-25"
                className="font-medium text-muted text-sm"
              >
                {project.date}
              </time>
            </div>
            <h3 className="mt-4 text-2xl font-semibold flex justify-between items-center">
              <span>
                <span className="absolute inset-0" />
                {project.title}
              </span>
              {project.tag && (
                <div className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-primary text-foreground transition-colors px-2 py-1 rounded-full">
                  {project.tag}
                </div>
              )}
            </h3>
            <p className="text-muted font-medium text-sm mt-3 mb-6 leading-relaxed tracking-wide">
              {project.description}
            </p>
            {videos.length > 0 && (
              <div className="mb-6">
                <div className="group/media relative overflow-hidden rounded-xl ring-1 ring-inset ring-brand-border bg-black">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${videoSlide * 100}%)` }}
                  >
                    {videos.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => openVideoModal(i)}
                        aria-label={`Expand ${project.title} video ${i + 1}`}
                        className="w-full shrink-0 block cursor-zoom-in pointer-events-auto"
                      >
                        <video
                          className="w-full h-auto max-h-96 object-contain"
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                        />
                      </button>
                    ))}
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover/media:opacity-100 pointer-events-none">
                    <ExpandIcon />
                  </span>
                </div>
                {videos.length > 1 && (
                  <div className="mt-3 flex justify-center gap-2 pointer-events-auto">
                    {videos.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setVideoSlide(i)}
                        aria-label={`Go to video ${i + 1}`}
                        aria-current={i === videoSlide}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === videoSlide
                            ? "w-6 bg-primary-light"
                            : "w-2 bg-foreground/25 hover:bg-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
            {images.length > 0 && (
              <div className="mb-6">
                <div className="group/media relative overflow-hidden rounded-xl ring-1 ring-inset ring-brand-border bg-black">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                  >
                    {images.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt={`${project.title} render ${i + 1}`}
                        loading="lazy"
                        onClick={() => openImageModal(i)}
                        className="w-full shrink-0 h-80 object-contain cursor-zoom-in pointer-events-auto"
                      />
                    ))}
                  </div>
                  <span className="absolute top-3 right-3 rounded-full bg-black/60 p-2 text-white opacity-0 transition-opacity group-hover/media:opacity-100 pointer-events-none">
                    <ExpandIcon />
                  </span>
                </div>
                {images.length > 1 && (
                  <div className="mt-3 flex justify-center gap-2 pointer-events-auto">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setSlide(i)}
                        aria-label={`Go to render ${i + 1}`}
                        aria-current={i === slide}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === slide
                            ? "w-6 bg-primary-light"
                            : "w-2 bg-foreground/25 hover:bg-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
            <ul
              className="flex flex-wrap gap-1.5 text-sm mt-auto"
              aria-label="Technologies used in this project"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-surface-2/60 text-muted sm:group-hover:bg-foreground/5 sm:group-hover:text-secondary transition-colors px-3 py-1 rounded-md"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div
              className="mt-10 flex justify-between relative pointer-events-none"
              onMouseMove={(event) => handleMouseMove(event, false)}
            >
              {project.preview && (
                <a
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-background bg-foreground text-background shadow-xl shadow-background/40 hover:opacity-90 focus:ring-1 ring-primary-light focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                >
                  View
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
                    className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
                  >
                    <path d="M17 7l-10 10" />
                    <path d="M8 7l9 0l0 9" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-background shadow-xl shadow-background/40 ring-1 [&:not(:focus)]:ring-inset ring-brand-border hover:bg-surface-2 focus:ring-primary/50 focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
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
                    className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"
                  >
                    <path d="M17 7l-10 10" />
                    <path d="M8 7l9 0l0 9" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    {modalOpen && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} media viewer`}
        onClick={() => setModalOpen(false)}
      >
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
        >
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
            className="w-5 h-5"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div
          className="relative max-w-6xl w-full max-h-full flex flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >
          {modalMedia === "video" && videos.length > 0 ? (
            <>
              <div className="relative flex items-center justify-center w-full">
                {videos.length > 1 && (
                  <button
                    type="button"
                    onClick={prevVideo}
                    aria-label="Previous video"
                    className="absolute left-2 sm:-left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
                  >
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
                      className="w-6 h-6"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}
                <video
                  key={videos[videoSlide]}
                  className="max-h-[85vh] w-auto max-w-full rounded-xl"
                  src={videos[videoSlide]}
                  controls
                  autoPlay
                  loop
                  playsInline
                />
                {videos.length > 1 && (
                  <button
                    type="button"
                    onClick={nextVideo}
                    aria-label="Next video"
                    className="absolute right-2 sm:-right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
                  >
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
                      className="w-6 h-6"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {videos.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {videos.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setVideoSlide(i)}
                      aria-label={`Go to video ${i + 1}`}
                      aria-current={i === videoSlide}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === videoSlide
                          ? "w-6 bg-primary-light"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="relative flex items-center justify-center w-full">
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous image"
                    className="absolute left-2 sm:-left-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
                  >
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
                      className="w-6 h-6"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[slide]}
                  alt={`${project.title} render ${slide + 1}`}
                  className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
                />
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="absolute right-2 sm:-right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors"
                  >
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
                      className="w-6 h-6"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setSlide(i)}
                      aria-label={`Go to image ${i + 1}`}
                      aria-current={i === slide}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === slide
                          ? "w-6 bg-primary-light"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    )}
    </>
  );
}

function ExpandIcon() {
  return (
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
      className="w-4 h-4"
    >
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}
