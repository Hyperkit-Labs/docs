// app/sdk-cli/page.tsx
'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import SdkCliContent  from '@/components/pages/docs-sdk&cli';

export default function SdkCliPage() {
  const tocItems = [
    { id: 'installation', label: 'Installation' },
    { id: 'cli-reference', label: 'CLI Reference' },
    { id: 'sdk-usage', label: 'SDK Usage' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <SdkCliContent />
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}