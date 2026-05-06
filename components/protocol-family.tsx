'use client';

// Protocol family showcase. The ZAP family of sub-protocols, each
// layered on the ZAP transport. Same shape across the site: each
// sub-protocol has a name, a one-line pitch, what it replaces, and a
// link to its repo. The repo URLs target the new `zap-proto/*` org.

import { Globe, Radio, TrendingUp, Compass, Cpu, MessageCircle, Network, Server } from 'lucide-react';
import type { ComponentType } from 'react';

interface SubProtocol {
  name: string;
  slug: string;
  icon: ComponentType<{ className?: string }>;
  pitch: string;
  replaces: string;
  status: 'shipping' | 'beta' | 'design';
}

const FAMILY: SubProtocol[] = [
  {
    name: 'zap-http',
    slug: 'http',
    icon: Globe,
    pitch: 'HTTP request/response semantics over ZAP. Drop-in net/http API.',
    replaces: 'HTTP/1.1 + HTTP/2 + TLS',
    status: 'shipping',
  },
  {
    name: 'zap-ws',
    slug: 'ws',
    icon: Radio,
    pitch: 'Multi-stream pubsub. Per-stream FEC eliminates head-of-line blocking.',
    replaces: 'WebSocket / SSE / HTTP/2 streams',
    status: 'shipping',
  },
  {
    name: 'zap-fix',
    slug: 'fix',
    icon: TrendingUp,
    pitch: 'FIX 4.4 / 5.0 trading channel. Sub-microsecond p99 wire cost.',
    replaces: 'FIX-over-TCP / FIX-over-TLS',
    status: 'beta',
  },
  {
    name: 'zap-rns',
    slug: 'rns',
    icon: Compass,
    pitch: 'Service naming bound to KEM keypair. Spoofing reduces to key compromise.',
    replaces: 'DNS / mDNS / SPIFFE',
    status: 'beta',
  },
  {
    name: 'zap-mcp',
    slug: 'mcp',
    icon: Cpu,
    pitch: 'Model Context Protocol with mutual auth and non-repudiable provenance.',
    replaces: 'MCP-over-HTTP+SSE / stdio',
    status: 'beta',
  },
  {
    name: 'zap-acp',
    slug: 'acp',
    icon: MessageCircle,
    pitch: 'Agent Communication Protocol. FIPA-style speech acts, signed end-to-end.',
    replaces: 'Plain HTTP agent endpoints',
    status: 'design',
  },
  {
    name: 'zap-a2a',
    slug: 'a2a',
    icon: Network,
    pitch: 'Google Agent2Agent over ZAP. Agent cards, tasks, artifacts — all signed.',
    replaces: 'A2A-over-HTTP+JSON',
    status: 'design',
  },
  {
    name: 'zap-base',
    slug: 'spec',
    icon: Server,
    pitch: 'The transport. Cap\'n Proto wire, X-Wing/Z-Wing PQ KEM, mutual auth.',
    replaces: 'TCP+TLS+gRPC / TCP+TLS+JSON',
    status: 'shipping',
  },
];

const STATUS_STYLE = {
  shipping: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  beta: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  design: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20',
} as const;

export function ProtocolFamily() {
  return (
    <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
            <Network className="w-4 h-4" />
            One wire. Many protocols.
          </div>
          <h2 className="text-3xl font-bold mb-4">The ZAP family</h2>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            Every sub-protocol composes onto the same ZAP transport. Authentication,
            confidentiality, and post-quantum guarantees come from the wire — not from
            each protocol re-implementing them.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FAMILY.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.slug}
                href={`https://github.com/zap-proto/${p.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-fd-border rounded-lg hover:border-blue-500/50 transition-colors bg-fd-background"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-400" />
                    <span className="font-mono font-bold">{p.name}</span>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_STYLE[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-fd-foreground mb-3">{p.pitch}</p>
                <p className="text-xs text-fd-muted-foreground">
                  Replaces:{' '}
                  <span className="font-mono text-fd-foreground/80">{p.replaces}</span>
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
