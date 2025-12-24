'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AuditingPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'audit-tools', label: 'Audit Tools' },
    { id: 'audit-report', label: 'Audit Report Structure' }
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
            <span className="text-amber-400">Security Auditing</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Security Auditing</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Automated security analysis using industry-standard tools to identify vulnerabilities and ensure contract safety.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Hyperagent integrates multiple security analysis tools to provide comprehensive vulnerability detection. Each tool focuses on different aspects of smart contract security.
          </p>

          <h2 id="audit-tools" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Audit Tools
          </h2>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Slither</h3>
              <p className="text-sm text-slate-400 mb-3">Static analysis framework for Solidity. Detects common vulnerabilities, code quality issues, and optimization opportunities.</p>
              <p className="text-xs text-slate-500">Detects: Reentrancy, access control issues, integer overflow, and more</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Mythril</h3>
              <p className="text-sm text-slate-400 mb-3">Security analysis tool using symbolic execution. Finds vulnerabilities through deep code analysis.</p>
              <p className="text-xs text-slate-500">Detects: Critical security flaws, logic errors, and edge cases</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Echidna</h3>
              <p className="text-sm text-slate-400 mb-3">Property-based fuzzer for smart contracts. Tests contract invariants and properties.</p>
              <p className="text-xs text-slate-500">Tests: Contract invariants, property violations, and edge cases</p>
            </div>
          </div>

          <h2 id="audit-report" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Audit Report Structure
          </h2>
          <p className="leading-7 mb-4">
            Audit reports include:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Vulnerability list with severity levels</li>
              <li>• Overall risk score (0-100)</li>
              <li>• Count by severity (critical, high, medium, low)</li>
              <li>• Audit status (passed/failed)</li>
              <li>• Recommendations for fixes</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts/ai-generation" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                AI Generation
              </div>
            </Link>
            <Link href="/hyperagent/concepts/deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Deployment
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

