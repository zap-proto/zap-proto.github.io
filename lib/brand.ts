// Brand-aware host detection.
//
// One static GitHub Pages deployment serves three custom domains. Each
// domain renders different chrome on the same content:
//
//   zap-proto.io          → "developer" — protocol home, deep technical
//   zap-proto.dev         → "developer" — same shell, /docs is canonical
//   zerocopy.app          → "marketing" — ZApps, "future of I/O is here"
//   zap-protocol.github.io → "developer" — legacy, will 301 to zap-proto.io
//   localhost / preview    → "developer"
//
// The pages stay a static export (`output: 'export'`); no SSR host detection.
// Brand selection happens client-side from `window.location.hostname` — the
// initial render pre-hydration is the developer brand by default; if the
// hostname is the marketing one we swap on hydration. This produces a
// momentary flash on first paint for marketing visitors only; acceptable
// trade for a single deploy artifact across all hosts.

import { useEffect, useState } from 'react';

export type Brand = 'developer' | 'marketing';

export function brandForHostname(hostname: string): Brand {
  // Match hostnames including any subdomain (e.g. www.zerocopy.app).
  const h = hostname.toLowerCase();
  if (h === 'zerocopy.app' || h.endsWith('.zerocopy.app')) return 'marketing';
  return 'developer';
}

export function useBrand(): Brand {
  // SSR / first-paint default. Static export is rendered as developer; the
  // marketing domain swaps on first effect.
  const [brand, setBrand] = useState<Brand>('developer');
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setBrand(brandForHostname(window.location.hostname));
  }, []);
  return brand;
}

// Brand-specific copy. Single source of truth for the strings; the
// landing page consumes via brandCopy[useBrand()].
export const brandCopy = {
  developer: {
    name: 'ZAP',
    domain: 'zap-proto.io',
    tagline: 'Infinitely faster.',
    headline: 'Zero-copy Application Protocol',
    subheadline:
      'Insanely fast data interchange and capability-based RPC. Think JSON, except binary. Think Protobuf, except faster.',
    ctaPrimary: { label: 'Get Started', href: '/docs' },
    ctaSecondary: { label: 'Installation', href: '/docs/quick-start' },
    githubUrl: 'https://github.com/zap-proto',
  },
  marketing: {
    name: 'ZApps',
    domain: 'zerocopy.app',
    tagline: 'The future of I/O is here.',
    headline: 'Zero-copy applications.',
    subheadline:
      'Less memory. Lower latency. Post-quantum by default. AI- and web3-native from byte zero.',
    ctaPrimary: { label: 'Build a ZApp', href: '/docs/quick-start' },
    ctaSecondary: { label: 'Why Zero-Copy?', href: '/docs/why' },
    githubUrl: 'https://github.com/zap-proto',
  },
} satisfies Record<Brand, BrandCopy>;

export interface BrandCopy {
  name: string;
  domain: string;
  tagline: string;
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  githubUrl: string;
}
