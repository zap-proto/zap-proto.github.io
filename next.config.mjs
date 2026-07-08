import { createMDX } from '@hanzo/docs/mdx/next';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      '@hanzo/docs-mdx:collections/server': './docs/server.ts',
      '@hanzo/docs-mdx:collections/browser': './docs/browser.ts',
      '@hanzo/docs-mdx:collections/dynamic': './docs/dynamic.ts',
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@hanzo/docs-mdx:collections/server': path.join(__dirname, 'docs/server.ts'),
      '@hanzo/docs-mdx:collections/browser': path.join(__dirname, 'docs/browser.ts'),
      '@hanzo/docs-mdx:collections/dynamic': path.join(__dirname, 'docs/dynamic.ts'),
    };
    return config;
  },
};

export default withMDX(config);
