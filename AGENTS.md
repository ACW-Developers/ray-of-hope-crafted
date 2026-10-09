# Project Architecture

- Use `PageHero` for interior page introductions so imagery, spacing, typography, and accessibility stay consistent while page bodies remain distinct.
- Optimize imported images through vite-imagetools into high-quality WebP at their original dimensions, with lossless logo encoding, so served files are smaller without changing original assets or call sites.