# Model Watch — New Video Model Evaluation

When a new video model or major version drops, evaluate it against the user's current baseline (Seedance 2.0 / AiCast) AND against any specific model the user has flagged for comparison (the user has called out H3 in prior conversations; track it if mentioned again).

## Workflow

1. **Detect** — surface the release via the news/watch channels or when the user mentions a model. Do not silently switch.
2. **Pull the docs** — fetch the model card or official release notes. Use `web_search` and `web_extract`.
3. **Evaluate against the baseline** — for each dimension, score both Seedance 2.0 and the new model side by side:
   | Dimension | What to check |
   |-----------|---------------|
   | Quality | Resolution ceilings, motion coherence, lighting handling |
   | Speed | Generation latency per second of output |
   | Prompt syntax | New keywords, shot language, model-specific idioms |
   | Cost | Per-second or per-generation pricing |
   | Native features | Lip-sync, motion control, image-to-video, sound, multi-shot, character consistency |
   | Prompt rewrite | Do existing Seedance prompts need translation? |
4. **If the user has flagged H3** (or another specific model) — include it in the comparison even if it's older than the new release. The user wants to know "is this better than what I already use, AND better than H3?"
5. **Surface, don't switch** — present the comparison in chat. Never change the default model without explicit confirmation.

## Output Format

```
Model: <name + version>
Baseline compared: Seedance 2.0 / AiCast
[Optional H3 comparison]

| Dimension | Seedance 2.0 | <new model> | Verdict |
|-----------|--------------|-------------|---------|
| Quality   | ...          | ...         | ...     |
| ...        | ...          | ...         | ...     |

Prompt rewrite needed: <yes/no + summary>
Recommendation: <switch / stay / test both>
```

End with "Standing by for your next instruction" — do not pre-suggest prompts to write for the new model.

## Pitfall
- Claiming a new model is "better" without testing it on the user's actual product video style is overconfident. Quality dimensions often look different on TikTok UGC vs cinematic content.
- Recommending a model switch because it's newer ignores the cost of rewriting all 4 prompt variants the user already has working.

## Model availability on aggregator platforms (Higgsfield, Runway, etc.)

Aggregator platforms gate models behind plan tiers. A model listed on the marketing page is not necessarily accessible to a user on a given plan. Before recommending a specific model:

1. **Check the user's plan tier first.** Look at their account/plan info if visible. If unknown, default to assuming they are on the cheapest paid tier (Starter/Basic) — the most common state — and check what models that tier unlocks.
2. **Check plan-gating explicitly.** On Higgsfield specifically: Veo 3, Veo 3.1, Sora 2, and Seedance 2.5 are gated to Plus ($39/mo annual) and above. Wan 2.6/2.7, Kling 3.0, Seedance 2.0, and Hailuo are available on Starter ($15/mo) and up. Sora 2 is on Plus.
3. **If the recommended model is gated**, name a fallback from the user's actual tier. Don't tell the user "Veo 3.1 is the best" if Veo is hidden in their model dropdown.
4. **Web sources lag.** Pricing/availability pages are scraped periodically. The latest reliable source is usually the help-center "which model should I use" page, not the marketing landing page (the landing page lists everything available to the highest tier).

Mechanism: confidently recommending a gated model wastes the user's time (they go look for it, don't find it, ask why, then you have to apologize and re-recommend). Always check the gating before naming the recommendation.
