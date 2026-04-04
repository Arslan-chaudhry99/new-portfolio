"use client";

import ReactMarkdown from "react-markdown";

type BlogBodyProps = {
  content: string;
};

export default function BlogBody({ content }: BlogBodyProps) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-gray-100 first:mt-0">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mb-4 text-gray-400 font-medium leading-relaxed tracking-wide">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-200">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 ml-5 list-disc space-y-2 text-gray-400 font-medium">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-sky-400 underline-offset-4 hover:underline"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        pre: ({ children }) => (
          <pre className="mb-4 rounded-lg bg-zinc-900/80 p-4 text-sm text-gray-200 ring-1 ring-gray-700/40 overflow-x-auto">
            {children}
          </pre>
        ),
        code: ({ className, children, ...props }) => {
          const isFenced = Boolean(className?.includes("language-"));
          if (isFenced) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
          return (
            <code
              className="rounded bg-zinc-800/90 px-1.5 py-0.5 text-sm text-sky-300"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
