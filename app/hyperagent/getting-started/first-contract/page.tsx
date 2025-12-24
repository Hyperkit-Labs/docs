'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FirstContractPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'generate-contract', label: 'Generate Contract' },
    { id: 'audit-contract', label: 'Audit Contract' },
    { id: 'deploy-contract', label: 'Deploy Contract' }
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
            <Link href="/hyperagent/getting-started" className="hover:text-slate-300 transition-colors">Getting Started</Link>
            <span>/</span>
            <span className="text-amber-400">First Contract</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Your First Contract</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Generate, audit, and deploy your first smart contract with Hyperagent.
          </p>

          <h2 id="generate-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Generate Contract
          </h2>
          <p className="leading-7 mb-4">
            Generate a contract from natural language:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST <span class="text-green-400">http://localhost:8000/api/v1/contracts/generate</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{
    "nlp_description": "Create a simple ERC20 token contract with transfer and balance functions",
    "contract_type": "token"
  }'</span>`}
          />

          <h2 id="audit-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Audit Contract
          </h2>
          <p className="leading-7 mb-4">
            Run security audit on the generated contract:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST <span class="text-green-400">http://localhost:8000/api/v1/contracts/audit</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{
    "contract_code": "pragma solidity ^0.8.0; ..."
  }'</span>`}
          />

          <h2 id="deploy-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Deploy Contract
          </h2>
          <p className="leading-7 mb-4">
            Deploy the contract to a network:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST <span class="text-green-400">http://localhost:8000/api/v1/deployments</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{
    "contract_code": "pragma solidity ^0.8.0; ...",
    "network": "mantle-testnet",
    "constructor_args": []
  }'</span>`}
          />

          <Callout type="info" title="Workflow API">
            For a complete workflow (generate → audit → deploy), use the workflow API which handles all steps automatically.
          </Callout>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started/local-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Local Setup
              </div>
            </Link>
            <Link href="/hyperagent/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Core Concepts
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

