import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DocsHeader } from '@/components/pages/docs-header';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import {
  DocsArchiveProvider,
  DocsArchiveNavBridge,
} from '@/components/providers/docs-archive-provider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperkit Docs",
  description: "Hyperkit Docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DocsArchiveProvider>
          <a
            href="#doc-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-indigo-600 focus:text-white focus:text-sm focus:shadow-lg"
          >
            Skip to content
          </a>
          <DocsHeader />
          <SmoothScrollProvider>
            <div id="doc-content" tabIndex={-1} className="outline-none">
              <DocsArchiveNavBridge />
              {children}
            </div>
          </SmoothScrollProvider>
        </DocsArchiveProvider>
        <Analytics />
      </body>
    </html>
  );
}
