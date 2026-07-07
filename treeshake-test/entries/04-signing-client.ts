// The most common real-world use: create a signing client.
// This legitimately needs the registries (all msg types), so it is expected to be big —
// but it should NOT drag in queries, custom_queries (axios!), or the localStorage store.
import { createSigningClient } from "@ixo/impactxclient-sdk";

console.log(typeof createSigningClient);
