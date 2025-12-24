'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentsAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'deploy', label: 'Deploy Contract' },
    { id: 'get-status', label: 'Get Deployment Status' }
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
            <Link href="/hyperagent/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-amber-400">Deployments</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Deployments API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Deploy contracts to supported blockchain networks.
          </p>

          <h2 id="deploy" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Deploy Contract
          </h2>
          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">POST</span> /api/v1/deployments

<span class="text-slate-500">Request Body:</span>
{
  <span class="text-green-400">"contract_code"</span>: <span class="text-green-400">"pragma solidity ^0.8.0; ..."</span>,
  <span class="text-green-400">"network"</span>: <span class="text-green-400">"mantle-testnet"</span>,
  <span class="text-green-400">"constructor_args"</span>: []
}

<span class="text-slate-500">Response:</span>
{
  <span class="text-green-400">"deployment_id"</span>: <span class="text-green-400">"uuid"</span>,
  <span class="text-green-400">"status"</span>: <span class="text-green-400">"pending"</span>,
  <span class="text-green-400">"tx_hash"</span>: <span class="text-green-400">null</span>
}`}
          />

          <h2 id="get-status" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Get Deployment Status
          </h2>
          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">GET</span> /api/v1/deployments/{deployment_id}

<span class="text-slate-500">Response:</span>
{
  <span class="text-green-400">"deployment_id"</span>: <span class="text-green-400">"uuid"</span>,
  <span class="text-green-400">"status"</span>: <span class="text-green-400">"completed"</span>,
  <span class="text-green-400">"contract_address"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"tx_hash"</span>: <span class="text-green-400">"0x..."</span>
}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/contracts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Contracts API
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/workflows" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Workflows API
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

