# G.Ya. Umarov — Scientific Legacy Archive

A memorial website honoring the scientific legacy of **Academician Giyas Yakubovich Umarov (1921–1988)** — nuclear physicist, founder of heliotechnology in Uzbekistan, and pioneer of aquifer thermal energy storage (ATES).

**Live site:** [giyas-yakubovich-umarov.vercel.app](https://giyas-yakubovich-umarov.vercel.app)

---

## About G.Ya. Umarov

Giyas Yakubovich Umarov was a Soviet-Uzbek physicist whose career spanned five decades and bridged nuclear physics, solar energy, mechanical engineering, and agricultural science. Over his lifetime, he authored **4 monographs, 6 popular science books, over 250 scientific articles**, and received **31 patents**. He supervised **54 doctoral dissertations** and trained over **300 researchers**.

His 1971 paper on storing solar energy in underground aquifers was formally cited by the U.S. Department of Energy's Lawrence Berkeley National Laboratory as the **"starting point"** for the entire field of Aquifer Thermal Energy Storage. U.S. Professor David Albert of Drexel University assessed that Umarov's research was **50–60 years ahead of its time**.

## Features

- **Responsive design** — optimized for mobile, tablet, and desktop
- **Dark / Light mode** — toggleable theme with `localStorage` persistence
- **Three languages** — English, Russian (Русский), and Uzbek (O'zbek)
- **SEO optimized** — Open Graph tags, meta descriptions, `hreflang` alternates, semantic HTML
- **Interactive elements** — animated counters, scroll-reveal sections, particle animation, auto-hiding header
- **Print-ready family memorial** — self-contained HTML with `@media print` styles for PDF generation
- **Vercel Analytics** — built-in page view and Web Vitals tracking

## Project Structure

```
giyas-yakubovich-umarov/
├── index.html                  # Main landing page (English)
├── family-memorial.html        # Family memorial document (English, print-ready)
├── css/
│   └── style.css               # Global stylesheet (dark/light themes, responsive)
├── js/
│   └── main.js                 # Theme toggle, animations, mobile menu, counters
├── assets/
│   └── infographic-G-Ya-Umarov.jpg  # Visual timeline infographic
├── articles/                   # English article pages
│   ├── nuclear-physics.html
│   ├── heliotechnology.html
│   ├── aquifer-thermal-storage.html
│   ├── agricultural-solar.html
│   ├── stirling-engines.html
│   ├── scientific-legacy.html
│   └── publications.html
├── ru/                         # Russian translation
│   ├── index.html
│   ├── family-memorial.html
│   └── articles/
│       ├── nuclear-physics.html
│       ├── heliotechnology.html
│       ├── aquifer-thermal-storage.html
│       ├── agricultural-solar.html
│       ├── stirling-engines.html
│       ├── scientific-legacy.html
│       └── publications.html
└── uz/                         # Uzbek translation
    ├── index.html
    ├── family-memorial.html
    └── articles/
        ├── nuclear-physics.html
        ├── heliotechnology.html
        ├── aquifer-thermal-storage.html
        ├── agricultural-solar.html
        ├── stirling-engines.html
        ├── scientific-legacy.html
        └── publications.html
```

## Research Domains Covered

| Domain | Period | Key Contribution |
|--------|--------|-----------------|
| **Nuclear Physics** | 1949–1960s | Beta-spectroscopy at JINR Dubna, Landau debate on neutrino mass |
| **Heliotechnology** | 1954–1988 | Founded Uzbekistan's solar energy program, Large Solar Furnace, *Heliotechnika* journal |
| **Aquifer Thermal Storage** | 1971–1980s | First analytic ATES study, cited by LBL/DOE as "starting point" |
| **Solar Agriculture** | 1970s–1988 | PCSR seed treatment (8–15% cotton yield increase), validated by India |
| **Stirling Engines** | 1972–1978 | 8-paper series on solar-Stirling dynamic converters |

## Source Documents

This archive was compiled from primary and secondary sources including:

- Comprehensive biographical publication records
- U.S. DOE Lawrence Berkeley Laboratory workshop proceedings (LBL-8431, 1978)
- U.S. Military Technical Report ADA357675
- NASA Solar Energy Report (73151640)
- Zeldovich & Khlopov neutrino mass paper (1981)
- Gomkale & Zodape, *Journal of Scientific & Industrial Research* (1999)
- Asil'bekova et al., *Chemistry of Natural Compounds* (1980)

## Tech Stack

- **HTML5** — Semantic markup, no frameworks
- **CSS3** — Custom properties, Grid, Flexbox, `@media print`
- **Vanilla JavaScript** — Intersection Observer, `requestAnimationFrame`, `localStorage`
- **Google Fonts** — Inter (sans-serif), Playfair Display (serif)
- **Vercel** — Hosting and analytics

## Development

This is a static site with no build step. To run locally:

```bash
# Clone the repository
git clone https://github.com/sardoru/giyas-yakubovich-umarov.git
cd giyas-yakubovich-umarov

# Serve locally (any static server works)
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

The site is deployed on [Vercel](https://vercel.com) with automatic deployments from the `main` branch.

## License

This project is dedicated to preserving and sharing the scientific legacy of Academician G.Ya. Umarov. Content is provided for educational and memorial purposes.

---

*Built with care by the Umarov family.*
