# lovecandothat.com

Personal site for Tracey Abbott. Executive coach, keynote speaker, former private equity Operating Partner, and a licensed psilocybin facilitator in Oregon. Next.js (App Router), deployed on Vercel. The design was hand-crafted and is **finished**.

## Positioning rules (read before changing any copy)

This is not a style preference. Getting it wrong creates real regulatory exposure against her Oregon license.

- **The public pages sell coaching, leadership development, and three day immersions. Nothing else.** `app/page.tsx` (home) and `app/immersion/page.tsx` must contain **zero** occurrences of: psilocybin, psychedelic, plant medicine, mushroom, "medicine" as a noun for the substance, Measure 109, InnerTrek, Oregon Health Authority, facilitator, service center, or her license. Verify after every copy change; every count must be 0:
  ```
  grep -oic 'psilocybin\|psychedelic\|plant medicine\|mushroom\|measure 109\|innertrek\|oregon health\|facilitator\|service center' app/page.tsx app/immersion/page.tsx app/components/*.tsx app/layout.tsx
  ```
- Everything about the licensed work lives on `app/private/page.tsx`, behind the password. That page is not linked from navigation, only from the quiet "Client materials" link in the home footer.
- **Immersion**, never **retreat**, as the product noun. The immersion page says so explicitly ("This is not a retreat…") and that paragraph stays.
- The immersion footer disclaimer states that no controlled substance is offered, arranged, provided or permitted at any immersion. **Do not remove or soften that sentence.**
- Never write a treatment claim, a cure claim, a diagnosis, or a promised outcome anywhere, including the private page.
- Immersions are for four people, never more. Keep the number consistent across pages.

## Voice rules

Her voice profile lives in the `ai-brain` skill. Short version: no em dashes, ever. No AI filler ("dive in", "unpack", "leverage", "game-changer", "journey" as a business noun). No rhetorical CTAs. Paragraphs, not bullet lists. Lead with the concrete and land on a strong truth. She is pulled out of the headline; her stories sit underneath as evidence. Approved lines used verbatim: "When we slow down to find and read the right current, everything else accelerates." / "Find the current. Power the current. Become the current." / "Hurt people hurt people. Healed people heal people." / "Follow the white rabbit." / "Turns out, love can do that. Love can do everything."

## Ground rules for edits

- This is a finished design. Make only the specific change requested. Never restructure, "modernize", or "clean up" the CSS, layout, or markup unless explicitly asked.
- Each page owns its stylesheet (`app/styles.ts`, `app/immersion/styles.ts`, `app/private/styles.ts`), rendered as an inline `<style>` tag. The home and private pages run earth tones, the immersion page runs the cool blue water palette. The private stylesheet builds on the home one and adds only the gate and callout rules. Never merge them into one shared stylesheet.
- Text and image changes happen directly in the page files. Images live in `public/images/`.
- After editing, summarize exactly what changed in plain language.
- `original/` holds the untouched static HTML the site was first ported from. It is the design reference for layout and CSS. Never edit or delete it.

## Structure

- `/` `app/page.tsx` — home. Coaching, the work, identity wheel, how it runs, groups, fit, inquiry form.
- `/immersion` `app/immersion/page.tsx` — the three day immersion. Premise, the water, Find / Power / Become, two settings, Gypsy's Jewel, the Pearl Dive, immersion inquiry form.
- `/private` `app/private/page.tsx` — password gated. Legal frame, the three-meeting arc, screening, evidence and citations, full disclaimer. `gate.ts` holds the cookie and hashing helpers, `actions.ts` the server action that checks the password and sets the cookie.
- `/roatan` → `/immersion` and `/reading` → `/private` are permanent redirects in `next.config.ts`.
- `app/layout.tsx` — fonts (Cormorant Garamond + Jost via next/font) and base metadata
- `app/components/SiteNav.tsx` — header menu (Home, Immersion). The private page is deliberately absent.
- `app/components/Reveal.tsx` — scroll-reveal animation (`.rv` elements)
- `app/components/InquiryForm.tsx` — inquiry form used on home and immersion; falls back to a mailto: link until a real Formspree id replaces the `YOUR_…` placeholder
- `app/components/IdentityWheel.tsx` — the nine-word interactive wheel on the home page
- `public/The-Pearl-Dive.pdf` — downloadable assessment linked from the immersion page

## The private page password

The gate compares against the `PRIVATE_PASSWORD` environment variable. Locally it comes from `.env.local` (gitignored). In production it must be set in the Vercel project settings, or the gate always fails closed. To change the password, change the variable and redeploy. It is a shared password: anyone she gives it to can pass it on. A private door, not a vault.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (run before pushing if the change touched more than text)
