'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AIGenerationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'llm-providers', label: 'LLM Providers' },
    { id: 'template-system', label: 'Template System' },
    { id: 'generation-flow', label: 'Generation Flow' }
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
            <span className="text-amber-400">AI Generation</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">AI Generation</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Hyperagent uses advanced language models to transform natural language descriptions into production-ready Solidity smart contracts.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The AI generation system processes natural language input, retrieves relevant contract templates, and uses LLM providers to generate optimized Solidity code. The system understands context, requirements, and best practices to produce secure, efficient contracts.
          </p>

          <h2 id="llm-providers" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            LLM Providers
          </h2>
          <p className="leading-7 mb-4">
            Hyperagent supports multiple LLM providers:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Google Gemini</h3>
              <p className="text-xs text-slate-400">Default provider, optimized for code generation</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">OpenAI GPT</h3>
              <p className="text-xs text-slate-400">Alternative provider, supports GPT-4 and GPT-3.5</p>
            </div>
          </div>

          <h2 id="template-system" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Template System
          </h2>
          <p className="leading-7 mb-4">
            Hyperagent uses a template retrieval system to find relevant contract patterns:
          </p>

          <CodeBlock
            language="python"
            code={`<span class="text-purple-400">from</span> hyperagent.rag.template_retriever <span class="text-purple-400">import</span> TemplateRetriever

<span class="text-slate-500"># Initialize template retriever</span>
retriever = TemplateRetriever(llm_provider, db_session=db)

<span class="text-slate-500"># Generate contract from description</span>
contract_code = <span class="text-purple-400">await</span> retriever.retrieve_and_generate(
    nlp_description=<span class="text-green-400">"Create an ERC20 token"</span>,
    contract_type=<span class="text-green-400">"token"</span>
)`}
          />

          <h2 id="generation-flow" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Generation Flow
          </h2>
          <p className="leading-7 mb-4">
            The generation process follows these steps:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">1. Parse Natural Language</h3>
              <p className="text-xs text-slate-400">Extract requirements and contract type from description</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">2. Retrieve Templates</h3>
              <p className="text-xs text-slate-400">Find relevant contract templates from vector database</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">3. Generate Code</h3>
              <p className="text-xs text-slate-400">Use LLM to generate Solidity code based on templates and requirements</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">4. Validate & Optimize</h3>
              <p className="text-xs text-slate-400">Check syntax, optimize gas usage, and ensure best practices</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Core Concepts
              </div>
            </Link>
            <Link href="/hyperagent/concepts/auditing" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Security Auditing
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

