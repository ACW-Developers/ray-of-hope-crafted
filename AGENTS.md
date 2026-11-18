# Project Architecture

- Use `PageHero` for interior page introductions so imagery, spacing, typography, and accessibility stay consistent while page bodies remain distinct.
- Optimize imported images through vite-imagetools into high-quality WebP at their original dimensions, with lossless logo encoding, so served files are smaller without changing original assets or call sites.
- Keep donations in one validated Stripe Checkout edge function for guest one-time and monthly gifts; do not expose secrets or add a webhook unless payment reconciliation is requested.
