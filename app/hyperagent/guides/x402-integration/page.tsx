'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function X402IntegrationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'thirdweb-setup', label: 'Thirdweb Setup' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'testing', label: 'Testing' }
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
            <Link href="/hyperagent/guides" className="hover:text-slate-300 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-amber-400">x402 Integration</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">x402 Integration</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Set up pay-per-use payments for smart contract operations on Avalanche networks using Thirdweb.
          </p>

          <Callout type="info" title="Thirdweb Required">
            x402 payment endpoints require Thirdweb as a third-party service provider. You must set up a Thirdweb account and configure your client ID to use x402 payments.
          </Callout>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            x402 payments enable pay-per-use smart contract operations on Avalanche networks. Hyperagent integrates with Thirdweb to handle payment processing, wallet connections, and USDC transfers.
          </p>

          <h2 id="thirdweb-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Thirdweb Setup
          </h2>
          <p className="leading-7 mb-4">
            Before configuring x402 payments, you need to set up a Thirdweb account:
          </p>
          <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-slate-400">
            <li>Create an account at <a href="https://thirdweb.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">thirdweb.com</a></li>
            <li>Create a new project or use an existing one</li>
            <li>Navigate to your project settings and copy your Client ID</li>
            <li>Ensure your project is configured for Avalanche networks</li>
          </ol>

          <h2 id="configuration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Configuration
          </h2>
          <p className="leading-7 mb-4">
            Add your Thirdweb Client ID to your environment variables:
          </p>
          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># .env file</span>
<span class="text-blue-400">THIRDWEB_CLIENT_ID</span>=<span class="text-green-400">your_client_id_here</span>

<span class="text-slate-500"># For Docker setup</span>
<span class="text-blue-400">THIRDWEB_CLIENT_ID</span>=<span class="text-green-400">your_client_id_here</span>`}
          />
          <p className="leading-7 mb-6 mt-4">
            After setting the environment variable, restart your Hyperagent server. The x402 endpoints will automatically use Thirdweb for payment processing.
          </p>

          <h2 id="testing" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Testing
          </h2>
          <p className="leading-7 mb-4">
            To test x402 payments:
          </p>
          <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-400">
            <li>Ensure your Thirdweb Client ID is configured</li>
            <li>Connect a wallet with USDC on Avalanche testnet</li>
            <li>Make a request to any x402 endpoint (workflows, contracts, deployments)</li>
            <li>Complete the payment flow through Thirdweb</li>
            <li>Verify the operation completes successfully</li>
          </ul>
          <Callout type="warning" title="Testnet First">
            Always test x402 payments on Avalanche testnet before using mainnet. Ensure you have testnet USDC in your wallet.
          </Callout>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/guides/multi-chain-deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Multi-Chain Deployment
              </div>
            </Link>
            <Link href="/hyperagent/guides/parallel-deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Parallel Deployment
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

