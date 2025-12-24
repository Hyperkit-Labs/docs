'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, Settings, Bot, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function GuidesPage() {
  const tocItems = [
    { id: 'available-guides', label: 'Available Guides' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <span className="text-indigo-400">Guides</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Guides</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Step-by-step tutorials for common tasks and integrations with ERC-1066-x402.
          </p>

          <h2 id="available-guides" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Available Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/erc1066-x402/guides/gateway-setup"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Settings className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Gateway Setup</h3>
              <p className="text-sm text-slate-400">Install and configure the gateway service for intent validation</p>
            </Link>

            <Link
              href="/erc1066-x402/guides/agent-integration"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Bot className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Agent Integration</h3>
              <p className="text-sm text-slate-400">Integrate ERC-1066-x402 with AI agents and autonomous systems</p>
            </Link>

            <Link
              href="/erc1066-x402/guides/multi-chain"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Globe className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Multi-Chain Deployment</h3>
              <p className="text-sm text-slate-400">Deploy and use ERC-1066-x402 across multiple blockchain networks</p>
            </Link>

            <Link
              href="/erc1066-x402/guides/deployment"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Rocket className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Contract Deployment</h3>
              <p className="text-sm text-slate-400">Deploy smart contracts to various networks</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Core Concepts
              </div>
            </Link>
            <Link href="/erc1066-x402/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                API Reference
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

