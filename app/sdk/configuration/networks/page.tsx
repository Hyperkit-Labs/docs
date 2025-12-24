'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NetworksPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'supported-networks', label: 'Supported Networks' },
    { id: 'usage', label: 'Usage' }
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
            <Link href="/sdk/configuration" className="hover:text-slate-300 transition-colors">Configuration</Link>
            <span>/</span>
            <span className="text-purple-400">Networks</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Networks</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Pre-configured network settings for popular EVM-compatible blockchains.
          </p>

          <h2 id="supported-networks" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Supported Networks
          </h2>
          <p className="leading-7 mb-4">
            Hyperkit SDK includes configurations for multiple networks:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Metis Hyperion Testnet</li>
              <li>• Base Sepolia</li>
              <li>• Mantle Testnet</li>
              <li>• Ethereum Sepolia</li>
              <li>• Polygon Mumbai</li>
            </ul>
          </div>

          <h2 id="usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Usage
          </h2>
          <CodeBlock
            language="typescript"
            filename="NetworksExample.ts"
            code={`<span class="text-purple-400">import</span> { NETWORKS } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-slate-500">// Access network configuration</span>
<span class="text-purple-400">const</span> network = NETWORKS.BASE_SEPOLIA;

<span class="text-slate-500">// Network properties</span>
<span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(network.chainId);
<span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(network.name);
<span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(network.rpcUrl);`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/configuration" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Configuration
              </div>
            </Link>
            <Link href="/sdk/configuration/tokens" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Tokens
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

