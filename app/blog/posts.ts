import type { StaticImageData } from "next/image";
import thumbCover from "../assess/imgs/thumbnail.webp";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  readTime: string;
  excerpt: string;
  cover: StaticImageData;
  coverAlt: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-custom-software-real-estate-2026",
    title:
      "3 Ways AI & Custom Software are Redefining Real Estate in 2026",
    date: "April 4, 2026",
    dateIso: "2026-04-04",
    readTime: "4 min read",
    excerpt:
      "The real estate market is faster than ever. While most agents are still manually sorting through emails and updating spreadsheets, the top 1% are using a \"secret weapon\": Custom Automation.",
    cover: thumbCover,
    coverAlt: "Real estate and technology",
    body: `The real estate market is faster than ever. While most agents are still manually sorting through emails and updating spreadsheets, the top 1% are using a "secret weapon": Custom Automation.

If you feel like you're working 24/7 but still missing leads, it's time to move beyond basic templates and look at how AI-driven software can do the heavy lifting for you.

1\\. AI-Powered Lead Qualification
Not every lead is ready to buy. Instead of spending hours on the phone with "lookers," custom AI agents can engage website visitors instantly. These bots qualify leads by asking about budget, location, and timeline—sending only the "hot" leads directly to your phone.

2\\. Dynamic Property Landing Pages
A generic website is a digital brochure; a custom web app is a sales machine. By using smart software, you can create property pages that change based on who is looking at them. If a buyer is looking for "luxury condos," your site should show them exactly that, automatically.

3\\. Seamless Workflow Automation
The "Admin Gap" is where deals go to die. Custom software bridges the gap between your website, your CRM, and your email marketing. Imagine a world where a new lead signs up, receives a personalized text, and is added to a follow-up queue without you lifting a finger.

The Bottom Line
Technology shouldn't be a headache; it should be your most productive team member. Whether it's a mobile app for your boutique agency or a custom backend to manage thousands of listings, the right software allows you to focus on what you do best: closing deals.

Ready to automate your growth? Explore our AI-driven real estate solutions today.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
