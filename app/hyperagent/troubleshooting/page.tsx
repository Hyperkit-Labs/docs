'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TroubleshootingPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'common-issues', label: 'Common Issues' }
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
            <span className="text-amber-400">Troubleshooting</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Troubleshooting</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Common issues and solutions for Hyperagent setup and usage.
          </p>

          <h2 id="common-issues" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Common Issues
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Database Connection Issues</h3>
              <p className="text-sm text-slate-400">Check DATABASE_URL format and ensure PostgreSQL is running</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">API Key Errors</h3>
              <p className="text-sm text-slate-400">Verify GEMINI_API_KEY and THIRDWEB credentials are set correctly</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Deployment Failures</h3>
              <p className="text-sm text-slate-400">Check network RPC endpoints and wallet balance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Examples
              </div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

