// Single-brand: zap-proto.io is the protocol home. Marketing pitch
// lives at zerocopy.app, developer docs at zap-proto.dev — separate
// sites, separate repos. This shim is kept for component contracts.

export type Brand = 'developer';
export const brandCopy = {
  developer: {
    name: 'ZAP',
    tagline: 'Infinitely faster.',
    headline: 'Zero-copy Application Protocol.',
    subheadline:
      'Insanely fast data interchange and capability-based RPC. Post-quantum by default. AI- and web3-native.',
    ctaPrimary: { label: 'Read the spec', href: 'https://github.com/zap-proto/spec' },
    ctaSecondary: { label: 'Developer docs', href: 'https://zap-proto.dev' },
    githubUrl: 'https://github.com/zap-proto',
  },
} as const;
export function useBrand(): Brand { return 'developer'; }
