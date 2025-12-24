'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function MultiChainPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'chain-mappings', label: 'Chain-Specific Mappings' },
    { id: 'intent-routing', label: 'Intent Routing' },
    { id: 'deployments', label: 'Real-World Deployments' }
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
            <Link href="/erc1066-x402/guides" className="hover:text-slate-300 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-indigo-400">Multi-Chain Deployment</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Multi-Chain Deployment</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            ERC-1066-x402 is designed to be network-agnostic, providing a unified intent and status layer across heterogeneous blockchains.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The system achieves multi-chain support through three key components: a global status specification, on-chain adapters, and gateway adapters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Global Status Spec</h3>
              <p className="text-xs text-slate-400">Standardized status IDs (e.g., 84 for Insufficient Funds) used across all chains</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">On-Chain Adapters</h3>
              <p className="text-xs text-slate-400">Smart contracts (EVM), programs (Solana), or modules (Sui) that map runtime-specific errors</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Gateway Adapters</h3>
              <p className="text-xs text-slate-400">Off-chain middleware handling chain-specific RPC calls and simulation</p>
            </div>
          </div>

          <h2 id="architecture" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Architecture
          </h2>
          <p className="leading-7 mb-6">
            The gateway automatically determines the chain type and routes requests to the appropriate adapter. Each adapter handles chain-specific validation and status code extraction.
          </p>

          <Callout type="info" title="Network-Agnostic Design">
            The gateway uses Chainlist for automatic RPC discovery, so you can add new networks without code changes. See the <Link href="/erc1066-x402/guides/gateway-setup" className="text-indigo-400 hover:underline">Gateway Setup</Link> guide for configuration details.
          </Callout>

          <h2 id="chain-mappings" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Chain-Specific Mappings
          </h2>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            EVM (Ethereum, L2s)
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-6">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-white">Encoding:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">bytes1</code></li>
              <li><strong className="text-white">Mechanism:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">view</code> functions returning status codes</li>
              <li><strong className="text-white">Verification:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">eth_call</code> (readContract)</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Solana (Anchor)
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-6">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-white">Encoding:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">u16</code></li>
              <li><strong className="text-white">Mechanism:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">ProgramError::Custom(status)</code></li>
              <li><strong className="text-white">Verification:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">simulateTransaction</code>. Gateway parses simulation logs to find custom error code</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Sui (Move)
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-6">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-white">Encoding:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">u64</code></li>
              <li><strong className="text-white">Mechanism:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">abort status</code></li>
              <li><strong className="text-white">Verification:</strong> <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">dryRunTransactionBlock</code>. Gateway extracts abort code from transaction effects</li>
            </ul>
          </div>

          <h2 id="intent-routing" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Intent Routing
          </h2>
          <p className="leading-7 mb-6">
            When an agent sends an intent to the Gateway, the following flow occurs:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <span>Agent sends POST request with intent and chainId</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <span>Gateway determines ChainType (EVM, Solana, Sui) from chainId</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <span>Gateway routes to appropriate adapter (EVM/Solana/Sui)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">4</span>
                <span>Adapter performs chain-specific simulation/dry-run</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">5</span>
                <span>Adapter extracts error code/status from chain response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">6</span>
                <span>Adapter maps chain-specific code to global status ID (e.g., 0x54)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">7</span>
                <span>Gateway returns HTTP response with status code and headers</span>
              </li>
            </ol>
          </div>

          <h2 id="deployments" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Real-World Deployments
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 is deployed and verified on multiple networks:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-white">Solana Devnet</h3>
                <a href="https://explorer.solana.com/address/B5fwL2MnnGTsJzShmJYjdVGSDwduyr3Guan9XNAF7Vbb?cluster=devnet" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-slate-400 mb-2">Program ID: <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">B5fwL2MnnGTsJzShmJYjdVGSDwduyr3Guan9XNAF7Vbb</code></p>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Verified</span>
            </div>

            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-white">Sui Testnet</h3>
                <a href="https://suiscan.xyz/testnet/account/0x2557e9f986be02da639277dbdd14b028964288fb46b801e3d151312571a2bb8e/activity" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-slate-400 mb-2">Package ID: <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x2557e9f986be02da639277dbdd14b028964288fb46b801e3d151312571a2bb8e</code></p>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Verified</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/guides/agent-integration" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Agent Integration
              </div>
            </Link>
            <Link href="/erc1066-x402/guides/deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Contract Deployment
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

