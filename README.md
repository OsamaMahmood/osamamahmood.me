# osamamahmood.me

Personal portfolio of **Osama Mahmood** — Cyber Security Lead at Tabby, Dubai.

Live at [osamamahmood.me](https://osamamahmood.me).

## Design

A terminal-session aesthetic with editorial restraint: Catppuccin Mocha palette,
Geist Mono + Inter typography, tmux-style status-bar navigation, `git log --career`
experience timeline. 100% static, zero client-side JavaScript, self-hosted fonts,
no trackers.

## Stack

- [Astro](https://astro.build) static site — all content lives in `src/data/site.ts`
- nginx (alpine) serving the built `dist/`, hardened headers + CSP
- Multi-stage Dockerfile, deployed via [Dokploy](https://dokploy.com)

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

## Docker

```sh
docker build -t osamamahmood.me .
docker run -p 8080:80 osamamahmood.me
```

## Updating content

Everything on the page — roles, projects, certifications, research notes — is data
in `src/data/site.ts`. Edit, commit, redeploy.
