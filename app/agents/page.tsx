// app/agents/page.tsx
'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { AgentsContent } from '@/components/pages/docs-agents';

export default function AgentsPage() {
  const tocItems = [
    { id: 'defining-agents', label: 'Defining an Agent' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'lifecycle', label: 'Execution Lifecycle' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <AgentsContent />
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}