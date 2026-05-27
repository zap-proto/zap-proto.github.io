# zap-proto.io

Source for [zap-proto.io](https://zap-proto.io) — the ZAP Protocol marketing site.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
```

## Deploy

`do-sfo3-lux-k8s`, namespace `zap-proto-io`, served through `hanzoai/spa` behind `hanzoai/ingress`. Cloudflare proxy ON for edge cache + TLS.

Image: `ghcr.io/zap-proto/zap-proto.github.io:latest`. Hosts on the same Ingress: `zap-proto.io`, `www.zap-proto.io`.

## Related

- [zap-proto.dev](https://zap-proto.dev) — developer portal + SDK docs
- [zerocopy.app](https://zerocopy.app) — "why zero-copy" landing
- [zap-proto/spec](https://github.com/zap-proto/spec) — wire-format spec

## License

MIT
