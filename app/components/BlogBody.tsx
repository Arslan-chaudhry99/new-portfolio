import ReactMarkdown from "react-markdown";

type BlogBodyProps = {
  content: string;
};

export default function BlogBody({ content }: BlogBodyProps) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-foreground first:mt-0">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mb-4 text-muted font-medium leading-relaxed tracking-wide">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-secondary">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 ml-5 list-disc space-y-2 text-muted font-medium">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary-light underline-offset-4 hover:underline"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        pre: ({ children }) => (
          <pre className="mb-4 rounded-lg bg-surface/80 p-4 text-sm text-secondary ring-1 ring-brand-border overflow-x-auto">
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
              className="rounded bg-surface-2/90 px-1.5 py-0.5 text-sm text-primary-light"
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
