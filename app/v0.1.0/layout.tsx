import type { ReactNode } from 'react';
import Link from 'next/link';
import { ARCHIVE_V0_1_0_DATE_ISO } from '@/lib/archive-v0.1.0-config';

export default function ArchiveV010Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        role="status"
        className="mt-14 border-b border-amber-500/25 bg-amber-950/70 px-4 py-2 text-center text-[11px] text-amber-100"
      >
        Archived docs (v0.1.0) restored from repository snapshot {ARCHIVE_V0_1_0_DATE_ISO}.{' '}
        <Link href="/" className="font-medium text-white underline underline-offset-2 hover:text-amber-50">
          Open latest documentation
        </Link>
        .
      </div>
      {children}
    </>
  );
}
