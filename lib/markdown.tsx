import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

type Props = {
  content: string;
};

const components: Components = {
  a: ({ node, ...props }) => (
    <a {...props} className="text-brand underline" />
  ),

  code: ({ inline, children, ...props }) => {
    if (inline) {
      return (
        <code
          {...props}
          className="bg-slate-100 px-1 rounded text-sm"
        >
          {children}
        </code>
      );
    }

    return (
      <pre className="bg-slate-100 rounded p-4 overflow-auto">
        <code>{children}</code>
      </pre>
    );
  },

  h1: ({ children }) => (
    <h1 className="text-2xl font-semibold mt-6 mb-2">{children}</h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-6 mb-2">{children}</h2>
  ),

  p: ({ children }) => (
    <p className="leading-relaxed mb-4">{children}</p>
  ),
};

export function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
