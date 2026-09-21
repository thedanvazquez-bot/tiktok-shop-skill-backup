// Regenerate README.md from prompts.json (single source of truth).
// Usage: node scripts/generate-readme.mjs
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const VD = "https://heydreaming.com";
// Each prompt has a live, indexable page on HeyDreaming at /prompts/<slug>.
const promptUrl = (slug) => `${VD}/prompts/${slug}`;
const data = JSON.parse(readFileSync(resolve(ROOT, "prompts.json"), "utf8"));
const anchor = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

let md = `# 🎬 Awesome AI Video-Ad Prompts\n\n`;
md += `[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-contributing)\n\n`;
md += `> A curated, original collection of **high-craft prompts for AI video ADS** — Seedance 2.0, Veo 3, Kling, Runway. Built for performance marketers & D2C founders: multi-beat timing, real camera language, fidelity guards, and ad-ready structure. **${data.total} prompts** across ${data.sections.length} formats.\n\n`;
md += `> 🚀 **Want these turned into finished, scored ad videos from just a product URL?** Try **[HeyDreaming](${VD})** — paste a link, get four scored ad-video variations. This list is the open-source craft companion to HeyDreaming.\n\n`;
md += `---\n\n## 📖 Contents\n\n`;
for (const s of data.sections) md += `- [${s.name}](#${anchor(s.name)}) (${s.prompts.length})\n`;
md += `- [How to use](#-how-to-use)\n- [Contributing](#-contributing)\n- [License](#-license)\n\n---\n\n`;
for (const s of data.sections) {
  md += `## ${s.name}\n\n*${s.brief}*\n\n`;
  for (const p of s.prompts) {
    md += `### ${p.title}\n`;
    // Only emit the preview <img> if the asset actually exists — keeps the README
    // free of broken-image placeholders until poster images are added.
    if (existsSync(resolve(ROOT, "images", `${p.slug}.png`))) {
      md += `<img src="images/${p.slug}.png" alt="${p.title}" width="320">\n\n`;
    }
    md += `\`${p.duration} · ${p.aspect}\`${p.tags?.length ? " · " + p.tags.map((t) => "`" + t + "`").join(" ") : ""}\n\n`;
    md += "```\n" + p.prompt + "\n```\n\n";
    md += `**[▶ Generate this into a scored ad video on HeyDreaming →](${promptUrl(p.slug)})**\n\n`;
  }
  md += `[⬆ back to top](#-awesome-ai-video-ad-prompts)\n\n---\n\n`;
}
md += `## 🛠 How to use\n\n1. Pick a prompt that matches your format and paste it into your video model (Seedance 2.0 / Veo 3 / Kling / Runway).\n2. Swap the \`[product]\` / \`[brand]\` slots and any concrete subjects for yours.\n3. Keep the multi-beat timing and the "no deformation/drift/artifacts" fidelity guard — they materially improve output.\n4. For 9:16 ad b-roll, end on your brand and avoid baking in text overlays (add captions in post).\n\nRegenerate the README from data: \`node scripts/generate-readme.mjs\`.\n\n## 🤝 Contributing\n\nPRs welcome. Add original prompts only (no copying from other collections). Keep the schema in \`prompts.json\` and run the generator. Each prompt: title, prompt (with multi-beat timing + camera + fidelity guard), tags, duration, aspect.\n\n## 📄 License\n\n[CC BY 4.0](LICENSE). Prompts are original works contributed for community use. Attribution appreciated.\n\n## 🙏 Acknowledgements\n\nCraft conventions inspired by the broader AI-video community. Maintained alongside **[HeyDreaming](${VD})** — the AI ad-video generator that scores every cut before you spend.\n`;
writeFileSync(resolve(ROOT, "README.md"), md);
console.log(`Generated README.md (${md.length} bytes) from ${data.total} prompts.`);
