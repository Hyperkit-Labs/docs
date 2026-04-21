'use client';

import React, { isValidElement, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { DocsMermaid } from '@/components/pages/docs-mermaid';
import { WhitepaperEvidenceRadarChart } from '@/components/pages/whitepaper-evidence-radar-chart';
import { WhitepaperMarketSizingChart } from '@/components/pages/whitepaper-market-sizing-chart';
import { slugifyWhitepaperHeading } from '@/lib/whitepaper-markdown-transform';

function getPlainText(children: ReactNode): string {
  if (children == null) return '';
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getPlainText).join('');
  if (typeof children === 'object' && 'props' in children) {
    const el = children as React.ReactElement<{ children?: ReactNode }>;
    return getPlainText(el.props.children);
  }
  return '';
}

function headingId(children: ReactNode): string {
  return slugifyWhitepaperHeading(getPlainText(children));
}

type WhitepaperMarkdownProps = {
  markdown: string;
};

export function WhitepaperMarkdown({ markdown }: WhitepaperMarkdownProps) {
  const components: Components = {
    pre: ({ children }) => {
      if (
        isValidElement(children) &&
        typeof children.props === 'object' &&
        children.props !== null &&
        'className' in children.props
      ) {
        const cls = String((children.props as { className?: string }).className ?? '');
        if (cls.includes('language-whitepaper-market-sizing')) {
          return <WhitepaperMarketSizingChart />;
        }
        if (cls.includes('language-whitepaper-radar-evidence-status')) {
          return <WhitepaperEvidenceRadarChart />;
        }
        if (cls.includes('language-mermaid')) {
          const chart = getPlainText(
            (children.props as { children?: ReactNode }).children
          ).trim();
          return <DocsMermaid chart={chart} />;
        }
      }
      return (
        <pre className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-[#0A0A0F] p-4 text-sm text-slate-300">
          {children}
        </pre>
      );
    },
    code: ({ className, children, ...rest }) => {
      const isBlock = className?.includes('language-');
      if (isBlock) {
        return (
          <code className={className} {...rest}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-indigo-200"
          {...rest}
        >
          {children}
        </code>
      );
    },
    h2: ({ children, ...rest }) => (
      <h2
        id={headingId(children)}
        className="mt-14 mb-4 scroll-mt-24 text-2xl font-medium tracking-tight text-white first:mt-0"
        {...rest}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...rest }) => (
      <h3
        id={headingId(children)}
        className="mt-10 mb-3 scroll-mt-24 text-xl font-medium tracking-tight text-slate-100"
        {...rest}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...rest }) => (
      <h4
        id={headingId(children)}
        className="mt-8 mb-2 scroll-mt-24 text-lg font-medium text-slate-200"
        {...rest}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...rest }) => (
      <p className="mb-5 text-[15px] leading-[1.75] text-slate-400" {...rest}>
        {children}
      </p>
    ),
    ul: ({ children, ...rest }) => (
      <ul className="mb-6 ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-slate-400" {...rest}>
        {children}
      </ul>
    ),
    ol: ({ children, ...rest }) => (
      <ol
        className="mb-6 ml-5 list-decimal space-y-2 text-[15px] leading-relaxed text-slate-400"
        {...rest}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...rest }) => (
      <li className="pl-1 marker:text-slate-600" {...rest}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...rest }) => (
      <blockquote
        className="my-6 border-l-2 border-indigo-500/40 pl-4 text-slate-400 italic"
        {...rest}
      >
        {children}
      </blockquote>
    ),
    a: ({ href, children, ...rest }) => (
      <a
        href={href}
        className="text-indigo-400 underline decoration-indigo-500/30 underline-offset-2 hover:text-indigo-300"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-12 border-white/10" />,
    table: ({ children, ...rest }) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
        <table className="w-full min-w-[min(100%,48rem)] border-collapse text-left text-sm" {...rest}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...rest }) => (
      <thead className="border-b border-white/10 bg-white/[0.04]" {...rest}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...rest }) => <tbody className="divide-y divide-white/5" {...rest}>{children}</tbody>,
    tr: ({ children, ...rest }) => <tr {...rest}>{children}</tr>,
    th: ({ children, ...rest }) => (
      <th
        className="px-3 py-2.5 align-top text-xs font-semibold uppercase tracking-wide text-slate-300"
        {...rest}
      >
        {children}
      </th>
    ),
    td: ({ children, ...rest }) => (
      <td className="px-3 py-2.5 align-top text-slate-400" {...rest}>
        {children}
      </td>
    ),
    strong: ({ children, ...rest }) => (
      <strong className="font-medium text-slate-200" {...rest}>
        {children}
      </strong>
    ),
    em: ({ children, ...rest }) => (
      <em className="text-slate-300 not-italic" {...rest}>
        {children}
      </em>
    ),
  };

  return (
    <article className="whitepaper-body max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
