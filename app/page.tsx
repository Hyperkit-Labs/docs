'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, FileText, Bot, Rocket, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { DOC_MODE_META, type DocMode } from '@/lib/doc-modes';
import { useDocsArchive } from '@/components/providers/docs-archive-provider';

const DOC_MODE_ORDER: DocMode[] = ['tutorial', 'how-to', 'reference', 'explanation'];

const DOC_MODE_HREF: Record<DocMode, string> = {
  tutorial: '/hyperagent/getting-started',
  'how-to': '/hyperagent/guides',
  reference: '/hyperagent/api-reference',
  explanation: '/hyperagent/concepts',
};

export default function Page() {
  const { docHref } = useDocsArchive();
  const tocItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'documentation-types', label: 'Documentation types' },
    { id: 'projects', label: 'Documentation areas' },
    { id: 'quick-start', label: 'Quick start' },
    { id: 'reading-paths', label: 'Suggested reading paths' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <h1 id="welcome" className="text-4xl font-medium tracking-tight text-white mb-6 scroll-mt-20">
            Hyperkit Documentation
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Hyperkit is workflow software for multi-chain smart contract delivery. These docs track the HyperAgent system model from the{' '}
            <Link href={docHref('/whitepaper')} className="text-indigo-400 hover:text-indigo-300 underline decoration-indigo-500/30 underline-offset-2">
              Hyperkit whitepaper (v1.2.0)
            </Link>
            : Studio and client surfaces, a JWT-aware gateway, orchestrated workflow stages, and verification and deployment services. Narrative and scope notes follow internal strategy documents and the live HyperAgent repository.
          </p>

          <h2
            id="documentation-types"
            className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20"
          >
            Documentation types
          </h2>
          <p className="leading-7 text-slate-400 mb-6">
            Pages are labeled by intent (Diátaxis). Sidebar and search use the same labels: T tutorial, H how-to, R reference, E explanation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {DOC_MODE_ORDER.map((key) => {
              const m = DOC_MODE_META[key];
              return (
                <Link
                  key={key}
                  href={docHref(DOC_MODE_HREF[key])}
                  className="group block p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-indigo-500/35 hover:bg-white/[0.05] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {m.abbrev}
                      </span>
                      <h3 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors">
                        {m.label}
                      </h3>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 transition-colors"
                      aria-hidden
                    />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.blurb}</p>
                </Link>
              );
            })}
          </div>

          <h2 id="projects" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Documentation areas
          </h2>
          <p className="leading-7 mb-8 text-slate-400">
            Start with HyperAgent for the end-to-end product path. Use ERC-1066 and x402 for payment and status semantics where those standards apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/hyperagent"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Bot className="w-6 h-6 text-amber-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-amber-400 mb-2">HyperAgent</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI-native workflow for specification, generation, audit, simulation, and deploy preparation. Closed-beta scope is documented explicitly (including SKALE Base flows and BYOK).
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Open overview</span>
              </div>
            </Link>

            <Link
              href="/erc1066-x402"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-indigo-400 mb-2">ERC-1066 and x402</h3>
              <p className="text-sm text-slate-400 mb-4">
                Status semantics, policy logic, and HTTP402 payment-flow documentation used in Hyperkit payment and agent-facing responses.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Open overview</span>
              </div>
            </Link>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Quick start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">HyperAgent</div>
              <div className="text-xs text-slate-400">Studio flow, prerequisites, and what the closed-beta path includes</div>
            </Link>
            <Link
              href="/erc1066-x402/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">ERC-1066 and x402</div>
              <div className="text-xs text-slate-400">Gateway, policies, and payment semantics</div>
            </Link>
          </div>

          <h2 id="reading-paths" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Suggested reading paths
          </h2>
          <ul className="space-y-3 text-slate-400 text-sm leading-relaxed mb-8 list-disc pl-5">
            <li>
              <span className="text-slate-300">New to HyperAgent:</span>{' '}
              <Link href="/hyperagent" className="text-amber-400 hover:underline">
                Overview
              </Link>
              , then{' '}
              <Link href="/hyperagent/getting-started" className="text-amber-400 hover:underline">
                Getting started
              </Link>
              , then{' '}
              <Link href="/hyperagent/concepts" className="text-amber-400 hover:underline">
                Concepts
              </Link>
              .
            </li>
            <li>
              <span className="text-slate-300">Shipping a workflow:</span>{' '}
              <Link href="/hyperagent/guides" className="text-amber-400 hover:underline">
                Guides
              </Link>
              , then{' '}
              <Link href="/hyperagent/api-reference" className="text-amber-400 hover:underline">
                API reference
              </Link>
              , then{' '}
              <Link href="/hyperagent/troubleshooting" className="text-amber-400 hover:underline">
                Troubleshooting
              </Link>
              .
            </li>
            <li>
              <span className="text-slate-300">Payments and status codes:</span>{' '}
              <Link href="/erc1066-x402" className="text-indigo-400 hover:underline">
                ERC-1066 and x402 overview
              </Link>
              , then{' '}
              <Link href="/erc1066-x402/concepts" className="text-indigo-400 hover:underline">
                Concepts
              </Link>
              , then{' '}
              <Link href="/erc1066-x402/specifications" className="text-indigo-400 hover:underline">
                Specifications
              </Link>
              .
            </li>
          </ul>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
