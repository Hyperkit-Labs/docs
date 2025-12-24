'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CLIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'installation', label: 'Installation' },
    { id: 'commands', label: 'Commands' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => {}} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <Link href="/sdk" className="hover:text-slate-300 transition-colors">Hyperkit SDK</Link>
            <span>/</span>
            <span className="text-purple-400">CLI</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">CLI</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Command-line interface for Hyperkit SDK operations and utilities.
          </p>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            The CLI is included with the Hyperkit SDK package. Install globally to use it from anywhere:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-purple-400">-g</span> <span class="text-green-400">hyperkit</span>`}
          />

          <h2 id="commands" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Commands
          </h2>
          <p className="leading-7 mb-4">
            Use the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">hyperkit-sdk</code> command:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">hyperkit-sdk</span> <span class="text-purple-400">--help</span>`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/configuration/contracts" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Contracts
              </div>
            </Link>
            <Link href="/sdk/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Examples
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

