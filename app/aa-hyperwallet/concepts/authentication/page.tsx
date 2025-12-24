'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AuthenticationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'methods', label: 'Authentication Methods' }
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
            <span className="text-violet-400">Authentication</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Authentication</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Multiple authentication methods supported by AA Hyperwallet for flexible user onboarding.
          </p>

          <h2 id="methods" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Authentication Methods
          </h2>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-sm text-slate-400">Email-based authentication with magic links</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">SMS</h3>
              <p className="text-sm text-slate-400">SMS-based authentication with OTP codes</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Social Logins</h3>
              <p className="text-sm text-slate-400">OAuth providers like Google, Twitter, GitHub</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Passkeys</h3>
              <p className="text-sm text-slate-400">WebAuthn-based passkey authentication</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">External Wallets</h3>
              <p className="text-sm text-slate-400">MetaMask, Coinbase Wallet, WalletConnect</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/aa-hyperwallet/concepts/account-abstraction" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Account Abstraction
              </div>
            </Link>
            <Link href="/aa-hyperwallet/concepts/sessions" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center justify-end gap-2">
                Sessions
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

