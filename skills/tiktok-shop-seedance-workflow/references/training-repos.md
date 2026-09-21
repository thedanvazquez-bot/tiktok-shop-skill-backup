# Training Repos

Cloned locally under the umbrella skill. Each is referenced for a specific purpose — don't dump them all into context, load the relevant one for the task.

## Locations
Base path: `~/.hermes/profiles/tiktokshop/skills/tiktok-shop-seedance-workflow/repos/`

| Repo | Size | Purpose | When to read |
|------|------|---------|--------------|
| `awesome-ad-video-prompts/` | ~100MB (after image strip) | 52 high-craft prompts across 10 formats for Seedance/Veo/Kling/Runway | When writing a Seedance prompt for a new product type |
| `awesome-prompts/` | ~6MB | 500+ role-based agent prompts; 7 extracted to `_high-signal/` | When you need a non-video specialist prompt (copywriting, market research) |
| `Marketing-Prompts/` | ~5MB | 4,368 marketing prompts across 546 skills (CSV) | When SEO box needs broader coverage or angle ideas |
| `AI-Prompts-for-Copywriting/` | ~90KB | 10 proven copywriting templates with examples | When caption box needs a fresh angle |
| `smarks26-ai-content-prompts.md` | ~24KB | 14 multi-platform content repurposing templates | When the user asks to cross-post to IG/YouTube/Shorts |

## High-Signal Files (extracted to `repos/_high-signal/`)
Read these first when relevant:

| File | Purpose |
|------|---------|
| `video_gen_prompting.txt` | Master prompt guide for Sora 2 / Runway Gen 4.5 / Kling 2.6 / Veo 3.1. Use the universal structure (shot type + camera move + subject + environment + lighting + duration) |
| `social_video_clipify_architect.txt` | TikTok/Reels/Shorts production specialist |
| `agentic_video_editor.txt` | Post-production editing rules (caption timing, ffmpeg patterns) |
| `paid_advertising_architect.txt` | Multi-platform paid ads including TikTok Spark Ads |
| `sales_strategist.txt` | GTM, positioning, objection handling for affiliate angles |
| `social_card_designer.txt` | IG carousel and cover design |
| `market_research_strategist.txt` | Product-market fit and opportunity sizing |

## Setup Notes
- Repo `awesome-ad-video-prompts/` was cloned with `--depth 1` and the `images/` folder was removed (it's ~100MB of example videos that the prompts don't need). If image references are ever required, re-clone or re-fetch that subfolder.
- `Marketing-Prompts/` stores its content in a single CSV file (`planeeasy.substack.com.csv`), not in subdirectories — query that file directly with `grep`/`search_files` for keywords.

## Pitfall
- Reading every repo "to be thorough" burns context for nothing. Match repo to task: video prompt → `awesome-ad-video-prompts` + `video_gen_prompting.txt`; caption → `AI-Prompts-for-Copywriting`; market sizing → `market_research_strategist.txt`.
