import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { WhitepaperMarkdown } from '@/components/pages/whitepaper-markdown';
import { loadWhitepaperSource } from '@/lib/load-whitepaper-source';
import {
  extractWhitepaperToc,
  prepareWhitepaperMarkdown,
} from '@/lib/whitepaper-markdown-transform';
import { DOC_MODE_META } from '@/lib/doc-modes';

export const metadata: Metadata = {
  title: 'Hyperkit Whitepaper v1.2.0',
  description:
    'Hyperkit: An AI-Native Workflow System for Smart Contract Delivery. Architecture, validation, market model, roadmap, and appendices.',
};

export default function WhitepaperPage() {
  const raw = loadWhitepaperSource();
  const markdown = prepareWhitepaperMarkdown(raw);
  const tocItems = extractWhitepaperToc(markdown);

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-[52rem] mx-auto py-10 px-6 lg:px-12 pb-32">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Docs
            </Link>
            <span>/</span>
            <span className="text-amber-400">Whitepaper</span>
          </div>

          <header className="mb-12 border-b border-white/10 pb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {DOC_MODE_META.explanation.label}
            </p>
            <h1 className="text-4xl font-medium tracking-tight text-white mb-4">
              Hyperkit Whitepaper
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Hyperkit: An AI-Native Workflow System for Smart Contract Delivery. Toward a Verifiable and
              Deployment-Aware Web3 Application Factory.
            </p>
            <dl className="mt-6 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-slate-600">Version</dt>
                <dd className="text-slate-400">1.2.0</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wide text-slate-600">Date</dt>
                <dd className="text-slate-400">April 14, 2026</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] uppercase tracking-wide text-slate-600">Author</dt>
                <dd className="text-slate-400">Justine Lupasi</dd>
              </div>
            </dl>
          </header>

          <WhitepaperMarkdown markdown={markdown} />
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
