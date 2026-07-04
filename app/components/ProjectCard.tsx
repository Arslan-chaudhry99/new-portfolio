"use client";

import { useState } from "react";
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
  );
}
