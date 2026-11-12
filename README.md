# 근거와 실재

Source for a Korean-language notebook on grounded theory, realism and the methods and philosophy
of social science research, published at <https://sungmin-kwon.github.io/korean-notes/>.

It is one of a family of sites built from the same code. The siblings are
[notes from the 3-way distiller](https://github.com/sungmin-kwon/3-way-distillation) and
[working notes](https://github.com/sungmin-kwon/working-notes).
[`SHARED.md`](SHARED.md) lists which files are shared and how to keep them in sync.

It is a static [Astro](https://astro.build) site: Markdown in, plain HTML and CSS out.
The only client-side JavaScript is the find box on the index and the theme button.

## Writing a note

Notes are written in Korean. For voice, structure, accuracy rules and a self-check list, see
[`WRITING.md`](WRITING.md). For the Korean itself (register, standard translations of terms,
punctuation, citation format, common machine-translation slips), see the Korean style sheet
[`STYLE-KO.md`](STYLE-KO.md).

Every note is one Markdown file in `src/content/notes/`. The file name, in Latin letters, becomes
its URL (`src/content/notes/theoretical-sampling.md` → `/notes/theoretical-sampling/`).

The only required fields are `date` and `model` (left out for a note written by hand):

```md
---
date: 2026-11-12
---
두세 문장. 제목이 없는 글은 짧은 메모로, 목록에 전문이 그대로 보인다.
```

A longer note adds a title and, optionally, more:

```md
---
title: 이론적 표집
date: 2026-11-12
updated: 2026-11-20      # optional
tags: [근거이론]          # 근거이론, 실재론 or 음악교육; the list is in site.config.mjs
summary: 목록에서 제목 아래에 보이는 한 줄.
distillate: 글의 요지. 글 첫머리의 '요지' 상자에 보인다.
rough: true              # unfinished thinking; shows a "미완" mark
draft: true              # unfinished, not published at all
hidden: true             # finished but withheld from the site; see ADMIN.md
model: [Claude Opus 5.5] # model(s) that wrote or revised it; kept in the source, never shown on the site
reviewed_by: [Claude Opus 5.5] # optional: model(s) that did a separate review pass; never shown
---
```

- **Math:** `$inline$` and `$$display$$` (KaTeX), with `$$` on lines of their own.
- **Links between notes:** `[text](note:other-note-id)`.

## Commands

```sh
npm ci            # install
npm run dev       # local preview at http://localhost:4321/korean-notes/
npm run check     # the note linter (WRITING.md rules a script can test)
npm run build     # build to dist/ (also regenerates ADMIN.md)
```

Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/pages.yml`.
In the repository's Settings → Pages, the source must be set to **GitHub Actions**.

## Licenses

The code is under the MIT license (`LICENSE`). The writing in `src/content/notes/` is under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
