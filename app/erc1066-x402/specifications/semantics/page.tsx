'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function SemanticsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'status-map', label: 'Core Status Map' },
    { id: 'byte-encoding', label: 'Byte Encoding Rules' },
    { id: 'machine-readable', label: 'Machine-Readable Branching' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <Link href="/erc1066-x402/specifications" className="hover:text-slate-300 transition-colors">Specifications</Link>
            <span>/</span>
            <span className="text-indigo-400">Semantics</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl font-medium tracking-tight text-white">Semantic Layer Specification</h1>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">ERC-1066</span>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Unified "language" of status codes used by ERC-1066-x402 to enable machine-readable transaction feedback.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Status codes are 1-byte identifiers (represented as hex <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0xXX</code> in EVM and <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">u16</code> in Solana/Sui) that represent the outcome of an intent validation or execution.
          </p>

          <h2 id="status-map" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Core Status Map
          </h2>
          <p className="leading-7 mb-4">
            Standard status codes and their HTTP mappings:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-slate-400 font-medium">ID</th>
                    <th className="px-4 py-3 text-left text-slate-400 font-medium">Hex</th>
                    <th className="px-4 py-3 text-left text-slate-400 font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-slate-400 font-medium">HTTP Map</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-4 py-3 text-slate-400">1</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x01</code></td>
                    <td className="px-4 py-3 text-white">S_SUCCESS</td>
                    <td className="px-4 py-3"><code className="text-green-400">200</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">16</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x10</code></td>
                    <td className="px-4 py-3 text-white">S_DISALLOWED</td>
                    <td className="px-4 py-3"><code className="text-yellow-400">403</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">17</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x11</code></td>
                    <td className="px-4 py-3 text-white">S_ALLOWED</td>
                    <td className="px-4 py-3"><code className="text-green-400">200</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">32</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x20</code></td>
                    <td className="px-4 py-3 text-white">S_TOO_EARLY</td>
                    <td className="px-4 py-3"><code className="text-yellow-400">202</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">33</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x21</code></td>
                    <td className="px-4 py-3 text-white">S_TOO_LATE</td>
                    <td className="px-4 py-3"><code className="text-red-400">410</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">34</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x22</code></td>
                    <td className="px-4 py-3 text-white">S_NONCE_USED</td>
                    <td className="px-4 py-3"><code className="text-yellow-400">409</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">80</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x50</code></td>
                    <td className="px-4 py-3 text-white">S_TRANSFER_FAILED</td>
                    <td className="px-4 py-3"><code className="text-red-400">500</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">84</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0x54</code></td>
                    <td className="px-4 py-3 text-white">S_INSUFFICIENT_FUNDS</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">402</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">160</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0xA0</code></td>
                    <td className="px-4 py-3 text-white">S_INVALID_FORMAT</td>
                    <td className="px-4 py-3"><code className="text-yellow-400">400</code></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-400">162</td>
                    <td className="px-4 py-3"><code className="text-indigo-400">0xA2</code></td>
                    <td className="px-4 py-3 text-white">S_UNSUPPORTED_CHAIN</td>
                    <td className="px-4 py-3"><code className="text-cyan-400">421</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="byte-encoding" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Byte Encoding Rules
          </h2>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-3">EVM (Solidity)</h3>
              <p className="text-xs text-slate-400 mb-2">Implemented as <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">bytes1</code> in <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">StatusCodes.sol</code></p>
              <p className="text-xs text-slate-400">Return values from <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">canExecute</code> should be explicitly cast to <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">bytes1</code></p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-3">Solana (Rust)</h3>
              <p className="text-xs text-slate-400 mb-2">Implemented as <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">u16</code> constants in <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">status.rs</code></p>
              <p className="text-xs text-slate-400">Mapped to <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">ProgramError::Custom(status)</code></p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-3">Sui (Move)</h3>
              <p className="text-xs text-slate-400 mb-2">Implemented as <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">u64</code> constants in <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">intent_framework.move</code></p>
              <p className="text-xs text-slate-400">Mapped to module-specific <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">abort</code> codes</p>
            </div>
          </div>

          <h2 id="machine-readable" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Machine-Readable Branching
          </h2>
          <p className="leading-7 mb-4">
            AI agents must use these codes to determine their next action:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <code className="text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded text-xs">0x11</code>
                <span>→ Call <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">execute()</code></span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded text-xs">0x54</code>
                <span>→ Request funds from Facilitator</span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded text-xs">0x20</code>
                <span>→ Wait and retry</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/specifications/transport" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Transport
              </div>
            </Link>
            <Link href="/erc1066-x402/specifications/schemes" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Schemes
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

