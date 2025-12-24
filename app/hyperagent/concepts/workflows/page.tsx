'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WorkflowsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'workflow-stages', label: 'Workflow Stages' },
    { id: 'status-tracking', label: 'Status Tracking' }
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
            <Link href="/hyperagent/concepts" className="hover:text-slate-300 transition-colors">Core Concepts</Link>
            <span>/</span>
            <span className="text-amber-400">Workflows</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Workflows</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            End-to-end contract lifecycle management from generation to deployment.
          </p>

          <h2 id="workflow-stages" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Workflow Stages
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">1. Generation</h3>
              <p className="text-xs text-slate-400">Generate contract from natural language</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">2. Compilation</h3>
              <p className="text-xs text-slate-400">Compile Solidity code</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">3. Auditing</h3>
              <p className="text-xs text-slate-400">Run security analysis</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">4. Testing</h3>
              <p className="text-xs text-slate-400">Execute test suite</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">5. Deployment</h3>
              <p className="text-xs text-slate-400">Deploy to target network</p>
            </div>
          </div>

          <h2 id="status-tracking" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Status Tracking
          </h2>
          <p className="leading-7 mb-4">
            Monitor workflow progress in real-time via API or WebSocket:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Progress percentage (0-100%)</li>
              <li>• Current stage name</li>
              <li>• Status (pending, running, completed, failed)</li>
              <li>• Error messages (if failed)</li>
              <li>• Results (contract code, audit report, deployment address)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts/x402-payments" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                x402 Payments
              </div>
            </Link>
            <Link href="/hyperagent/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Guides
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

