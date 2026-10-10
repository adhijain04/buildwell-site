# Buildwell Labs — website

Astro static site. Builds to plain HTML with the CSS inlined and no JavaScript.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Node 20.3+ (Astro 5). Netlify builds every push to `main` (`netlify.toml`) and serves https://buildwelllabs.com.

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | The page: the list of sections, in order |
| `src/layouts/Base.astro` | `<head>` (meta, Open Graph), header, footer |
| `src/components/*.astro` | One file per section: Hero, Who, Packages, Proof, Guarantee, Limits, Book |
| `src/styles/global.css` | All styles and the light/dark colour tokens |
| `public/` | `favicon.svg`, `og.png` (link-preview image) |

## Notes

- The booking CTA is a deliberate pre-filled `mailto:` (founder decision, BUI-3, 2026-10-04). Search `BOOKING_LINK` in `src/components/Book.astro` to swap in a calendar link.
- Prices are the India sheet in INR, exclusive of GST, in `src/components/Packages.astro` (the summary row and each package).
