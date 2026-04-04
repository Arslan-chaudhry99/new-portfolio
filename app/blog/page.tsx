import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { blogPosts } from "./posts";

export default function BlogIndexPage() {
  return (
    <div id="___gatsby">
      <div id="gatsby-focus-wrapper" style={{ outline: "none" }}>
        <Menu />
        <main className="relative min-h-screen">
          <section className="md:h-screen-1/2 pt-40 pb-20 md:pt-40 md:pb-20 px-8 2xl:px-32 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-semibold tracking-tight leading-tight text-gray-100">
              Blogs
            </h1>
         
          </section>

          <section className="container mx-auto px-8 2xl:px-32 pb-32">
            <ul className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl relative overflow-hidden shadow-md hover:shadow-2xl transition bg-[#1b1b1e] ring-1 ring-inset ring-gray-700/30"
                    style={
                      {
                        "--highlight-color": "#0ea5e9",
                      } as React.CSSProperties
                    }
                  >
                    <div className="absolute inset-0 bg-dots fade-y opacity-50" />
                    <div className="absolute z-10 bottom-0 right-0 h-[80%] aspect-square bg-gradient-to-c from-sky-500 to-[70%] to-transparent rounded-full opacity-20 sm:group-hover:opacity-30 group-hover:scale-110 transition duration-300 pointer-events-none" />

                    <div className="relative z-20 flex flex-col h-full">
                      <div className="p-8 sm:p-10 flex flex-col flex-1">
                        <time
                          dateTime={post.dateIso}
                          className="text-sm font-medium text-gray-500"
                        >
                          {post.date}
                        </time>
                        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-gray-100 group-hover:text-sky-300 transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-4 text-gray-400 font-medium text-sm leading-relaxed tracking-wide flex-1">
                          {post.excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-500">
                          <span>{post.readTime}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-sky-400 group-hover:underline underline-offset-4">
                            Read post
                          </span>
                        </div>
                      </div>
                      <div className="relative h-48 w-full overflow-hidden border-t border-gray-700/30">
                        <Image
                          src={post.cover}
                          alt={post.coverAlt}
                          className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#1b1b1e] via-transparent to-transparent pointer-events-none"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="h-32" aria-hidden="true" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
