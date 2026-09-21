---
name: tiktok-shop-seedance-workflow
description: Use when creating Seedance 2.0 / AiCast prompts for TikTok Shop affiliate products. 4 prompts + SEO + caption, 19-30s default with optional 7-15s sub-mode, default character, TikTok UGC style. Always saves to Desktop/TikTok Shop folder and retains to Hindsight.
---

# TikTok Shop Seedance Workflow

Class-level skill for producing AI-generated TikTok Shop affiliate product videos. Default mode is 19-30s Seedance 2.0 / AiCast product demos with a voiceover character (4 prompts); sub-mode is 7-15s fast-hook scripts on request. Always produces a full bundle (4 prompts + SEO box + caption box), saved to the user's Desktop and retained to Hindsight.

## Procedure

### 1. Confirm scope (first line of every response)
Restate what the user asked in one sentence. If they named a product, name it back. If they named a mode (7-15s, product-only, luxury, ASMR, panning), set it. Do not pre-suggest the next product or next action — see Confirm-Then-Act below.

### 2. Pick the mode and length
- Default: 19-30s Seedance/AiCast product demo with voiceover character (4 prompts).
- "Shorter", "faster", "7-15s", "fast hook": switch to `references/short-form-scripts.md` frameworks (S.T.A.R.T., PSP, PAS, HSVC). Same bundle shape, same character, tighter timing.
- "Product only", "luxury", "premium", "high-end", "ASMR", "panning camera only": see `references/mode-switches.md` for the recipe.
- "Hands-only", "no actor", "no on-screen person", or any kid/plush/family product where the default adult character would undercut the demo: skip the human archetype entirely. Use parent hands + sleeping or face-off-camera child for size beats. See `references/mode-switches.md#hands-only`.
- One prompt only ("just give me one", "just one"): still produce the full bundle unless the user says "just the prompt" or "skip the SEO and caption".
- Multi-colorway / single-SKU variant ("one prompt for each of these dolls", "one prompt per variant", "8 prompts for the same listing"): one prompt per variant, each with unique hook + unique CTA + unique setting. No SEO box, no caption box (the caption and SEO are the same for the whole SKU). File name: `<Product Name> — <Variant>.txt` or a single combined file like "Doll Ai Prompts.txt" if the user names it that way. Compliance guardrails and price-stripping rule still apply per prompt.
- Concise-output request ("remove unnecessary characters", "we are hitting the character limit", "trim it down", "shorter file"): switch to the compact prompt template in `references/prompt-template.md#compact-variant`. Every line must do work — no restated constraints, no prose scene descriptions, no redundant section headers. Target ~50-60% the size of the standard template while preserving beats, camera, lighting, compliance.

### 3. Verify the product before scripting (mandatory)
The scraped dataset has the product name only — features, ratings, and momentum claims must be re-verified. Pitfall: scripting from the dataset alone leads to invented or inflated features and pushes false claims (e.g. unverified momentum) into the voiceover.

- Open the actual TikTok Shop listing (`https://www.tiktok.com/shop/pdp/<id>` — redirects to `shop.tiktok.com/us/pdp/...`). Read the "About this product" / Highlights / Specifications section verbatim. Those are the only features permitted in prompts.
- Cross-check dataset claims: scraped rating is inflated ~0.1 vs the real listing; 7-day sales are directionally correct but estimates; momentum >10x on a recently-listed product is usually a low-baseline artifact, not a real breakout. Do NOT quote momentum in hooks/captions without verifying the listing date.
- When the user uploads product screenshots instead of a URL, treat each screenshot as a partial listing: identify product type, visible features, colors/variants, target audience, real use cases. Same no-inventions rule. Recreate the product in AI scenes — never animate the screenshots themselves.

### 4. Build the 4 prompts
For each prompt, pick from the rotation lists:
- 1 hook style from `references/hook-bank.md` (8 styles; never repeat within the bundle).
- 1 CTA from `references/cta-bank.md` (5 CTAs; rotate, no repeats).
- 1 distinct setting/location per prompt (garage, patio, kitchen counter, truck in driveway, back porch, mudroom, etc.). Pitfall: 4 prompts in the same setting produces A/B variants of one shot, not an A/B/C/D test.

Each prompt must specify: subject/scene, action, camera (shot type + movement), lighting/style, audio cue, duration hint. The standard template is in `references/prompt-template.md`.

Default character when a human appears: Puerto Rican male, mid-40s, bald, salt-and-pepper beard. Swap when the product requires a different audience match — full catalog in `references/character-catalog.md`.

