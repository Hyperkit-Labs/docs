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
            <Link href="/hyperagent" className="hover:text-slate-300 transition-colors">Hyperagent</Link>
            <span>/</span>
            <span className="text-amber-400">CLI</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">CLI</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Command-line interface for interacting with Hyperagent from your terminal.
          </p>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            Install Hyperagent CLI:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> hyperagent

<span class="text-slate-500"># Or install from source</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-purple-400">-e</span> .`}
          />

          <h2 id="commands" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Commands
          </h2>
          <div className="space-y-6 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">hyperagent contract generate</h3>
              <p className="text-xs text-slate-400 mb-3">Generate a contract from natural language</p>
              <CodeBlock
                language="bash"
                code={`hyperagent contract generate <span class="text-green-400">"Create an ERC20 token"</span>`}
              />
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">hyperagent contract deploy</h3>
              <p className="text-xs text-slate-400 mb-3">Deploy a contract to a network</p>
              <CodeBlock
                language="bash"
                code={`hyperagent contract deploy <span class="text-purple-400">--network</span> mantle-testnet <span class="text-purple-400">--file</span> contract.sol`}
              />
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">hyperagent workflow create</h3>
              <p className="text-xs text-slate-400 mb-3">Create a complete workflow</p>
              <CodeBlock
                language="bash"
                code={`hyperagent workflow create <span class="text-green-400">"Create ERC20 token"</span> <span class="text-purple-400">--network</span> mantle-testnet`}
              />
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">hyperagent system status</h3>
              <p className="text-xs text-slate-400 mb-3">Check system health and status</p>
              <CodeBlock
                language="bash"
                code={`hyperagent system status`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/websocket" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                WebSocket API
              </div>
            </Link>
            <Link href="/hyperagent/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
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

