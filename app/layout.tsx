import './global.css';
import { Provider } from '@/components/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'ZAP Protocol',
    template: '%s | ZAP Protocol',
  },
  description: 'The future of I/O is here. Zero-copy Application Protocol — less memory, lower latency, post-quantum by default. AI- and web3-native.',
  keywords: ['ZAP', 'ZApps', 'RPC', 'zero-copy', 'binary', 'serialization', 'post-quantum', 'X-Wing', 'Z-Wing', 'AI', 'agents', 'MCP', 'A2A', 'web3', 'FIX'],
  authors: [{ name: 'ZAP Protocol Authors' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'ZAP Protocol ⚡',
    description: 'The future of I/O is here. Zero-copy + post-quantum + mutual auth — at the wire.',
    url: 'https://zap-proto.io',
    siteName: 'ZAP Protocol',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'ZAP Protocol — The future of I/O is here',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAP Protocol ⚡',
    description: 'The future of I/O is here. Zero-copy + post-quantum + mutual auth — at the wire.',
    creator: '@AltZap',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
