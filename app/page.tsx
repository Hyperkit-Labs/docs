'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, Package, Wallet, FileText, Bot, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const tocItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'projects', label: 'Projects' },
    { id: 'quick-start', label: 'Quick Start' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => {}} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <h1 id="welcome" className="text-4xl font-medium tracking-tight text-white mb-6 scroll-mt-20">
            Welcome to Hyperkit Documentation
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Explore our suite of Web3 development tools and platforms. Each project includes comprehensive documentation, guides, and examples to help you build decentralized applications.
          </p>

          <h2 id="projects" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Projects
          </h2>
          <p className="leading-7 mb-8 text-slate-400">
            Choose a project to get started:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/sdk"
              className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Package className="w-6 h-6 text-purple-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-purple-400 mb-2">Hyperkit SDK</h3>
              <p className="text-sm text-slate-400 mb-4">
                React SDK for building decentralized applications with components and hooks for wallet connections, token swaps, bridging, and staking.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Get Started</span>
              </div>
            </Link>

            <Link
              href="/aa-hyperwallet"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <Wallet className="w-6 h-6 text-violet-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-violet-400 mb-2">AA Hyperwallet</h3>
              <p className="text-sm text-slate-400 mb-4">
                Network-agnostic, gasless smart wallet infrastructure for EVM, Solana, and SUI blockchains with visual builder.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Get Started</span>
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
              <h3 className="text-xl font-medium text-white group-hover:text-indigo-400 mb-2">ERC-1066-x402</h3>
              <p className="text-sm text-slate-400 mb-4">
                Standardized status codes, policy checks, and intent validation for Web3 transactions with HTTP/x402 gateway integration.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Get Started</span>
              </div>
            </Link>

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
              <h3 className="text-xl font-medium text-white group-hover:text-amber-400 mb-2">Hyperagent</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI-powered smart contract development platform that generates, audits, and deploys contracts from natural language.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Get Started</span>
              </div>
            </Link>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/sdk/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">Hyperkit SDK</div>
              <div className="text-xs text-slate-400">Install and configure the React SDK</div>
            </Link>
            <Link
              href="/aa-hyperwallet/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">AA Hyperwallet</div>
              <div className="text-xs text-slate-400">Set up your smart wallet</div>
            </Link>
            <Link
              href="/erc1066-x402/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">ERC-1066-x402</div>
              <div className="text-xs text-slate-400">Integrate status codes and policies</div>
            </Link>
            <Link
              href="/hyperagent/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">Hyperagent</div>
              <div className="text-xs text-slate-400">Start generating smart contracts</div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
