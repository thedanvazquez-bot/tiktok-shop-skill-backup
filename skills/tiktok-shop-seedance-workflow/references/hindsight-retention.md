# Hindsight Retention

After every completed product bundle, retain a structured record to Hindsight so all sessions (including this bot in future chats and the `@hermes` teammate bot) can recall what was shipped.

## Server
- Base URL: `http://127.0.0.1:8888`
- Auth: none required for local server
- Client: `hindsight_client` Python package or direct HTTP via `urllib.request`

## Per-Product Retention (always)
Bank: `bot-tiktokshop`
Endpoint: `POST /v1/default/banks/bot-tiktokshop/memories`

Content:
- Product name + shop + price + commission % + payout/sale
- 7-day sales + creator count + saturation bucket (FRESH / WARM / HEATING UP / CROWDED / SATURATED) + rating
- The 4 hooks used + 4 CTAs used
- The 4 settings used (one per prompt)
- Any special handling (e.g. "momentum flagged suspect, not quoted in hooks")
- File paths the bundle was saved to

## General Lessons Retention (only when a real lesson emerged)
Bank: BOTH `bot-tiktokshop` AND `bot-hermes`
Endpoints: `POST /v1/default/banks/bot-tiktokshop/memories` and `POST /v1/default/banks/bot-hermes/memories`

Trigger only when the lesson is durable — behavior change, workflow correction, tool quirk. Do not retain per-product details to bot-hermes; that bank is for cross-bot context (user preferences, standing rules).

Examples of valid general lessons:
- "Treat scraped momentum >10x with skepticism; usually artifact of low baseline"
- "Confirm-then-act: never pre-suggest the next product after completing a bundle"
- "Settings must rotate across the 4 prompts, not repeat the same location"

Examples of things NOT to retain (per-product noise):
- "Wrote a HEYDUDE boot bundle with 4 unique hooks"
- "LumaCore lantern bundle saved to Desktop"

## Endpoint Format (working schema)

```python
import urllib.request, json

payload = json.dumps({
    "items": [{
        "content": "...",
        "context": "...",
        "tags": ["..."]
    }],
    "async": False
}).encode()

req = urllib.request.Request(
    "http://127.0.0.1:8888/v1/default/banks/<bank>/memories",
    data=payload,
    headers={"Content-Type": "application/json"},
    method="POST"
)
```

Bank creation: `PUT /v1/default/banks/<bank_id>` with body `{"background": "..."}`.

## Pitfall
- Skipping retention loses cross-session memory; future sessions re-discover the same lessons slowly.
- Retaining per-product chatter to bot-hermes pollutes the cross-bot context with noise — reserve that bank for general lessons.
