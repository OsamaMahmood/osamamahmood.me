# Design spec — osamamahmood.me

Approved 2026-08-06 after five mockup iterations (v5 final, Catppuccin default).

## Concept

The site is a beautifully rendered terminal session — full commitment to the
metaphor (in the spirit of charm.sh / Warp), tempered with editorial calm:
generous whitespace, hairline dividers, quiet typography. Explicitly distinct
from usamaarshad.me (light, serif, editorial).

## Visual language

- **Palette:** Catppuccin Mocha (bg `#14141f`, panel `#1e1e2e`, text `#cdd6f4`,
  accents: mauve/blue/sky/green/yellow/peach used semantically, like syntax
  highlighting). Single theme, no switcher.
- **Type:** Geist Mono (structure, labels, metadata), Inter (body copy).
  Self-hosted via Fontsource — no external font CDN, keeps the
  "no trackers, 100% static" claim honest and the CSP tight.
- **Chrome:** macOS-style terminal titlebar (sticky top), tmux status bar
  (fixed bottom) whose windows `0:whoami … 8:contact` are the navigation.

## Sections (each headed by a shell command + `[NN]` index)

1. `❯ whoami` — gradient ASCII "OSAMA" banner, letter-spaced MAHMOOD,
   blinking cursor, lede, icon buttons (GitHub/LinkedIn/email).
2. `❯ cat about.md` — large lede, two prose columns, hairline stat figures
   (2014 breaking-since · 15M+ users · 100+ pentests · 12 certs).
3. `❯ git log --career` — roles as commits: yellow hash, HEAD ref glowing dot,
   Tabby → GudangAda → GRC360 → Tranchulas → bug bounty hunter (initial commit,
   2014–2018, HackerOne/Bugcrowd/private).
4. `❯ tree ~/skills` — six domains as tree output.
5. `❯ ls ~/projects` — numbered editorial rows (dd-cli, lazytask,
   opensearch-snapshots, dd-reporting, dotfiles) + upstream contributions
   subsection (DefectDojo Wiz CLI parser, PR #10603, merged badge).
6. `❯ tail -f research.log` — [DISCLOSURE] RCE-class vulns (in progress),
   [BUGBOUNTY] 2014–2018 with program chips (Facebook, United Airlines, Sony,
   Microsoft, Apple, Dropbox, + dozens more), [HOMELAB].
7. `❯ ls ~/certs` — dot-leader ledger, all 12 certs, OSCP featured,
   `[verify]` links added when credential URLs are provided.
8. `❯ ls ~/writing` — empty-state blog placeholder.
9. `❯ ping osama` — big closing statement + mail link.

## Engineering

- Astro 5 static output; all content typed in `src/data/site.ts`.
- Zero client-side JS (cursor blink is CSS; reduced-motion respected).
- nginx:alpine behind Dokploy/Traefik; security headers + strict CSP;
  hashed assets cached immutable.
- Multi-stage Dockerfile (node:22-alpine → nginx:1.27-alpine).
- Repo: github.com/OsamaMahmood/osamamahmood.me (public).
- Deploy: Dokploy project `osamamahmood.me` on monkey-d-luffy;
  Cloudflare-proxied A record already points there.
