'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, Bot, Shield, Rocket, Globe, CreditCard, Zap, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function HyperagentPage() {
  const tocItems = [
    { id: 'what-is', label: 'What is Hyperagent?' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'next-steps', label: 'Next Steps' }
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
            <span className="text-amber-400">Hyperagent</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Hyperagent</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            AI-powered smart contract development platform. From natural language to production-ready, audited contracts in minutes.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              v1.0.0
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              Python 3.10+
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is Hyperagent?
          </h2>
          <p className="leading-7 mb-6">
            Hyperagent is an AI-powered platform that transforms natural language descriptions into production-ready smart contracts. It automates the entire development lifecycle: generation, security auditing, testing, and multi-chain deployment.
          </p>

          <Callout type="info" title="AI-Powered Development">
            Hyperagent uses advanced LLM providers (Gemini, OpenAI) to understand your requirements and generate optimized Solidity code, reducing development time from weeks to minutes.
          </Callout>

          <h2 id="key-features" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Bot className="w-5 h-5 text-amber-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">AI-Powered Generation</h3>
              <p className="text-xs text-slate-400">Natural language → Solidity contracts</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Automated Auditing</h3>
              <p className="text-xs text-slate-400">Security analysis with Slither, Mythril, Echidna</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Rocket className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Multi-Chain Deployment</h3>
              <p className="text-xs text-slate-400">Hyperion, Mantle, Avalanche support</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <CreditCard className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">x402 Payments</h3>
              <p className="text-xs text-slate-400">Pay-per-use on Avalanche networks</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Parallel Deployment</h3>
              <p className="text-xs text-slate-400">10-50x faster with Hyperion PEF</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Code2 className="w-5 h-5 text-indigo-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">CLI & API</h3>
              <p className="text-xs text-slate-400">Command-line tools and REST API</p>
            </div>
          </div>

          <h2 id="architecture" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Architecture
          </h2>
          <p className="leading-7 mb-4">
            Hyperagent is built with a modern, scalable architecture:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Backend</h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>• Python 3.10+ (FastAPI)</li>
                  <li>• PostgreSQL database</li>
                  <li>• Redis caching</li>
                  <li>• LLM providers (Gemini, OpenAI)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-3">Frontend</h3>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li>• Next.js 16</li>
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• Real-time WebSocket updates</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick Start
          </h2>
          <p className="leading-7 mb-4">
            Get started with Hyperagent in three simple steps:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Install Dependencies</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-slate-500"># Clone repository</span>
<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> <span class="text-green-400">https://github.com/Hyperkit-Labs/hyperagent.git</span>
<span class="text-blue-400">cd</span> hyperagent

<span class="text-slate-500"># Create virtual environment</span>
<span class="text-blue-400">python</span> <span class="text-purple-400">-m</span> venv venv
<span class="text-blue-400">source</span> venv/bin/activate  <span class="text-slate-500"># Windows: venv\\Scripts\\activate</span>

<span class="text-slate-500"># Install dependencies</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-purple-400">-r</span> requirements.txt`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Configure Environment</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-slate-500"># Copy environment template</span>
<span class="text-blue-400">cp</span> env.example .env

<span class="text-slate-500"># Edit .env with your API keys</span>
<span class="text-slate-500"># GEMINI_API_KEY=your_key</span>
<span class="text-slate-500"># DATABASE_URL=postgresql://...</span>
<span class="text-slate-500"># THIRDWEB_CLIENT_ID=your_client_id</span>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Start Server</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-slate-500"># Initialize database</span>
<span class="text-blue-400">alembic</span> upgrade head

<span class="text-slate-500"># Start development server</span>
<span class="text-blue-400">uvicorn</span> hyperagent.api.main:app <span class="text-purple-400">--reload</span>`}
              />
            </div>
          </div>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Install and set up Hyperagent in your environment</p>
            </Link>
            <Link
              href="/hyperagent/concepts"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Core Concepts</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Learn about AI generation, auditing, and deployment</p>
            </Link>
            <Link
              href="/hyperagent/guides"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Guides</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Step-by-step tutorials and best practices</p>
            </Link>
            <Link
              href="/hyperagent/api-reference"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">API Reference</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Complete API documentation</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

