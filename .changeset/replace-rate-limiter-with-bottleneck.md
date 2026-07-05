---
"@stockspro/sec": patch
---

Replace the hand-rolled promise-chain SEC API rate-limiter queue with the Bottleneck library for throttling outbound requests (#9).
