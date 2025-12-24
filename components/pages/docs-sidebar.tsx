import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Rocket, Bot, ChevronsUpDown, ChevronDown, ChevronRight, FileText,
  Package, Wallet
} from 'lucide-react';

interface NavSection {
  title: string;
  icon: React.ReactNode;
  href: string;
  children?: Array<{ title: string; href: string }>;
}

interface DocsSidebarProps {
  onPageChange?: (page: string) => void;
  activePage?: string;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = () => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(pathname?.startsWith('/erc1066-x402') ? ['ERC-1066-x402'] : [])
  );

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  // Auto-expand sections based on current path
  React.useEffect(() => {
    if (pathname?.startsWith('/erc1066-x402')) {
      setExpandedSections(prev => new Set(prev).add('ERC-1066-x402'));
    }
    if (pathname?.startsWith('/sdk')) {
      setExpandedSections(prev => new Set(prev).add('Hyperkit SDK'));
    }
    if (pathname?.startsWith('/aa-hyperwallet')) {
      setExpandedSections(prev => new Set(prev).add('AA Hyperwallet'));
    }
    if (pathname?.startsWith('/hyperagent')) {
      setExpandedSections(prev => new Set(prev).add('Hyperagent'));
    }
  }, [pathname]);

  const sections: NavSection[] = [
    {
      title: "Getting Started",
      icon: <Rocket className="w-3.5 h-3.5 text-indigo-400" />,
      href: "/"
    },
    {
      title: "Hyperagent",
      icon: <Bot className="w-3.5 h-3.5 text-amber-400" />,
      href: "/hyperagent",
      children: [
        { title: "Overview", href: "/hyperagent" },
        { title: "Getting Started", href: "/hyperagent/getting-started" },
        { title: "Core Concepts", href: "/hyperagent/concepts" },
        { title: "Guides", href: "/hyperagent/guides" },
        { title: "API Reference", href: "/hyperagent/api-reference" },
        { title: "CLI", href: "/hyperagent/cli" },
        { title: "Examples", href: "/hyperagent/examples" }
      ]
    },
    {
      title: "Hyperkit SDK",
      icon: <Package className="w-3.5 h-3.5 text-purple-400" />,
      href: "/sdk",
      children: [
        { title: "Overview", href: "/sdk" },
        { title: "Getting Started", href: "/sdk/getting-started" },
        { title: "Components", href: "/sdk/components" },
        { title: "Hooks", href: "/sdk/hooks" },
        { title: "Actions API", href: "/sdk/actions" },
        { title: "Configuration", href: "/sdk/configuration" },
        { title: "CLI", href: "/sdk/cli" },
        { title: "Examples", href: "/sdk/examples" },
        { title: "API Reference", href: "/sdk/api-reference" }
      ]
    },
    {
      title: "AA Hyperwallet",
      icon: <Wallet className="w-3.5 h-3.5 text-violet-400" />,
      href: "/aa-hyperwallet",
      children: [
        { title: "Overview", href: "/aa-hyperwallet" },
        { title: "Getting Started", href: "/aa-hyperwallet/getting-started" },
        { title: "Core Concepts", href: "/aa-hyperwallet/concepts" },
        { title: "Guides", href: "/aa-hyperwallet/guides" },
        { title: "Visual Builder", href: "/aa-hyperwallet/builder" },
        { title: "Examples", href: "/aa-hyperwallet/examples" },
        { title: "API Reference", href: "/aa-hyperwallet/api-reference" }
      ]
    },
    {
      title: "ERC-1066-x402",
      icon: <FileText className="w-3.5 h-3.5 text-indigo-400" />,
      href: "/erc1066-x402",
      children: [
        { title: "Overview", href: "/erc1066-x402" },
        { title: "Getting Started", href: "/erc1066-x402/getting-started" },
        { title: "Core Concepts", href: "/erc1066-x402/concepts" },
        { title: "Guides", href: "/erc1066-x402/guides" },
        { title: "API Reference", href: "/erc1066-x402/api-reference" },
        { title: "Specifications", href: "/erc1066-x402/specifications" },
        { title: "Examples", href: "/erc1066-x402/examples" }
      ]
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
            const isActive = pathname === section.href || pathname?.startsWith(section.href + '/');
            const isExpanded = expandedSections.has(section.title);
            const hasChildren = section.children && section.children.length > 0;
            
            return (
              <div key={idx}>
                <div className="flex items-center">
                  {hasChildren ? (
                    <button
                      onClick={() => toggleSection(section.title)}
                      className={`flex-1 flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                        isActive
                          ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                          : 'text-slate-300 hover:text-indigo-300 hover:bg-white/5'
                      }`}
                    >
                      {section.icon}
                      <span className="flex-1 text-left">{section.title}</span>
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>
                  ) : (
                    <Link
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
                  )}
                </div>
                {hasChildren && isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/5 pl-4">
                    {section.children?.map((child, childIdx) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={childIdx}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            isChildActive
                              ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                              : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
                          }`}
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsSidebar;