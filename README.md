# lovecandothat.com

Tracey Abbott's site. Next.js on Vercel. Three pages: the home page (coaching and the work), `/immersion` (the three day immersion on Roatán or in the Hudson Valley), and `/private`, a password-gated page for people already in conversation with her.

The private page reads its password from the `PRIVATE_PASSWORD` environment variable. Set it in `.env.local` for local work and in the Vercel project settings for production. Without it the gate stays closed.

See `CLAUDE.md` for the positioning rules that govern every copy change.
