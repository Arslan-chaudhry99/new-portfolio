"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  flattenProjects,
  projectMatchesCategory,
} from "../projects/data";

type PortfolioCategory = {
  id: string;
  label: string;
};

type PortfolioTabsProps = {
  categories: readonly PortfolioCategory[];
};

export default function PortfolioTabs({ categories }: PortfolioTabsProps) {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "all",
  );

  const allProjects = flattenProjects();
  const filteredProjects = allProjects.filter(({ project }) =>
    projectMatchesCategory(project, activeCategory),
  );

  return (
    <>
      <div className="sticky top-24 z-20 mt-12 lg:mt-16 -mx-8 px-8 2xl:-mx-32 2xl:px-32 py-4 bg-background/80 backdrop-blur-md border-b border-brand-border">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-1 text-sm sm:text-base font-medium transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "text-foreground border-primary-light"
                    : "text-muted border-transparent hover:text-secondary"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        {filteredProjects.length === 0 ? (
          <p className="text-center text-muted font-medium">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {filteredProjects.map(({ project, year }, index) => (
              <ProjectCard
                key={`${year}-${project.title}`}
                project={project}
                index={index}
                year={year}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
