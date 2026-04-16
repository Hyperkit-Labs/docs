"use client";

import React from "react";
import Link from "next/link";
import { useDocsArchive } from "@/components/providers/docs-archive-provider";
import {
  Home,
  BookOpen,
  Github,
  ArrowRight,
} from "lucide-react";

export default function NotFoundPage() {
  const { docHref } = useDocsArchive();

  return (
    <div className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col pt-14">
      <main
        id="main-not-found"
        className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative z-10"
      >
        <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-8 select-none">
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            4
          </span>
          <div
            className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full border border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]" />
            <div className="absolute inset-2 md:inset-4 rounded-full border border-indigo-400/20 bg-indigo-950/20 backdrop-blur-md overflow-hidden flex items-center justify-center">
              <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            4
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            Page not found
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            This URL is not part of the Hyperkit docs. Use the links below or open search with{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-sm">Ctrl</kbd>
            {" + "}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 text-sm">K</kbd>
            .
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl px-4">
          <CardLink
            href={docHref("/")}
            icon={<Home className="w-5 h-5 text-indigo-400" strokeWidth={1.5} />}
            title="Docs home"
            desc="Overview and quick start."
            bg="bg-indigo-500/10"
          />
          <CardLink
            href={docHref("/hyperagent")}
            icon={<BookOpen className="w-5 h-5 text-purple-400" strokeWidth={1.5} />}
            title="HyperAgent"
            desc="Workflow and Studio documentation."
            bg="bg-purple-500/10"
          />
          <CardLink
            href="https://github.com/Hyperkit-Labs"
            external
            icon={<Github className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />}
            title="GitHub"
            desc="Repositories and issues."
            bg="bg-cyan-500/10"
          />
        </div>

        <p className="mt-12 text-sm text-slate-600">HTTP 404</p>
      </main>
    </div>
  );
}

function CardLink({
  href,
  external,
  icon,
  title,
  desc,
  bg,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
}) {
  const className =
    "group relative flex flex-col p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60";

  const inner = (
    <>
      <div
        className={`mb-4 w-10 h-10 rounded-full ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h2 className="text-lg font-medium text-white mb-1 flex items-center gap-2">
        {title}
        {external ? <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> : null}
      </h2>
      <p className="text-base text-slate-500 group-hover:text-slate-400 transition-colors">{desc}</p>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
