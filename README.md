# tiktok-shop-skill-backup

Backup of my `@tiktokshop` Hermes Agent skills, training repos (curated subset), and output bundles. Updated 2026-09-21.

## What's in here

```
.
├── skills/
│   ├── tiktok-shop-seedance-workflow/    # PRIMARY: 19-30s Seedance/AiCast prompts for TikTok Shop
│   │   ├── SKILL.md
│   │   └── repos/                        # 5 cloned training repos (~112MB, gitignored down to high-signal)
│   │       └── _high-signal/
│   │           ├── README.md
│   │           ├── video_gen_prompting.txt          # Sora 2/Runway/Kling/Veo prompt master reference
│   │           ├── social_video_clipify_architect.txt
│   │           ├── agentic_video_editor.txt
│   │           ├── paid_advertising_architect.txt
│   │           ├── sales_strategist.txt
│   │           ├── social_card_designer.txt
│   │           └── market_research_strategist.txt
│   └── tiktok-affiliate-video-scripts/  # SECONDARY: 7-15s fast-hook scripts (S.T.A.R.T./PSP)
│       └── SKILL.md
└── outputs/                              # Past product bundles (markdown mirrors)
    ├── heydude-bradley-ii/
    │   └── prompt-bundle.md
    └── lumacore-led-lanterns/
        └── prompt-bundle.md
```

## What this is NOT

This is **not** a runtime install of Hermes or the @tiktokshop bot. It's a snapshot of:
- Skill definitions (markdown)
- Curated training references (extracted files, not full repos)
- Example output bundles

To use these skills in another Hermes install, copy the `skills/` folders into `~/.hermes/profiles/<your-profile>/skills/`.

## Hard rules baked into every skill

- NO hashtags anywhere (unless user explicitly asks)
- NO em dashes (—) anywhere
- NO invented product features, certifications, medical/weight/income claims
- Confirm-then-act: do only what the user asked, no pre-suggesting

## Companion artifacts (not in this repo)

- **Hindsight banks** `bot-tiktokshop` and `bot-hermes` — running at `http://127.0.0.1:8888`, persist cross-session memories
- **Telegram bot** `@dannyv_hermesbot` — wired to the @tiktokshop profile
- **Desktop bundles** — every product script is also saved as a `.txt` file in `~/Desktop/TikTok Shop/`
