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
      <div className="p-px lg:h-full rounded-2xl relative overflow-hidden bg-gray-700/30 shadow-md hover:shadow-2xl transition group">
        <div
          className="absolute opacity-[0.4] h-full hidden aspect-square bg-gradient-to-c from-sky-500 to-transparent to-70% -top-1/2 -left-1/2"
          style={gradientStyle}
        />
        <div className="bg-[#1b1b1e] group-hover:bg-[#1d1d20] transition-colors relative rounded-2xl h-full">
          <div className="absolute inset-0 bg-dots fade-y opacity-40" />
          <div
            className="absolute h-full opacity-[0.07] hidden aspect-square bg-gradient-to-c from-sky-500 to-transparent to-70% -top-1/2 -left-1/2"
            style={gradientStyle}
          />
          <div className="relative p-8 h-full flex flex-col">
            <div className="flex justify-between">
              <time
                dateTime="2023-05-25"
                className="font-medium text-gray-400 text-sm"
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
                <div className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-green-600 text-white transition-colors px-2 py-1 rounded-full">
                  {project.tag}
                </div>
              )}
            </h3>
            <p className="text-gray-400 font-medium text-sm mt-3 mb-6 leading-relaxed tracking-wide">
              {project.description}
            </p>
            <ul
              className="flex flex-wrap gap-1.5 text-sm mt-auto"
              aria-label="Technologies used in this project"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="shadow-[0_1px_inset_rgba(255,255,255,0.05),0_1px_1px_rgba(0,0,0,0.2)] text-xs tracking-wide font-medium bg-gray-700/20 text-gray-400 sm:group-hover:bg-gray-50/5 sm:group-hover:text-gray-300 transition-colors px-3 py-1 rounded-md"
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
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
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
                  className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-sm font-medium px-4 py-2 pointer-events-auto"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "rgba(39, 39, 42, .9)" }}
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
