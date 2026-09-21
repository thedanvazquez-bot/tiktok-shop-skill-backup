# Seedance Prompt Template

The standard structure for each of the 4 prompts. Every prompt must include all six components — pitfall: missing any one of them produces a prompt the model fills with assumptions, which leads to inconsistent output.

```
[STYLE INTENT] — TikTok UGC, iPhone 17 Pro Max quality

[SUBJECT/SCENE] — who/what is on screen, where, wearing what

[ACTION] — what the character/product is doing, beat by beat

[CAMERA] — shot type + movement + framing
- "medium close-up, slow dolly-in"
- "top-down flat lay, slight handheld"
- "macro push-in, autofocus breathing"

[LIGHTING/STYLE] — natural window light, golden hour, soft studio, etc.
- Default: natural lighting, slight exposure shifts, TikTok compression artifacts
- Avoid: HDR-heavy, studio-commercial, Hollywood polish

[AUDIO CUE] — what we hear throughout
- Voiceover line (in quotes)
- Ambient sound (kitchen hum, street noise, fridge kick-on)
- Or silence
- No music unless the user asks

[DURATION HINT] — typical 19-30s for Seedance default mode, 7-15s for fast-hook
```

## 19-30s Default Beat Structure
| Beat | Time | Purpose |
|------|------|---------|
| 1 | 0-5s | Slow reveal / hook |
| 2 | 5-10s | Setup / demo / problem tease |
| 3 | 10-15s | Payoff / transformation / feature reveal |
| 4 | 15-22s | Hero shot / proof / continued payoff |
| 5 | 22-30s | CTA / closing hook |

## Pitfalls
- Vague action descriptions ("he uses it") produce inconsistent output. Specify the exact motion.
- Missing lighting/style lets the model default to studio-commercial (wrong for this user).
- Single-line prompts with no beat structure produce flat, monotonous videos.
- Mixing two voiceover lines in one beat makes the timing too tight to lip-sync.
- Putting a price anywhere in the prompt (voiceover line, on-screen text, action beat) bakes a number into the render — and that number goes stale the moment the listing changes. Use a generic price-cue beat instead ("tight shot of the phone screen showing the listing's price badge") and put the exact dollar figure only in the caption and SEO box.
