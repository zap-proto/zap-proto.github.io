'use client';

// "Why build ZApps" — three pillars for the marketing brand.
// Less memory. Lower latency. Future-proof.

import { MemoryStick, Timer, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    icon: MemoryStick,
    title: 'Less memory',
    body:
      'Zero-copy parse: pointer + arena, no marshal/unmarshal allocations. Messages live in L1 cache where Protobuf or JSON would force a heap round-trip. Same payload, a fraction of the working set.',
    stat: 'O(1) field access',
    statSub: 'vs Θ(n) Protobuf walk',
  },
  {
    icon: Timer,
    title: 'Lower latency',
    body:
      'Cap\'n Proto–derived wire + per-stream FEC + post-quantum KEM amortized over the connection. Tail latency converges to link latency. p99 disappears.',
    stat: '9–14×',
    statSub: 'p99 small msg vs JSON',
  },
  {
    icon: ShieldCheck,
    title: 'Future-proof',
    body:
      'X-Wing and Z-Wing hybrid PQ from byte zero. Harvest-now-decrypt-later? Nothing useful to harvest. Mutual authentication at the transport — bearer tokens are an artifact of HTTP\'s past.',
    stat: 'PQ-by-default',
    statSub: 'X25519 + ML-KEM-768',
  },
] as const;

export function ZAppsPillars() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-fd-background to-fd-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-400 mb-3">
            Why ZApps
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the next decade of I/O
          </h2>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            DApps were 2020. Cloud apps were 2010.{' '}
            <span className="text-fd-foreground font-semibold">ZApps are now.</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 border border-fd-border rounded-lg bg-fd-card hover:border-blue-500/40 transition-colors"
              >
                <Icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-fd-muted-foreground mb-6 leading-relaxed">{p.body}</p>
                <div className="pt-4 border-t border-fd-border">
                  <div className="text-2xl font-bold text-blue-400 font-mono">{p.stat}</div>
                  <div className="text-xs text-fd-muted-foreground mt-1">{p.statSub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
