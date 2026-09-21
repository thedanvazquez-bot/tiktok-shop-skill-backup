# Scraped Dataset Refresh

The dataset lives at `~/Desktop/TikTok Shop/_scraped-datasets/all-95-products.json`. Refresh when the user asks for new products or the file is more than ~7 days old.

## Source
Site: `https://tiktok-shop-trending-picks.vercel.app/`
Provider (per footer): EchoTik — third-party estimates, NOT official TikTok Shop numbers.

## Scraping Recipe (no anti-bot, plain HTTP)

The site is plain static Vercel with no bot protection. Four JS chunks hold the full 95-product dataset. Format: d1.js is `window.P=[...]`, d2-d4 are `window.P.push(...[{...},{...}])`.

```python
import urllib.request, re, json

chunks = {}
for i in range(1, 5):
    with urllib.request.urlopen(f"https://tiktok-shop-trending-picks.vercel.app/d{i}.js", timeout=15) as resp:
        chunks[i] = resp.read().decode("utf-8")

all_products = []
for i in [1, 2, 3, 4]:
    raw = chunks[i]
    if raw.startswith("window.P=["):
        chunk = json.loads(raw[len("window.P="):].rstrip(";"))
    else:
        inner = raw[len("window.P.push(...["):].rstrip("]);")
        chunk = json.loads("[" + inner + "]")
    all_products.extend(chunk)
```

## Field Reference
| Field | Meaning |
|-------|---------|
| `n` | Product name |
| `v` | Vertical (category) |
| `s` | Shop / brand |
| `c` | Commission (decimal, e.g. 0.08 = 8%) |
| `r` | Creator count |
| `a` | Rating |
| `p` | Price (USD) |
| `x` | 7-day sales (estimated) |
| `m` | Momentum (pace vs historical) |
| `o` | Est. payout per sale |
| `i` | Product ID |
| `l` | TikTok Shop product link |
| `t` | Trend tag (e.g. "🔥 Breakout", "📈 Strong Rise") |
| `cat` | Sub-category |

## Saturation Buckets
| Creators | Bucket |
|----------|--------|
| <=50 | FRESH (rare — site's filter excludes most) |
| 51-150 | WARM (target zone) |
| 151-300 | HEATING UP |
| 301-500 | CROWDED |
| >500 | SATURATED |

## Dataset Caveats (DO quote these to the user when relevant)
- Header stamp: "Updated September 7" — refresh interval is weekly but the displayed stamp can be 7-14 days stale.
- Footer disclaimer (verbatim): "EchoTik data is third-party estimated marketplace data and can change... 'Momentum' compares the current 7-day unit pace with the product's historical average weekly pace since its estimated listing date; it is directional, not a guarantee of future performance."
- Ratings are inflated ~0.1 vs the real listing.
- Momentum >10x on a recently-listed product is usually a low-baseline artifact (zero baseline + any sales = high multiplier), NOT a breakout signal.
- 7-day sales numbers are directional, not exact.

## Pitfall
- Building the prompt bundle off the scraped dataset alone (without re-verifying features from the actual TikTok Shop listing) is the most common error. Always pull the listing for features.
