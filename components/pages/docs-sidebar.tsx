import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Rocket, Layers, Terminal, Bot, LayoutTemplate, Globe,
  Webhook, ChevronsUpDown
} from 'lucide-react';

interface NavSection {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const DocsSidebar: React.FC = () => {
  const pathname = usePathname();

  const sections: NavSection[] = [
    {
      title: "Getting Started",
      icon: <Rocket className="w-3.5 h-3.5 text-indigo-400" />,
      href: "/"
    },
    {
      title: "Core Concepts",
      icon: <Layers className="w-3.5 h-3.5 text-slate-500" />,
      href: "/core-concepts"
    },
    {
      title: "SDK & CLI",
      icon: <Terminal className="w-3.5 h-3.5 text-slate-500" />,
      href: "/sdk-cli"
    },
    {
      title: "Agents",
      icon: <Bot className="w-3.5 h-3.5 text-slate-500" />,
      href: "/agents"
    },
    {
      title: "Components",
      icon: <LayoutTemplate className="w-3.5 h-3.5 text-slate-500" />,
      href: "/components"
    },
    {
      title: "Networks",
      icon: <Globe className="w-3.5 h-3.5 text-slate-500" />,
      href: "/networks"
    },
    {
      title: "API Reference",
      icon: <Webhook className="w-3.5 h-3.5 text-slate-500" />,
      href: "/api-reference"
    }
  ];

  return (
    <aside className="hidden lg:block w-72 shrink-0 bg-[#05050A] min-h-screen">
      {/* Fixed container */}
      <div className="fixed top-14 left-0 w-72 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-white/10">
        {/* Project Selector - Sticky within sidebar */}
        <div className="sticky top-0 z-10 bg-[#05050A]/95 backdrop-blur-sm p-4 border-b border-white/10">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">H</div>
              <span className="text-sm font-medium text-slate-200 truncate">Hyperkit Main</span>
            </div>
            <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-1">
          {sections.map((section, idx) => {
            const isActive = pathname === section.href;
            
            return (
              <Link
                key={idx}
                href={section.href}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                  isActive
                    ? 'text-indigo-400 bg-indigo-500/10 font-medium border-l-2 border-indigo-500'
                    : 'text-slate-300 hover:text-indigo-300 hover:bg-white/5'
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsSidebar;