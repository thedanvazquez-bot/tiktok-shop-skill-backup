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
