# Portfolio

Vite, React, and TypeScript adaptation of [React Bits Pro's portfolio](https://github.com/DavidHDev/rbp-portfolio).

## Development

- `npm install`
- `npm run dev`
- `npm run build` compiles TypeScript and produces the static site in `dist`.
- `npm run lint`
- `npm run preview`
- `node --experimental-strip-types --test tests/submit-contact.test.mjs` checks the Formspree request with mocked responses (Node 22.6+).

## Project conventions

Every component and page lives in its own folder with `index.tsx` and `index.css`. The component imports its own stylesheet. Global typography, tokens, and shared utility classes live in `src/index.css`.

Use Zustand for shared UI state instead of passing it through component layers. The contact store synchronizes clipboard feedback across contact buttons. Local hover and disclosure state stays local; direct component configuration props are fine. React Router owns URL state.

## Included scope

Home, Projects, and About; a fixed light theme; animated navigation, portrait morph, card hover effects, smooth scrolling, copy-email controls, and expandable experience. A viewport-fixed blob background uses the original portfolio's colors and stays mounted across routes. No theme switching, contact shader background, About photo strip, or technology stack section.

Reduced-motion preferences disable smooth scrolling and the portrait morph, and freeze the blob background. The portrait has a normal image fallback if WebGL is unavailable; the background falls back to CSS gradients. Blob animation pauses while the tab is hidden.

## Personalization

- `src/data/profile.ts`: public contact details and full name.
- `src/components/Hero/index.tsx`: hero introduction and headline.
- `src/components/Biography/index.tsx`: biography.
- `src/data/about.ts`: experience, education, and skills.
- `src/data/projects.ts`: project cards and imagery.
- `public/josh.webp` and `public/josh_wave.webp`: matching portrait images.
- `index.html`: default title, description, and favicon.

All personal information and project claims currently belong to the demo. Replace before launch. The demo project cards are descriptive, with no project destination URLs provided by the reference source.

## Contact form

The contact card includes name, email, and message fields plus Email, LinkedIn, and Behance links. `src/components/ContactForm` owns local submission state without prop drilling. `src/lib/submitContact.ts` posts to `https://formspree.io/f/mgaelbjr` with an `Accept: application/json` header, following [Formspree's AJAX submission pattern](https://formspree.io/blog/server-side-validation/).

Required fields use native browser validation. The form prevents duplicate pending submissions, displays progress and confirmation, and retains inputs after failure for retry. It clears fields only after a successful response. Tests mock the endpoint; no test messages are sent to Formspree.

## Static hosting

React Router uses hash routing: `/#/`, `/#/projects`, and `/#/about`. Direct links and refreshes all load the root `index.html`, so GitHub Pages needs no route entry points or server rewrites. The build includes `.nojekyll`. Root-relative assets target a user site such as `kourianosz.github.io`.

The existing GitHub deployment workflow expects an `npm run deploy` script that the fresh starter does not provide. Publishing has not been configured or triggered as part of this local implementation.

## Source and assets

Adapted from DavidHDev/rbp-portfolio. Its README permits personal and commercial use and prohibits resale or redistribution of the template itself. The original portrait morph shader is retained with lifecycle and WebGL fallback adjustments.

Project mockups reference the original Dribbble CDN URLs, with credit belonging to their respective creators. Replace them with your own work before publishing. Company logos use Simple Icons with an initials fallback. Fonts are bundled locally with Fontsource.
