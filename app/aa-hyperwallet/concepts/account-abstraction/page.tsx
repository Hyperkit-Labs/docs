'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AccountAbstractionPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'erc4337', label: 'ERC-4337' },
    { id: 'eip7702', label: 'EIP-7702' },
    { id: 'benefits', label: 'Benefits' }
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
            <Link href="/aa-hyperwallet" className="hover:text-slate-300 transition-colors">AA Hyperwallet</Link>
            <span>/</span>
            <Link href="/aa-hyperwallet/concepts" className="hover:text-slate-300 transition-colors">Core Concepts</Link>
            <span>/</span>
            <span className="text-violet-400">Account Abstraction</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Account Abstraction</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Account Abstraction enables smart contract wallets with flexible authentication, gasless transactions, and enhanced user experience.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Account Abstraction separates account logic from transaction validation, allowing wallets to be smart contracts with custom authentication and spending rules. This enables features like social logins, session keys, and gasless transactions.
          </p>

          <h2 id="erc4337" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            ERC-4337
          </h2>
          <p className="leading-7 mb-4">
            ERC-4337 is the most widely adopted Account Abstraction standard. It introduces UserOperations, Bundlers, and Paymasters to enable smart contract wallets without protocol changes.
          </p>

          <Callout type="info" title="ERC-4337 Components">
            ERC-4337 introduces UserOperations (user intents), Bundlers (transaction aggregators), and Paymasters (gas sponsors) to enable Account Abstraction.
          </Callout>

          <h2 id="eip7702" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            EIP-7702
          </h2>
          <p className="leading-7 mb-4">
            EIP-7702 enables EOA accounts to temporarily act as smart contracts, providing a smoother migration path for existing wallets.
          </p>

          <h2 id="benefits" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Benefits
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Flexible Authentication</h3>
              <p className="text-xs text-slate-400">Support email, SMS, social logins, and passkeys</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Gasless Transactions</h3>
              <p className="text-xs text-slate-400">Enable gasless transactions through paymasters</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Session Keys</h3>
              <p className="text-xs text-slate-400">Temporary keys with spending limits and expiration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/aa-hyperwallet/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Core Concepts
              </div>
            </Link>
            <Link href="/aa-hyperwallet/concepts/authentication" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center justify-end gap-2">
                Authentication
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

