# Sai Gayatri Caterers

Website for **Sai Gayatri Caterers**, pure-vegetarian Telugu Brahmin caterers in Almasguda, Hyderabad (since 1998).
Built with [Astro](https://astro.build) as a static, bilingual (English + Telugu) site, deployed on Vercel.

## Pages

| English | Telugu | What |
|---|---|---|
| `/` | `/te/` | Home: hero, trust bar, occasions, promise, services, signature menu, rites, areas, reviews, FAQ, WhatsApp enquiry |
| `/menu/` | `/te/menu/` | Full searchable menu; visitors can pick dishes and send the list on WhatsApp |
| `/occasions/` | `/te/occasions/` | All occasions, grouped |
| `/occasions/<slug>/` | `/te/occasions/<slug>/` | One page per occasion with a sample menu and pre-filled enquiry |
| `/ancestral-rites/` | `/te/ancestral-rites/` | Aabdhikam, Masikam, Taddinam… (sober design) |

## Editing content

All content lives in `src/data/` and `src/i18n/`. Every text has an `en` and a `te` version.

- `src/data/site.ts`: phone, WhatsApp, email, address, service areas
- `src/data/menu.ts`: menu categories and dishes (`featured: true` = signature Telugu section)
- `src/data/occasions.ts`, `rites.ts`, `faq.ts`: occasion pages, rites, FAQs
- `src/data/testimonials.ts`: paste real Google reviews here; the reviews section shows them automatically
- `src/i18n/ui.ts`: all interface text (buttons, headings) in both languages

## Still to add (from the owner)

- [ ] Real logo (replace `src/components/Logo.astro` and `public/favicon.svg`)
- [ ] Event, food and team photos (plus a gallery section)
- [ ] 3–6 real Google reviews in `testimonials.ts`
- [ ] Real milestones, such as events served and families served, for the trust bar
- [ ] Native Telugu proofread of all `te` text

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check
npm run build    # static output in dist/
```
