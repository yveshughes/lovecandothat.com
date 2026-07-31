# lovecandothat.com

Personal site for Tracey Abbott — licensed psilocybin facilitator. Next.js (App Router), deployed on Vercel. The design was hand-crafted and is **finished**.

## Ground rules for edits

- This is a finished design. Make only the specific change requested. Never restructure, "modernize", or "clean up" the CSS, layout, or markup unless explicitly asked.
- Each page owns its stylesheet (`app/styles.ts`, `app/roatan/styles.ts`, `app/reading/styles.ts`), rendered as an inline `<style>` tag. They intentionally reuse the same class names with different values — the Roatán page runs a cool blue palette, the others earth tones. Never merge them into a shared stylesheet.
- Text and image changes happen directly in the page files: `app/page.tsx` (home), `app/roatan/page.tsx`, `app/reading/page.tsx`. Images live in `public/images/`.
- After editing, summarize exactly what changed in plain language.
- `original/` holds the untouched static HTML the site was ported from. It is the design reference — never edit or delete it, and never let the ported pages drift from it except through requested changes.

## Structure

- `app/layout.tsx` — fonts (Cormorant Garamond + Jost via next/font) and base metadata
- `app/components/Reveal.tsx` — scroll-reveal animation (`.rv` elements)
- `app/components/InquiryForm.tsx` — inquiry form; falls back to a mailto: link until a real Formspree id replaces `YOUR_FORM_ID`
- `public/The-Pearl-Dive.pdf` — downloadable assessment linked from the Roatán page

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (run before pushing if the change touched more than text)
