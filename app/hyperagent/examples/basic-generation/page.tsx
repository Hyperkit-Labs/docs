'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BasicGenerationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'example', label: 'Example' }
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
            <Link href="/hyperagent/examples" className="hover:text-slate-300 transition-colors">Examples</Link>
            <span>/</span>
            <span className="text-amber-400">Basic Generation</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Basic Generation Example</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Generate a simple ERC20 token contract using the API.
          </p>

          <h2 id="example" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Example
          </h2>
          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST <span class="text-green-400">http://localhost:8000/api/v1/contracts/generate</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{
    "nlp_description": "Create an ERC20 token with transfer, approve, and balance functions",
    "contract_type": "token"
  }'</span>`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Examples
              </div>
            </Link>
            <Link href="/hyperagent/examples/custom-audit" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Custom Audit
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

