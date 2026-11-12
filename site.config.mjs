// Everything that makes this site differ from the others in the family is here, so the
// layout, pages, scripts and styles can be copied between the sites unchanged.
// See SHARED.md for which files are shared and which belong to one site.
// Plain JavaScript, so astro.config.mjs, the scripts and the TypeScript code can all read it.

export const SITE = {
  // Renamed from the working title 근거와 실재 on 2026-11-12, when the notes went beyond
  // grounded theory and realism (Sungmin's choice).
  title: '인문학 개론',
  description: '근거이론, 실재론, 음악교육을 비롯해 오래 붙들어 온 질문과 개념을 정리한 한국어 노트.',
  // GitHub Pages project site. For a custom domain, set url to it and base to '/'.
  url: 'https://sungmin-kwon.github.io/korean-notes/',
  base: '/korean-notes/',
  // Picks the interface text and date formats in src/lib/i18n.ts, and turns on the Korean
  // line breaking in site.css (word-break: keep-all).
  lang: 'ko',
  // Heading of the box that shows a long note's `distillate` field.
  distillateLabel: '요지',
  // Line on the 404 page.
  notFound: '없는 페이지이거나 다른 곳으로 옮겨진 페이지입니다.',
  // Notes per page on the index and the tag pages; older notes go on page/2/, page/3/ and so on.
  pageSize: 10,
  // Heading of the list of the other sites in FAMILY (header menu and footer line).
  familyLabel: '다른 노트 모음',
  // false: `npm run check` rejects "my lab", "our university" and the like in notes.
  allowAffiliation: false,
  // Old paths (without the base) that send readers elsewhere, e.g. notes that moved to a
  // sibling site: { '/notes/old-id': 'https://…/notes/old-id/' }.
  // The 방법론 tag (/tags/methodology/) was removed on 2026-11-12 with no notes left in it.
  redirects: {
    '/notes/grounded-theory-first-look': 'https://sungmin-kwon.github.io/korean-notes/notes/glaserian-emergence-vs-forcing/',
    '/tags/methodology': 'https://sungmin-kwon.github.io/korean-notes/',
  },
  // Single interface strings to override (see src/lib/i18n.ts); the Korean set is built in.
  ui: {},
  // Web fonts. IBM Plex Sans KR is the Korean member of the Plex family the other sites use,
  // so Latin text, numbers and the monospace metadata match theirs. Hangul inside monospace
  // labels (dates, '미완') falls back to Plex Sans KR rather than a system font.
  fonts: {
    stylesheet:
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+KR:wght@400;600&display=swap',
    sans: "'IBM Plex Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', system-ui, sans-serif",
    mono: "'IBM Plex Mono', 'IBM Plex Sans KR', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  },
  // Colors that override the shared ones in src/styles/site.css (any of --paper, --ink,
  // --ink-2, --muted, --rule, --code-bg, --accent). Leave both empty to keep the shared look.
  // Here: a faintly green 한지-like paper and a deep celadon green (청자), against the
  // distiller's warm paper and copper and working notes' cool grey and blue.
  palette: {
    light: {
      paper: '#f3f4ee',
      ink: '#181b17',
      'ink-2': '#3d433c',
      muted: '#555c53',
      rule: '#d0d5c9',
      'code-bg': '#e7eae1',
      accent: '#2e6a4f',
    },
    dark: {
      paper: '#131612',
      ink: '#e4e8e1',
      'ink-2': '#bfc6bb',
      muted: '#97a093',
      rule: '#30372f',
      'code-bg': '#1b201a',
      accent: '#7cc4a0',
    },
  },
};

/**
 * The tags, in display order. A note may only use these (the content schema and
 * `npm run check` both enforce it). Add a tag here before using it in a note.
 * `era` is optional; when present it is shown next to the tag (past, present, future).
 * `slug` is optional: the tag's URL, for a name that isn't in Latin letters.
 */
export const TAGS = [
  {
    name: '근거이론',
    slug: 'grounded-theory',
    blurb: '자료에서 이론을 세우는 질적 연구 방법과 그 갈래들.',
    description:
      '근거이론(grounded theory): 자료에서 이론을 세우는 질적 연구 방법. 코딩, 지속적 비교, 이론적 표집과 그 갈래들.',
  },
  {
    name: '실재론',
    slug: 'realism',
    blurb: '사회과학의 철학으로서 실재론, 특히 비판적 실재론.',
    description:
      '실재론(realism): 연구가 다루는 세계가 우리의 인식과 따로 존재한다는 입장. 특히 바스카의 비판적 실재론과 사회과학 방법론.',
  },
  {
    name: '음악교육',
    slug: 'music-education',
    blurb: '음악을 어떻게 가르치고 배우는가: 교수법과 그 바탕.',
    description: '음악교육: 코다이 교수법을 비롯한 음악 교수법과 그 바탕이 되는 생각.',
  },
];

/**
 * The sites in the family, listed in the header menu and footer of every page and on the About page.
 * `url` is the site's root. `lang` is the site's language, so that an entry is marked up in its
 * own language on a site whose language differs (the Korean site lists the English ones). Keep this list the same in every site.
 */
export const FAMILY = [
  {
    title: 'notes from the 3-way distiller',
    url: 'https://sungmin-kwon.github.io/3-way-distillation/',
    lang: 'en',
    blurb: 'a notebook on things that interest me: chemical engineering, language models and quantum computing.',
  },
  {
    title: 'working notes',
    url: 'https://sungmin-kwon.github.io/working-notes/',
    lang: 'en',
    blurb: 'study and research notes from graduate school in data science, mostly statistics and genetics.',
  },
  {
    title: '인문학 개론',
    url: 'https://sungmin-kwon.github.io/korean-notes/',
    lang: 'ko',
    blurb: '근거이론, 실재론, 음악교육 등을 정리한 노트, 한국어로.',
  },
];
