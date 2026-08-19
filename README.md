# PlusFit Landing Page — Documentation

## 1. Brand Overview

**Brand name:** PlusFit
**Tagline:** _"Peak Performance on Your Wrist"_
**Product:** A fitness/health wearable (smartwatch-style tracker) paired with a companion mobile app.

### Positioning

PlusFit is a fitness-tech brand aimed at **tech-forward fitness enthusiasts** who treat training as a data-driven discipline. The messaging leans on precision, performance, and self-optimization rather than casual wellness — the copy repeatedly emphasizes accuracy, intensity, and "peak performance."

### Brand mission

> "PlusFit is dedicated to pushing the boundaries of human potential through high-precision technology. Our mission is to empower every athlete with the data they need to achieve their peak performance."

### Core value propositions (from the "Precision Metrics" section)

- **Heart Rate Monitoring** — real-time BPM alerts and training-zone tracking
- **Sleep Analytics** — REM/deep sleep insights for recovery
- **Activity Tracking** — continuous step, calorie, and goal monitoring via "high-fidelity sensors"

### Brand philosophy ("Designed for the Driven" section)

Positions the product as a "co-pilot for your potential," stripping away noise to focus on accurate metrics, intuitive interfaces, and an aggressive design aesthetic. Two headline stats are used as social proof:

- **99%** Sensor Accuracy
- **14 days** Battery Life

### Pricing tiers

| Tier                 | Price         | Highlights                                                       |
| -------------------- | ------------- | ---------------------------------------------------------------- |
| Basic                | $149          | Heart rate monitor, basic sleep tracking, app premium            |
| Pro _(Most Popular)_ | $249          | Heart rate monitor, advanced sleep analytics, 1-year app premium |
| Elite                | (unspecified) | All Pro features, titanium casing, 3 exclusive bands             |

### Physical/retail presence

"Global Presence" section lists four flagship locations, all in Egypt (despite the copy calling it "worldwide"):

- Cairo
- Alexandria (Alex)
- Sharm El-Sheikh
- Giza

Each location card is clickable and opens an embedded **Google Maps modal** (`openMapModal()`) centered on that branch's real coordinates, letting visitors preview the location without leaving the page.

### Contact details

- **Phone:** 01003076053
- **Address (as listed):** 123 Performance Way, New York, NY 10001 _(inconsistent with the Egypt-based branch list above — worth flagging to the client)_
- **Email:** support@plusfit.tech

### Visual identity

| Token            | Value                 | Usage                                        |
| ---------------- | --------------------- | -------------------------------------------- |
| Primary          | `#69f8f1` (cyan/teal) | Accent color, CTAs, highlights, glow effects |
| Primary-100–400  | `#00201f` → `#006a67` | Dark teal backgrounds/borders                |
| Secondary        | `#1a1a1a`             | Card backgrounds                             |
| Secondary-100    | `#313030`             | Borders/dividers                             |
| Tertiary         | `#ffffff`             | Primary text on dark background              |
| Tertiary-800/900 | `#c8c6c5` / `#e2e2e2` | Muted/body text                              |
| Neutral          | `#000000`             | Page background                              |

**Typography:**

- **Headline font:** Montserrat (bold, wide, tech-forward feel — used for H1–H3, buttons, prices)
- **Body font:** Inter (used for paragraph copy)
- Josefin Sans and Roboto are also imported via Google Fonts but aren't referenced by the `--font-*` theme variables, so they appear to be unused/leftover imports.

**Visual style:** Dark-mode UI, glassy/glowing cyan accents, rounded cards, subtle scroll/fade-in animations, and hover-glow effects — consistent with a premium tech/wearables aesthetic.

---

## 2. Libraries & Technologies Used

| Library / Service                | Version                         | Purpose                                                                                                   | Loaded via                                                                       |
| -------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Tailwind CSS** (browser build) | v4                              | Utility-first CSS framework; also defines the custom `@theme` design tokens (colors, fonts, breakpoints)  | `cdn.jsdelivr.net/npm/@tailwindcss/browser@4`                                    |
| **EmailJS** (`@emailjs/browser`) | v3                              | Sends the contact form submission via email without a backend server (`emailjs.init`, `emailjs.sendForm`) | `cdn.jsdelivr.net/npm/@emailjs/browser@3`                                        |
| **Bootstrap Icons**              | 1.13.1                          | Icon set used throughout (feature icons, social icons, contact icons, form-submission notification icons) | `cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1`                                    |
| **Google Fonts**                 | —                               | Web font hosting for Montserrat, Inter, Josefin Sans, and Roboto                                          | `fonts.googleapis.com` / `fonts.gstatic.com` (with `preconnect` for performance) |
| **IntersectionObserver API**     | Native browser API (no library) | Powers the scroll-triggered fade-in animation on `.philosophy-section` elements                           | Native JavaScript                                                                |
| **Google Maps Embed**            | — (iframe embed, no SDK)        | Powers the location-preview modal on the "Global Presence" section                                        | `google.com/maps/embed` iframe URLs                                              |
