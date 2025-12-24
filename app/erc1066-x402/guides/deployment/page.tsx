'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Rocket, Shield } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentPage() {
  const tocItems = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'environment-setup', label: 'Environment Setup' },
    { id: 'deploy-contracts', label: 'Deploy Contracts' },
    { id: 'verify-deployment', label: 'Verify Deployment' }
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
            <span className="text-indigo-400">Contract Deployment</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Contract Deployment</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Step-by-step guide to deploy ERC-1066-x402 contracts to testnets and mainnets.
          </p>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Foundry Installed</h3>
              <CodeBlock
                code={`<span class="text-blue-400">curl</span> <span class="text-purple-400">-L</span> https://foundry.paradigm.xyz <span class="text-purple-400">|</span> <span class="text-blue-400">bash</span>
<span class="text-blue-400">foundryup</span>
<span class="text-blue-400">forge</span> <span class="text-purple-400">--version</span>  <span class="text-slate-500"># Verify installation</span>`}
              />
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Private Key with Testnet Tokens</h3>
              <p className="text-xs text-slate-400 mb-2">Export your private key as environment variable and ensure the wallet has testnet tokens for gas fees.</p>
              <Callout type="warning" title="Security">
                Never commit your private key. Use environment variables or a secure secret manager.
              </Callout>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Testnet Tokens</h3>
              <p className="text-xs text-slate-400">Get testnet tokens from faucets:</p>
              <ul className="text-xs text-slate-400 mt-2 space-y-1 ml-4">
                <li>• Hyperion Testnet: Contact Metis DevOps</li>
                <li>• Metis Sepolia: Public faucet</li>
                <li>• Mantle Testnet: Mantle faucet</li>
                <li>• Avalanche Fuji: https://faucet.avalanche.network/</li>
              </ul>
            </div>
          </div>

          <h2 id="environment-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Environment Setup
          </h2>
          <p className="leading-7 mb-4">
            Set your private key as an environment variable:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Set your private key (NEVER commit this!)</span>
<span class="text-slate-500"># You can use with or without 0x prefix - both formats are supported</span>
<span class="text-blue-400">export</span> <span class="text-purple-400">PRIVATE_KEY</span>=your_private_key_here
<span class="text-slate-500"># OR</span>
<span class="text-blue-400">export</span> <span class="text-purple-400">PRIVATE_KEY</span>=0xyour_private_key_here

<span class="text-slate-500"># Verify it's set</span>
<span class="text-blue-400">echo</span> $PRIVATE_KEY`}
          />

          <Callout type="info" title="Note">
            The deployment scripts automatically handle PRIVATE_KEY with or without the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x</code> prefix.
          </Callout>

          <h2 id="deploy-contracts" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Deploy Contracts
          </h2>
          <p className="leading-7 mb-4">
            Choose a testnet and deploy using NPM scripts (recommended) or Foundry directly:
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Using NPM Scripts (Recommended)
          </h3>
          <CodeBlock
            code={`<span class="text-slate-500"># Deploy to Hyperion Testnet</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> deploy:hyperion:testnet

<span class="text-slate-500"># Deploy to Metis Sepolia</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> deploy:metis:sepolia

<span class="text-slate-500"># Deploy to Mantle Testnet</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> deploy:mantle:testnet

<span class="text-slate-500"># Deploy to Avalanche Fuji</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> deploy:avalanche:fuji`}
          />

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Using Foundry Directly
          </h3>
          <CodeBlock
            code={`<span class="text-slate-500"># Hyperion Testnet</span>
<span class="text-blue-400">forge</span> script script/Deploy.s.sol:Deploy \\
  <span class="text-purple-400">--rpc-url</span> hyperion_testnet \\
  <span class="text-purple-400">--broadcast</span> \\
  <span class="text-purple-400">--verify</span>

<span class="text-slate-500"># Metis Sepolia</span>
<span class="text-blue-400">forge</span> script script/Deploy.s.sol:Deploy \\
  <span class="text-purple-400">--rpc-url</span> metis_sepolia \\
  <span class="text-purple-400">--broadcast</span> \\
  <span class="text-purple-400">--verify</span>`}
          />

          <p className="leading-7 mb-4 mt-6">
            After deployment, you'll see output like:
          </p>

          <CodeBlock
            code={`<span class="text-green-400">PolicyRegistry deployed at: 0x1234567890123456789012345678901234567890</span>
<span class="text-green-400">SimpleSpendingValidator deployed at: 0xabcdefabcdefabcdefabcdefabcdefabcdefabcd</span>
<span class="text-green-400">IntentExecutor deployed at: 0x9876543210987654321098765432109876543210</span>
<span class="text-green-400">Chain ID: 133717</span>`}
          />

          <Callout type="info" title="Save Addresses">
            Save these addresses. You'll need them for gateway configuration.
          </Callout>

          <h2 id="verify-deployment" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Verify Deployment
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Check on Block Explorer</h3>
              <p className="text-xs text-slate-400">Verify contracts are deployed and verified on the block explorer for your network.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Verify Contract Code</h3>
              <p className="text-xs text-slate-400">Contracts should be verified automatically if <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">--verify</code> flag was used.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Test Contract Functions</h3>
              <CodeBlock
                code={`<span class="text-slate-500"># Check PolicyRegistry owner</span>
<span class="text-blue-400">cast</span> call <REGISTRY_ADDRESS> <span class="text-green-400">"owner()"</span> <span class="text-purple-400">--rpc-url</span> <RPC_URL>

<span class="text-slate-500"># Check IntentExecutor validator</span>
<span class="text-blue-400">cast</span> call <EXECUTOR_ADDRESS> <span class="text-green-400">"validator()"</span> <span class="text-purple-400">--rpc-url</span> <RPC_URL>`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/guides/multi-chain" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Multi-Chain Deployment
              </div>
            </Link>
            <Link href="/erc1066-x402/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Guides
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

