'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PythonSDKPage() {
  const tocItems = [
    { id: 'installation', label: 'Installation' },
    { id: 'initialization', label: 'Initialization' },
    { id: 'methods', label: 'Methods' },
    { id: 'examples', label: 'Examples' }
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
            <Link href="/erc1066-x402/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-indigo-400">Python SDK</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Python SDK</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Client library for Python applications to interact with ERC-1066-x402 gateway.
          </p>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>

          <CodeBlock
            code={`<span class="text-slate-500"># Install Python SDK</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-green-400">hyperkitlabs-erc1066-x402</span>`}
          />

          <h2 id="initialization" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Initialization
          </h2>

          <CodeBlock
            language="python"
            filename="client.py"
            code={`<span class="text-purple-400">from</span> erc1066_x402 <span class="text-purple-400">import</span> ERC1066Client

<span class="text-slate-500"># Initialize client with gateway URL</span>
<span class="text-purple-400">client</span> = ERC1066Client(<span class="text-green-400">'https://gateway.example.com'</span>)`}
          />

          <h2 id="methods" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Methods
          </h2>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-3">validate_intent</h3>
              <p className="text-sm text-slate-400 mb-4">Validates an intent without executing it</p>
              <CodeBlock
                language="python"
                code={`<span class="text-purple-400">result</span> = client.validate_intent(intent, chain_id)

<span class="text-slate-500"># Returns:</span>
<span class="text-purple-400">{</span>
    <span class="text-green-400">'status'</span>: <span class="text-green-400">'0x01'</span>,  <span class="text-slate-500"># Status code</span>
    <span class="text-green-400">'http_code'</span>: <span class="text-blue-400">200</span>,   <span class="text-slate-500"># HTTP status code</span>
    <span class="text-green-400">'intent_hash'</span>: <span class="text-green-400">'0x...'</span>
<span class="text-purple-400">}</span>`}
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-3">execute_intent</h3>
              <p className="text-sm text-slate-400 mb-4">Executes a validated intent on-chain</p>
              <CodeBlock
                language="python"
                code={`<span class="text-purple-400">result</span> = client.execute_intent(intent, chain_id)

<span class="text-slate-500"># Returns execution result</span>`}
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-lg font-medium text-white mb-3">map_status_to_action</h3>
              <p className="text-sm text-slate-400 mb-4">Maps status code to agent action</p>
              <CodeBlock
                language="python"
                code={`<span class="text-purple-400">action</span> = client.map_status_to_action(<span class="text-green-400">'0x01'</span>)
<span class="text-slate-500"># Returns: 'execute' | 'request_payment' | 'retry' | 'deny'</span>`}
              />
            </div>
          </div>

          <h2 id="examples" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Examples
          </h2>

          <CodeBlock
            language="python"
            filename="example.py"
            code={`<span class="text-purple-400">from</span> erc1066_x402 <span class="text-purple-400">import</span> ERC1066Client, Intent

<span class="text-purple-400">client</span> = ERC1066Client(<span class="text-green-400">'https://gateway.example.com'</span>)

<span class="text-purple-400">intent</span> = Intent(
    sender=<span class="text-green-400">'0x...'</span>,
    target=<span class="text-green-400">'0x...'</span>,
    data=<span class="text-green-400">'0x...'</span>,
    value=<span class="text-green-400">'0'</span>,
    nonce=<span class="text-green-400">'0'</span>,
    policyId=<span class="text-green-400">'0x...'</span>
)

<span class="text-slate-500"># Validate intent</span>
<span class="text-purple-400">result</span> = client.validate_intent(intent, <span class="text-blue-400">133717</span>)

<span class="text-slate-500"># Map status to action</span>
<span class="text-purple-400">action</span> = client.map_status_to_action(result[<span class="text-green-400">'status'</span>])

<span class="text-slate-500"># Execute based on action</span>
<span class="text-purple-400">if</span> action == <span class="text-green-400">'execute'</span>:
    client.execute_intent(intent, <span class="text-blue-400">133717</span>)
<span class="text-purple-400">elif</span> action == <span class="text-green-400">'request_payment'</span>:
    request_payment(result[<span class="text-green-400">'payment_url'</span>])`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/api-reference/sdk/typescript" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                TypeScript SDK
              </div>
            </Link>
            <Link href="/erc1066-x402/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                API Reference
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

