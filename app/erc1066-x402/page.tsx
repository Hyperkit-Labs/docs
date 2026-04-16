'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ERC1066X402Page() {
  const tocItems = [
    { id: 'what-is', label: 'What is ERC-1066 and x402?' },
    { id: 'why-use', label: 'Why this matters' },
    { id: 'scope', label: 'Current Scope' },
    { id: 'next-steps', label: 'Next Steps' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-indigo-400">ERC-1066 and x402</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">ERC-1066 and x402</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This section explains the status semantics, policy logic, and payment concepts used in the Hyperkit stack. It should be read as protocol and payment documentation, not as proof that every referenced implementation path is equally mature or fully deployed.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
              v0.2.0
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is ERC-1066 and x402?
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066 provides machine-readable status semantics. x402 provides a payment-wall pattern for supported flows. In the Hyperkit system, these concepts matter because the platform needs both structured status feedback and explicit payment behavior inside workflow execution.
          </p>

          <Callout type="info" title="Current Product Truth">
            In current HyperAgent documentation, x402 is the intended payment contract for supported v0.1.0 or v0.2.0 flows, while credits-era wording should be treated as legacy or transitional unless a page states otherwise.
          </Callout>

          <h2 id="why-use" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Why this matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Machine-readable status</h3>
              <p className="text-xs text-slate-400">Structured status semantics help policy logic, release gating, and machine-driven branching.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-indigo-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Policy visibility</h3>
              <p className="text-xs text-slate-400">Status and policy surfaces clarify why a workflow or release path is blocked, allowed, or incomplete.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Payment-wall clarity</h3>
              <p className="text-xs text-slate-400">x402 expresses an intended payment model for supported flows without forcing the docs to keep legacy billing language as equal truth.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Globe className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">System alignment</h3>
              <p className="text-xs text-slate-400">The standards matter most when they are tied back to the current product path and current enforcement scope.</p>
            </div>
          </div>

          <h2 id="scope" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Scope
          </h2>
          <p className="leading-7 mb-6">
            This documentation section should not imply that all protocol-level examples map one-to-one to current production support across every chain. The safer reading is narrower. These semantics and payment concepts are part of the Hyperkit system design, and the currently documented payment path is centered on supported workflow flows rather than on universal network parity.
          </p>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/erc1066-x402/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
              </div>
              <p className="text-sm text-slate-400">Review the current setup and scope assumptions before adopting older examples literally.</p>
            </Link>
            <Link
              href="/erc1066-x402/concepts"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400">Core Concepts</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
              </div>
              <p className="text-sm text-slate-400">Read the semantics and protocol layers with the current Hyperkit truth set in mind.</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