### 5. SEO box + caption box
Single copy boxes each, English + Spanish combined (no separation, no numbering). Spec, length targets, and language mix in `references/seo-and-caption-formats.md`. Caption box has two surface variants: TikTok (default) and Instagram (only when the user asks for "IG caption" or "Instagram caption") — see the caption-variant reference.

### 6. Deliver to all four locations
- Primary: `<User-Desktop>/TikTok Shop/<Product Name>.txt` — plain text, `===` separators, one-click copy. Create the folder silently if missing.
- Secondary: `~/.hermes/profiles/tiktokshop/outputs/<product-slug>/prompt-bundle.md` — markdown mirror for Hindsight ingestion.
- In-chat: also display the bundle inline so the user can copy without opening the file.
- Hindsight: see `references/hindsight-retention.md` for what to retain after each bundle.

### 7. End the response
"Standing by for your next instruction." — no product suggestions, no previews of what to do next. Let the user drive.

## Hard Rules (Always-On, Non-Negotiable)
- ❌ NO hashtags anywhere unless the user explicitly asks.
- ❌ NO em dashes (—) anywhere.
- ❌ NO invented features, certifications, medical/weight/income claims.
- ❌ NO Hollywood polish — always TikTok UGC look (iPhone 17 Pro Max quality, 4K 30fps, natural lighting, slight handheld, autofocus breathing, TikTok compression artifacts). Never studio-commercial.
- ❌ NO pre-suggesting the next product after completing the current one. User drives.
- ❌ NO prices in the prompt itself (voiceover, on-screen text, action beats, anywhere). The hook leads with the value moment, not a dollar figure. Price info lives in the SEO box, the caption, and the listing — never inside the Seedance prompt. Reason: prices change between upload and render; a prompt with a stale price produces a video with a wrong number on screen. If a price is unavoidable for the hook angle, replace it with a generic price-cue beat (e.g. "tight shot of the phone screen showing the listing's price badge" with no spoken number) and let the caption carry the exact figure.
- ❌ NO section-header prose ("[STYLE INTENT]", "[SUBJECT/SCENE]", "[ACTION]", "[CAMERA]", "[LIGHTING/STYLE]", "[AUDIO CUE]", "[DURATION HINT]", "[COMPLIANCE]") in the prompt body when the user has asked for compact output. The user is paying for rendered video, not for restated constraint headers. Compact prompts keep the same information in prose sentences ("Scene:", "Beats:", "Camera:", "Lighting/Audio:") instead of bracketed tags.
- TikTok Shop compliance: only supportable claims; discuss benefits, never guarantee outcomes.

## Confirm-Then-Act Rule (Behavior Gate)
When the user gives any instruction, do ONLY what they asked. Do not pre-suggest the next product, the next variation, or the next step unless they explicitly invite it. End with "Standing by for your next instruction" or equivalent. Mechanism: jumping ahead reads as me assuming what they want, which erodes trust and wastes their attention — confirmed when the user pushed back after I scripted a bundle and ended with "want me to script the iPhone case next?"

## Compliance Checklist (run before output)
- [ ] No medical / weight-loss / income / "guaranteed" claims
- [ ] All features verified against the actual listing (not just the scraped dataset)
- [ ] No invented certifications
- [ ] 4 unique hooks (no repeats within bundle)
- [ ] 4 unique CTAs (no repeats within bundle)
- [ ] 4 distinct settings/locations across prompts
- [ ] SEO box: 50+ terms, English + Spanish, comma-separated, no numbering
- [ ] Caption box: ~400 chars each language, no hashtags
- [ ] No hashtags, no em dashes anywhere
- [ ] Bundle saved to Desktop + outputs folder
- [ ] Hindsight retention done
- [ ] Response ends with "Standing by for your next instruction"

## References (load on demand)
- `references/short-form-scripts.md` — 7-15s frameworks (S.T.A.R.T., PSP, PAS, HSVC), 7 hook formulas, timing template.
- `references/mode-switches.md` — recipes for "Product only", "Luxury/Premium", "ASMR", "Panning camera only".
- `references/hook-bank.md` — the 8 hook styles with when to use each.
- `references/cta-bank.md` — the 5 CTAs and rotation rules.
- `references/character-catalog.md` — default + alternates, when to swap.
- `references/prompt-template.md` — the standard Seedance prompt structure.
- `references/seo-and-caption-formats.md` — exact box specs and caption variants.
- `references/hindsight-retention.md` — what to retain after each bundle, bank IDs, lesson distribution rules.
- `references/scraped-dataset-refresh.md` — how to pull/refresh `all-95-products.json`, what fields mean, saturation buckets.
- `references/model-watch.md` — new video model evaluation (Veo, Sora, Runway, Kling, Pika, Seedance, Hailuo, H3).
- `references/training-repos.md` — the cloned prompt libraries and which to read for which situation.
