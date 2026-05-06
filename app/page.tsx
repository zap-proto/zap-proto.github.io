'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, Code2, Cpu, Network, Shield, ArrowRight, Zap, Timer, Database, Globe, Server, Gauge, Layers, GitBranch, Terminal, Box, Workflow, Lock, Rocket, MessageSquare, FileText, Users, Mail } from 'lucide-react';
import { BrandHero } from '@/components/brand-hero';
import { ZAppsPillars } from '@/components/zapps-pillars';
import { ProtocolFamily } from '@/components/protocol-family';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BrandHero />
      <ZAppsPillars />
      <ProtocolFamily />

      {/* The Story Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                <Gauge className="w-4 h-4" />
                The Benchmark That Changed Everything
              </div>
              <h2 className="text-3xl font-bold mb-6">Why INFINITY times faster?</h2>
              <div className="space-y-4 text-fd-muted-foreground">
                <p>
                  This benchmark is, of course, unfair. It only measures the time to encode and decode a message in memory.
                </p>
                <p>
                  ZAP gets a perfect score because <span className="text-blue-400 font-semibold">there is no encoding/decoding step</span>.
                </p>
                <p>
                  The ZAP encoding is appropriate both as a <span className="text-white font-medium">data interchange format</span> AND
                  an <span className="text-white font-medium">in-memory representation</span>, so once your structure is built,
                  you can simply write the bytes straight out to disk!
                </p>
                <Link href="/docs/benchmarks" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors pt-2">
                  See all benchmarks <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/benchmark.svg" alt="ZAP vs Protobuf benchmark showing 156µs vs 0µs" className="w-full max-w-md rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Independent Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Platform Independent</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-3xl mx-auto">
            The encoding is defined byte-for-byte independent of any platform. However, it is designed
            to be efficiently manipulated on common modern CPUs.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-fd-card border border-fd-border rounded-lg text-center">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-semibold mb-2">Struct-like Layout</h3>
              <p className="text-sm text-fd-muted-foreground">Fixed widths, fixed offsets, proper alignment — just like a compiler would arrange it</p>
            </div>
            <div className="p-6 bg-fd-card border border-fd-border rounded-lg text-center">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="font-semibold mb-2">Pointer-based</h3>
              <p className="text-sm text-fd-muted-foreground">Variable-sized elements embedded as offset pointers for position independence</p>
            </div>
            <div className="p-6 bg-fd-card border border-fd-border rounded-lg text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Position Independent</h3>
              <p className="text-sm text-fd-muted-foreground">Pointers are relative, not absolute — messages can live anywhere in memory</p>
            </div>
            <div className="p-6 bg-fd-card border border-fd-border rounded-lg text-center">
              <div className="text-3xl mb-3">🔢</div>
              <h3 className="font-semibold mb-2">Little-endian</h3>
              <p className="text-sm text-fd-muted-foreground">Most CPUs are little-endian, and big-endian CPUs have conversion instructions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Benchmark Numbers */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real Numbers. Real Impact.</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Measured on Apple M1 Max. <a href="https://github.com/zap-proto/benchmarks" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Run them yourself.</a>
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenchmarkCard
              title="Message Routing"
              jsonValue="2.1µs"
              zapValue="3.2ns"
              speedup="656x"
              detail="No decode/re-encode needed"
              allocsJson="17 allocs"
              allocsZap="0 allocs"
            />
            <BenchmarkCard
              title="Consensus Vote"
              jsonValue="489ns"
              zapValue="0.34ns"
              speedup="1,438x"
              detail="Critical path for blockchain"
              allocsJson="1 alloc"
              allocsZap="0 allocs"
            />
            <BenchmarkCard
              title="State Access"
              jsonValue="707µs"
              zapValue="0.96ns"
              speedup="736,458x"
              detail="mmap random field read"
              allocsJson="11,011 allocs"
              allocsZap="0 allocs"
            />
            <BenchmarkCard
              title="Batch 100 Messages"
              jsonValue="37µs"
              zapValue="1.8µs"
              speedup="21x"
              detail="Agent tool call batching"
              allocsJson="300 allocs"
              allocsZap="0 allocs"
            />
            <BenchmarkCard
              title="Warp Message"
              jsonValue="20µs"
              zapValue="82ns"
              speedup="244x"
              detail="Cross-chain decode"
              allocsJson="34 allocs"
              allocsZap="1 alloc"
            />
            <BenchmarkCard
              title="Validator Set (100)"
              jsonValue="28µs"
              zapValue="284ns"
              speedup="99x"
              detail="Consensus updates"
              allocsJson="2 allocs"
              allocsZap="0 allocs"
            />
          </div>
        </div>
      </section>

      {/* Backwards Compatible Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                <GitBranch className="w-4 h-4" />
                Schema Evolution
              </div>
              <h2 className="text-3xl font-bold mb-6">Backwards Compatible</h2>
              <div className="space-y-4 text-fd-muted-foreground">
                <p>
                  New fields are always added to the end of a struct (or replace padding space), so
                  <span className="text-white font-medium"> existing field positions are unchanged</span>.
                </p>
                <p>
                  The recipient simply needs to do a bounds check when reading each field.
                </p>
                <p>
                  Fields are numbered in the order they were added, so ZAP always knows how to arrange
                  them for <span className="text-blue-400 font-semibold">automatic backwards-compatibility</span>.
                </p>
              </div>
            </div>
            <CodeTabs
              zapCode={`# Version 1
struct User
  name Text
  email Text

# Version 2 - fully compatible!
struct User
  name Text
  email Text
  phone Text       # New field
  verified Bool    # New field`}
              capnpCode={`@0x85150b117366d14b;  # file ID required

# Version 1
struct User {
  name  @0 :Text;
  email @1 :Text;
}

# Version 2 - fully compatible!
struct User {
  name     @0 :Text;
  email    @1 :Text;
  phone    @2 :Text;     # New field
  verified @3 :Bool;     # New field
}`}
            />
          </div>
        </div>
      </section>

      {/* Smart Packing Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                <div className="p-4 bg-fd-background border border-fd-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-fd-muted-foreground">Unpacked ZAP</span>
                    <span className="font-mono text-blue-400">1,024 bytes</span>
                  </div>
                  <div className="mt-2 h-2 bg-blue-500/20 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-fd-background border border-fd-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-fd-muted-foreground">Protobuf</span>
                    <span className="font-mono text-fd-muted-foreground">312 bytes</span>
                  </div>
                  <div className="mt-2 h-2 bg-fd-muted/20 rounded-full">
                    <div className="h-full bg-fd-muted-foreground rounded-full" style={{width: '30.5%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-fd-background border border-fd-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-fd-muted-foreground">ZAP Packed</span>
                    <span className="font-mono text-blue-400">287 bytes</span>
                  </div>
                  <div className="mt-2 h-2 bg-blue-500/20 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{width: '28%'}}></div>
                  </div>
                </div>
                <p className="text-center text-sm text-fd-muted-foreground">
                  ZAP packing: <span className="text-blue-400">smaller than protobuf</span> and still faster
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                <Box className="w-4 h-4" />
                Smart Compression
              </div>
              <h2 className="text-3xl font-bold mb-6">Doesn't fixed-width waste space?</h2>
              <div className="space-y-4 text-fd-muted-foreground">
                <p>
                  Yes, fixed-width integers, unset optional fields, and padding do add zeros on the wire.
                </p>
                <p>
                  However, since all these extra bytes are zeros, ZAP applies an
                  <span className="text-blue-400 font-semibold"> extremely fast packing scheme</span> to remove them.
                </p>
                <p>
                  ZAP packing achieves <span className="text-white font-medium">similar (better, even) message sizes</span> to
                  protobuf encoding — and it's still faster.
                </p>
                <p className="text-sm">
                  When bandwidth really matters, apply general-purpose compression (zlib, LZ4) on top of any format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                <Shield className="w-4 h-4" />
                Security First
              </div>
              <h2 className="text-3xl font-bold mb-6">Isn't this horribly insecure?</h2>
              <div className="space-y-4 text-fd-muted-foreground">
                <p className="text-white font-semibold">
                  No no no! To be clear, we're NOT just casting a buffer pointer to a struct pointer.
                </p>
                <p>
                  ZAP generates classes with <span className="text-blue-400 font-semibold">accessor methods</span> that
                  you use to traverse the message. These accessors <span className="text-white font-medium">validate pointers before following them</span>.
                </p>
                <p>
                  If a pointer is invalid (e.g. out-of-bounds), the library can throw an exception or simply
                  replace the value with a default / empty object — your choice.
                </p>
                <p>
                  ZAP checks structural integrity just like any other serialization protocol.
                  And just like any other protocol, it's up to the app to check content validity.
                </p>
              </div>
            </div>
            <div className="p-6 bg-fd-card border border-fd-border rounded-lg">
              <h3 className="font-semibold mb-4 text-blue-400">Battle-Tested Security</h3>
              <ul className="space-y-3 text-fd-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                  <span>Powers <span className="text-white">Hanzo AI</span>'s distributed inference infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                  <span>Used in <span className="text-white">Lux Network</span>'s consensus layer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                  <span>Undergone <span className="text-white">fuzzing</span> and expert security review</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                  <span>Environments where <span className="text-white">security is paramount</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Superpowers</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            Are there other advantages? Glad you asked!
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SuperpowerCard
              icon={<Layers className="w-6 h-6 text-blue-500" />}
              title="Incremental Reads"
              description="Start processing a ZAP message before you have received all of it — outer objects appear entirely before inner objects."
            />
            <SuperpowerCard
              icon={<Database className="w-6 h-6 text-blue-500" />}
              title="Random Access"
              description="Read just one field of a message without parsing the whole thing. Jump directly to the data you need."
            />
            <SuperpowerCard
              icon={<FileText className="w-6 h-6 text-blue-500" />}
              title="Memory Mapping"
              description="Read a large ZAP file via mmap. The OS won't even read in the parts that you don't access."
            />
            <SuperpowerCard
              icon={<Globe className="w-6 h-6 text-blue-500" />}
              title="Inter-Language Communication"
              description="Java, Python, C++, Rust — all can operate on the same in-memory data structure. No slow serialization between languages."
            />
            <SuperpowerCard
              icon={<Server className="w-6 h-6 text-blue-500" />}
              title="Inter-Process Communication"
              description="Multiple processes share ZAP messages via shared memory. No kernel pipes. Process calls as fast as thread calls."
            />
            <SuperpowerCard
              icon={<Box className="w-6 h-6 text-blue-500" />}
              title="Arena Allocation"
              description="ZAP objects are always allocated in an arena or region style — faster than scattered allocations and promotes cache locality."
            />
            <SuperpowerCard
              icon={<Code2 className="w-6 h-6 text-blue-500" />}
              title="Tiny Generated Code"
              description="Usually no more than inline accessor methods! Order of magnitude smaller than protobuf's parsing/serialization code."
            />
            <SuperpowerCard
              icon={<Zap className="w-6 h-6 text-blue-500" />}
              title="Tiny Runtime Library"
              description="Due to the simplicity of the ZAP format, the runtime library can be much smaller. Less code to ship, audit, and maintain."
            />
            <SuperpowerCard
              icon={<Timer className="w-6 h-6 text-blue-500" />}
              title="Time-Travel RPC"
              description="ZAP's RPC system implements promise pipelining — call results return to clients before requests even arrive at the server!"
            />
          </div>
        </div>
      </section>

      {/* Memory Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full">
                <Database className="w-4 h-4" />
                Memory Efficiency
              </div>
              <h2 className="text-3xl font-bold mb-6">99.7% Less Memory</h2>
              <div className="space-y-4 text-fd-muted-foreground">
                <p>
                  Running <span className="text-white font-medium">100 MCP servers</span> with traditional JSON-RPC?
                  That's <span className="text-red-400 font-semibold">825 MB</span> of memory overhead.
                </p>
                <p>
                  With ZAP routing through a single server?
                  Just <span className="text-blue-400 font-semibold">2.4 MB</span>.
                </p>
                <p>
                  ZAP's arena allocation means <span className="text-white font-medium">zero heap allocations</span> per message.
                  No GC pressure. No fragmentation. Predictable latency.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-fd-card rounded-lg border border-fd-border">
                    <div className="text-2xl font-bold text-red-400">17 allocs</div>
                    <div className="text-sm text-fd-muted-foreground">JSON per message</div>
                  </div>
                  <div className="p-4 bg-fd-card rounded-lg border border-fd-border">
                    <div className="text-2xl font-bold text-blue-400">0 allocs</div>
                    <div className="text-sm text-fd-muted-foreground">ZAP per message</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-fd-card border border-fd-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-fd-muted-foreground">Traditional (100 MCP)</span>
                  <span className="text-red-400 font-mono">825 MB</span>
                </div>
                <div className="h-4 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-fd-card border border-fd-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-fd-muted-foreground">ZAP Router</span>
                  <span className="text-blue-400 font-mono">2.4 MB</span>
                </div>
                <div className="h-4 bg-blue-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '0.3%'}}></div>
                </div>
              </div>
              <p className="text-center text-sm text-fd-muted-foreground pt-2">
                Same 100 servers. <span className="text-blue-400 font-semibold">341x less memory.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple & Expressive</h2>
          <p className="text-center text-fd-muted-foreground mb-8">
            Define your schema once, generate clients for any language.
          </p>

          <CodeTabs
            filename="addressbook.zap"
            zapCode={`# ZAP schema - clean, whitespace-significant syntax

struct Person
  name Text
  email Text
  birthdate Date
  phones List(PhoneNumber)

  struct PhoneNumber
    number Text
    type PhoneType

    enum PhoneType
      mobile
      home
      work

interface AddressBook
  lookup (id UInt64) -> (person Person)
  search (query Text) -> stream (person Person)`}
            capnpCode={`@0xa1b2c3d4e5f6a7b8;  # file ID required

struct Person {
  name      @0 :Text;
  email     @1 :Text;
  birthdate @2 :Date;
  phones    @3 :List(PhoneNumber);

  struct PhoneNumber {
    number @0 :Text;
    type   @1 :PhoneType;

    enum PhoneType {
      mobile @0;
      home   @1;
      work   @2;
    }
  }
}

interface AddressBook {
  lookup @0 (id :UInt64) -> (person :Person);
  search @1 (query :Text) -> stream (person :Person);
}`}
          />
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Get Started</h2>
          <p className="text-center text-fd-muted-foreground mb-12 max-w-2xl mx-auto">
            From zero to production in four steps
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <LearningCard
              step={1}
              icon={<BookOpen className="w-6 h-6" />}
              title="Introduction"
              description="Learn why ZAP is infinitely faster and how zero-copy works"
              href="/docs"
            />
            <LearningCard
              step={2}
              icon={<Code2 className="w-6 h-6" />}
              title="Schema Language"
              description="Define your data structures with the ZAP schema language"
              href="/docs/protocol"
            />
            <LearningCard
              step={3}
              icon={<Terminal className="w-6 h-6" />}
              title="Installation"
              description="Install the ZAP tools and generate code for your language"
              href="/docs/quick-start"
            />
            <LearningCard
              step={4}
              icon={<Rocket className="w-6 h-6" />}
              title="RPC System"
              description="Build production services with capability-based RPC"
              href="/docs/api"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>

          <div className="space-y-8">
            <FAQItem
              question="But doesn't that mean the encoding is platform-specific?"
              answer="NO! The encoding is defined byte-for-byte independent of any platform. Data is arranged like a compiler would arrange a struct — with fixed widths, fixed offsets, and proper alignment. Variable-sized elements are embedded as pointers. Pointers are offset-based rather than absolute so that messages are position-independent."
            />
            <FAQItem
              question="Won't fixed-width integers waste space on the wire?"
              answer="Yes, fixed-width integers, unset optional fields, and padding do add zeros. However, ZAP applies an extremely fast packing scheme to remove them. ZAP packing achieves similar (better, even) message sizes to protobuf — and it's still faster. For bandwidth-critical paths, apply general compression (zlib, LZ4) on top."
            />
            <FAQItem
              question="Isn't directly accessing binary data insecure?"
              answer="To be clear: we're NOT just casting a buffer pointer to a struct pointer. ZAP generates classes with accessor methods that validate pointers before following them. Invalid pointers (out-of-bounds, etc.) throw exceptions or return defaults. ZAP checks structural integrity just like any other serialization protocol."
            />
            <FAQItem
              question="How does backwards compatibility work?"
              answer="New fields are always added to the end of a struct (or replace padding). Existing field positions never change. Recipients do bounds checking when reading. Fields are numbered by addition order, so ZAP always knows how to arrange them for compatibility."
            />
            <FAQItem
              question="What languages are supported?"
              answer="ZAP has implementations for C++, Rust, Go, TypeScript/JavaScript, Python, Java, and C#. The schema language and wire format are language-agnostic. Code generation produces type-safe bindings for your target language."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Production Proven</h2>
          <p className="text-fd-muted-foreground max-w-2xl mx-auto mb-6">
            ZAP powers <span className="text-blue-400 font-semibold">Hanzo AI</span>'s distributed inference infrastructure and
            <span className="text-blue-400 font-semibold"> Lux Network</span>'s consensus layer —
            environments where microseconds matter and security is paramount.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">341x</div>
              <div className="text-sm text-fd-muted-foreground">less memory</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1,438x</div>
              <div className="text-sm text-fd-muted-foreground">faster consensus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">0</div>
              <div className="text-sm text-fd-muted-foreground">heap allocations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-fd-card border-y border-fd-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to go infinitely faster?</h2>
          <p className="text-fd-muted-foreground mb-8">
            Get started with ZAP in minutes. Comprehensive docs cover everything
            from basic setup to advanced distributed systems patterns.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Quick Start Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/zap-proto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border border-fd-border rounded-lg hover:bg-fd-accent transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-fd-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl rotate-[-15deg] inline-block">⚡</span>
                <span className="font-bold">ZAP Protocol</span>
              </div>
              <p className="text-sm text-fd-muted-foreground">
                Infinitely faster. Zero-copy Application Protocol for the age of AI & crypto.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Develop</h4>
              <ul className="space-y-2 text-sm text-fd-muted-foreground">
                <li><Link href="/docs" className="hover:text-fd-foreground transition-colors">Introduction</Link></li>
                <li><Link href="/docs/quick-start" className="hover:text-fd-foreground transition-colors">Installation</Link></li>
                <li><Link href="/docs/protocol" className="hover:text-fd-foreground transition-colors">Schema Language</Link></li>
                <li><Link href="/docs/api" className="hover:text-fd-foreground transition-colors">RPC Protocol</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-fd-muted-foreground">
                <li><a href="https://github.com/zap-proto" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com/AltZap" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">Twitter</a></li>
                <li><Link href="/docs/benchmarks" className="hover:text-fd-foreground transition-colors">Benchmarks</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-fd-muted-foreground mb-3">
                Follow <a href="https://twitter.com/AltZap" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">@AltZap</a> for updates
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-fd-border text-sm text-fd-muted-foreground">
            <span>© 2025 ZAP Protocol</span>
            <div className="flex items-center gap-6">
              <a href="https://github.com/zap-proto" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/AltZap" target="_blank" rel="noopener noreferrer" className="hover:text-fd-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SuperpowerCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-fd-background border border-fd-border rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </div>
  );
}

function LearningCard({
  step,
  icon,
  title,
  description,
  href,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block p-6 bg-fd-card border border-fd-border rounded-lg hover:border-blue-500/50 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-blue-400 bg-blue-500/10 rounded-full">
          {step}
        </span>
        <span className="text-blue-500">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </Link>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="border-b border-fd-border pb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-fd-muted-foreground">{answer}</p>
    </div>
  );
}

function BenchmarkCard({
  title,
  jsonValue,
  zapValue,
  speedup,
  detail,
  allocsJson,
  allocsZap,
}: {
  title: string;
  jsonValue: string;
  zapValue: string;
  speedup: string;
  detail: string;
  allocsJson: string;
  allocsZap: string;
}) {
  return (
    <div className="p-6 bg-fd-background border border-fd-border rounded-lg hover:border-blue-500/30 transition-colors">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-fd-muted-foreground">JSON</span>
          <div className="text-right">
            <span className="font-mono text-red-400">{jsonValue}</span>
            <span className="text-xs text-fd-muted-foreground ml-2">({allocsJson})</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-fd-muted-foreground">ZAP</span>
          <div className="text-right">
            <span className="font-mono text-blue-400">{zapValue}</span>
            <span className="text-xs text-fd-muted-foreground ml-2">({allocsZap})</span>
          </div>
        </div>
        <div className="pt-2 border-t border-fd-border">
          <div className="flex justify-between items-center">
            <span className="text-xs text-fd-muted-foreground">{detail}</span>
            <span className="text-blue-400 font-bold">{speedup}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeTabs({
  zapCode,
  capnpCode,
  filename,
}: {
  zapCode: string;
  capnpCode: string;
  filename?: string;
}) {
  const [activeTab, setActiveTab] = useState<'zap' | 'capnp'>('zap');

  // Syntax highlighting for ZAP (whitespace-significant)
  const highlightZap = (code: string) => {
    return code
      .split('\n')
      .map((line) => {
        // Comments
        if (line.trim().startsWith('#')) {
          return `<span class="text-emerald-400">${line}</span>`;
        }
        // Keywords
        return line
          .replace(/\b(struct|interface|enum|union|stream)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')
          .replace(/\b(Text|Bool|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float32|Float64|Data|Void|Date)\b/g, '<span class="text-cyan-400">$1</span>')
          .replace(/\bList\(/g, '<span class="text-cyan-400">List</span>(')
          .replace(/->/g, '<span class="text-yellow-400">-></span>');
      })
      .join('\n');
  };

  // Syntax highlighting for Cap'n Proto (traditional)
  const highlightCapnp = (code: string) => {
    return code
      .split('\n')
      .map((line) => {
        // File ID annotation
        if (line.trim().startsWith('@0x')) {
          return line.replace(/(@0x[a-f0-9]+;)(\s*#.*)?/i, '<span class="text-orange-400">$1</span><span class="text-emerald-400">$2</span>');
        }
        // Comments
        if (line.trim().startsWith('#')) {
          return `<span class="text-emerald-400">${line}</span>`;
        }
        // Keywords and syntax
        return line
          .replace(/\b(struct|interface|enum|union|stream)\b/g, '<span class="text-purple-400 font-semibold">$1</span>')
          .replace(/:(\s*)(Text|Bool|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float32|Float64|Data|Void|Date)\b/g, ':<span class="text-cyan-400">$2</span>')
          .replace(/:(\s*)List\(/g, ':<span class="text-cyan-400">List</span>(')
          .replace(/@(\d+)/g, '<span class="text-yellow-400">@$1</span>')
          .replace(/->/g, '<span class="text-yellow-400">-></span>')
          .replace(/(#.*)$/, '<span class="text-emerald-400">$1</span>');
      })
      .join('\n');
  };

  const code = activeTab === 'zap' ? zapCode : capnpCode;
  const highlighted = activeTab === 'zap' ? highlightZap(code) : highlightCapnp(code);

  return (
    <div className="bg-fd-background border border-fd-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-fd-accent border-b border-fd-border">
        {filename && (
          <span className="text-sm text-fd-muted-foreground">{filename}</span>
        )}
        {!filename && <span />}
        <div className="flex gap-1 bg-fd-background rounded-md p-1">
          <button
            onClick={() => setActiveTab('zap')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'zap'
                ? 'bg-blue-600 text-white'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
          >
            .zap
          </button>
          <button
            onClick={() => setActiveTab('capnp')}
            className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'capnp'
                ? 'bg-fd-muted text-fd-foreground'
                : 'text-fd-muted-foreground hover:text-fd-foreground'
            }`}
          >
            .capnp
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  );
}
