// @ts-nocheck
import { browser } from '@hanzo/docs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "architecture.mdx": () => import("../content/docs/architecture.mdx?collection=docs"), "benchmarks.mdx": () => import("../content/docs/benchmarks.mdx?collection=docs"), "consensus.mdx": () => import("../content/docs/consensus.mdx?collection=docs"), "gateway.mdx": () => import("../content/docs/gateway.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "protocol.mdx": () => import("../content/docs/protocol.mdx?collection=docs"), "quick-start.mdx": () => import("../content/docs/quick-start.mdx?collection=docs"), "transports.mdx": () => import("../content/docs/transports.mdx?collection=docs"), "why-zap.mdx": () => import("../content/docs/why-zap.mdx?collection=docs"), }),
};
export default browserCollections;