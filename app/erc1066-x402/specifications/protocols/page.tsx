'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import Link from 'next/link';

export default function ProtocolsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'protocol-components', label: 'Protocol Components' },
    { id: 'chain-implementations', label: 'Chain Implementation Details' },
    { id: 'cross-chain-hashing', label: 'Cross-Chain Hashing' }
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
            <span className="text-indigo-400">Protocols</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl font-medium tracking-tight text-white">Multi-Chain Protocol Specification</h1>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">v2.0</span>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            How the intent framework is implemented across different blockchain runtimes while maintaining semantic consistency.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 maintains semantic consistency across different blockchain runtimes through standardized status codes and protocol adapters.
          </p>

          <h2 id="protocol-components" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Protocol Components
          </h2>
          <p className="leading-7 mb-4">
            A complete implementation of the framework on any chain must provide:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <div>
                  <strong className="text-white">Status Registry:</strong> A library or module defining the standard status codes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <div>
                  <strong className="text-white">Policy Storage:</strong> A way to register and store user-defined permissions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <div>
                  <strong className="text-white">Validation Engine:</strong> A pre-flight function (<code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">canExecute</code> or <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">validate_intent</code>) that returns a status code without committing state changes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">4</span>
                <div>
                  <strong className="text-white">Execution Engine:</strong> A function that performs the validation and then executes the intent logic
                </div>
              </li>
            </ol>
          </div>

          <h2 id="chain-implementations" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Chain Implementation Details
          </h2>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-4">EVM (Ethereum, Metis, Mantle, Avalanche)</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-white">Language:</strong> Solidity 0.8.24+</li>
                <li><strong className="text-white">Pattern:</strong> Interface-driven with <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">IIntentValidator</code></li>
                <li><strong className="text-white">Address Format:</strong> 20-byte checksummed hex</li>
                <li><strong className="text-white">Error Handling:</strong> Uses <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">require</code> with custom errors or returning <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">bytes1</code></li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-4">Solana</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-white">Framework:</strong> Anchor 0.30+</li>
                <li><strong className="text-white">Pattern:</strong> Instruction-based dispatch</li>
                <li><strong className="text-white">Address Format:</strong> 32-byte Base58 string</li>
                <li><strong className="text-white">Error Handling:</strong> Mapped to <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">ProgramError::Custom(u16)</code></li>
                <li><strong className="text-white">Pre-flight:</strong> Uses <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">simulateTransaction</code> to extract the custom error code</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-4">Sui</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><strong className="text-white">Language:</strong> Move (Sui Move 2024)</li>
                <li><strong className="text-white">Pattern:</strong> Module-based structs (<code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">Intent</code>, <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">Policy</code>)</li>
                <li><strong className="text-white">Address Format:</strong> 32-byte long hex (<code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x...</code>)</li>
                <li><strong className="text-white">Error Handling:</strong> Uses <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">abort</code> with constant values matching GlobalStatusId</li>
                <li><strong className="text-white">Pre-flight:</strong> Uses <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">dryRunTransactionBlock</code> to extract the MoveAbort code</li>
              </ul>
            </div>
          </div>

          <h2 id="cross-chain-hashing" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Cross-Chain Hashing
          </h2>
          <p className="leading-7 mb-4">
            To track intents across chains, the Gateway uses a normalized Keccak256 hash:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <div>
                  <strong className="text-white">Normalization:</strong> Non-EVM addresses (Solana/Sui) are converted to bytes and padded/truncated to 32 bytes
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <div>
                  <strong className="text-white">Encoding:</strong> The fields are ABI-encoded using the following signature:
                  <CodeBlock
                    language="solidity"
                    code={`<span class="text-blue-400">keccak256</span>(<span class="text-blue-400">abi</span>.<span class="text-blue-400">encode</span>(
  <span class="text-purple-400">bytes32</span>, <span class="text-purple-400">bytes32</span>, <span class="text-purple-400">bytes</span>, 
  <span class="text-purple-400">uint256</span>, <span class="text-purple-400">uint256</span>, <span class="text-purple-400">uint256</span>, 
  <span class="text-purple-400">uint256</span>, <span class="text-purple-400">bytes32</span>
))`}
                  />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <div>
                  <strong className="text-white">ID:</strong> This hash serves as the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">X-Intent-Hash</code> across the entire ecosystem
                </div>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/specifications/schemes" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Schemes
              </div>
            </Link>
            <Link href="/erc1066-x402/specifications" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Specifications
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

