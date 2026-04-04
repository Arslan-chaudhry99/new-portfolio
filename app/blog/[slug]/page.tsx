import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import BlogBody from "../../components/BlogBody";
import { blogPosts, getPostBySlug } from "../posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} · Arslan Chaudhry`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen">
          <article className="pt-40 pb-24 px-8 2xl:px-32">
            <div className="container mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:underline underline-offset-4 mb-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to blog
              </Link>

              <header className="mb-10">
                <time
                  dateTime={post.dateIso}
                  className="text-sm font-medium text-gray-500"
                >
                  {post.date}
                </time>
                <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-100">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg text-gray-400 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm text-gray-500 font-medium">
                  {post.readTime}
                </p>
              </header>

              <div className="relative rounded-2xl overflow-hidden ring-1 ring-inset ring-gray-700/30 mb-12 aspect-[21/9] max-h-72">
                <Image
                  fill
                  src={post.cover}
                  alt={post.coverAlt}
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 48rem, 100vw"
                />
                <div className="absolute inset-0 bg-dots fade-y opacity-40 pointer-events-none" />
              </div>

              <div
                className=""
                // style={{ background: "rgba(39, 39, 42, .9)" }}
              >
                <div className="absolute inset-0 bg-dots fade-y opacity-50 pointer-events-none" />
                <div className="relative">
                  <BlogBody content={post.body} />
                </div>
              </div>
            </div>
          </article>
          <section className="h-24" aria-hidden="true" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
