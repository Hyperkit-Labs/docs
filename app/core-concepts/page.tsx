// app/core-concepts/page.tsx
'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import CoreConceptsContent from '@/components/pages/docs-core-concepts';

export default function CoreConceptsPage() {
  const tocItems = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'permissions', label: 'Permissions' },
    { id: 'error-handling', label: 'Error Handling' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
        <DocsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <CoreConceptsContent />
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}