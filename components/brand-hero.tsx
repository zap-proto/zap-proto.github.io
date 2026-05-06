'use client';

// Brand-aware hero. Same visual frame; copy swaps based on which custom
// domain serves the request (zap-proto.io = developer, zerocopy.app =
// marketing). Brand detection lives in lib/brand.ts.

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useBrand, brandCopy } from '@/lib/brand';

export function BrandHero() {
  const brand = useBrand();
  const copy = brandCopy[brand];

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center bg-gradient-to-b from-fd-background to-fd-card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-6xl rotate-[-15deg] inline-block">⚡</span>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{copy.name}</h1>
        </div>

        <p className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
          {copy.tagline}
        </p>

        <p className="text-xl text-fd-muted-foreground max-w-3xl mx-auto mb-4">
          {copy.headline}
        </p>

        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto mb-8">
          {copy.subheadline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={copy.ctaPrimary.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            {copy.ctaPrimary.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={copy.ctaSecondary.href}
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
          >
            {copy.ctaSecondary.label}
          </Link>
          <a
            href={copy.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
