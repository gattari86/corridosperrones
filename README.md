# Corridos Personalizados - Landing Page

Mobile-first Spanish landing site for custom corridos delivered via WhatsApp.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Click "Deploy" (no extra config needed).

Or use the Vercel CLI:

```bash
npx vercel --prod
```

## How to Edit

### WhatsApp Link

All CTAs use a single WhatsApp link defined in:

```
src/app/lib/constants.ts
```

Edit the `WHATSAPP_URL` variable. The current link points to:

```
https://wa.me/18323199790?text=Hola%20quiero%20mi%20corrido%20personalizado
```

To change the phone number or prefilled message, update this URL.

### Audio Samples

Replace files in `public/audio/`. Update titles and descriptions in the
`AUDIO_SAMPLES` array in `src/app/lib/constants.ts`.

### Images

Replace files in `public/images/`. Keep the same filenames or update the
import paths in the corresponding component.

### FAQ

Edit the `FAQ_ITEMS` array in `src/app/lib/constants.ts`.

### Pricing

Pricing text appears in `src/app/components/WhatIncluded.tsx`. The $49 price
is referenced in the section heading and the FAQ answers in constants.ts.

## Asset Map

### Images (`public/images/`)

| File | Used In | Description |
|------|---------|-------------|
| `hero.jpg` | Hero section | Man with guitar, city sunset |
| `process.jpg` | How It Works | 5-step process infographic |
| `construction.jpg` | Audio Samples | Worker listening on job site |
| `gifting.jpg` | Section break | Man showing song to his wife |
| `listening-truck.jpg` | Section break | Man listening in truck |
| `phone-closeup.jpg` | (available) | Close-up of phone playing music |
| `porch.jpg` | Final CTA bg | Man on porch listening at night |
| `quote-jorge.jpg` | Quote Cards | Jorge R., Texas testimonial |
| `quote-son.jpg` | Quote Cards | Father-son moment |
| `quote-truck.jpg` | Quote Cards | Martin G., California |
| `quote-business.png` | Quote Cards | Ramiro P., Nuevo Leon |
| `testimonial-1.jpg` | Testimonials | WhatsApp screenshot (business) |
| `testimonial-2.jpg` | Testimonials | WhatsApp screenshot (repeat) |
| `testimonial-3.jpg` | Testimonials | WhatsApp screenshot (fast) |
| `testimonial-4.jpg` | Testimonials | WhatsApp screenshot (emotional) |
| `leather-texture.jpg` | (available) | Dark leather texture |

### Audio (`public/audio/`)

| File | Description |
|------|-------------|
| `el-corrido-de-don-manuel.mp3` | Life story corrido sample |
| `mi-reina-mi-vida.mp3` | Gift-for-wife corrido sample |
| `la-taqueria.mp3` | Business pride corrido sample |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Google Fonts (Oswald + Inter)
- Custom audio player (iOS Safari + Android compatible)

## Project Structure

```
src/app/
  layout.tsx          # Root layout, fonts, SEO metadata
  page.tsx            # Main page (assembles all sections)
  globals.css         # Theme colors, animations, audio styles
  lib/
    constants.ts      # WhatsApp URL, audio samples, FAQ, config
  components/
    Hero.tsx           # Hero section with CTA
    HowItWorks.tsx     # 5-step process
    AudioSamples.tsx   # Audio player cards
    AudioPlayer.tsx    # Custom audio player (client)
    WhatIncluded.tsx   # Pricing and inclusions
    QuoteCards.tsx     # Photo quote testimonials
    Testimonials.tsx   # WhatsApp screenshot gallery (client)
    FAQ.tsx            # Accordion FAQ (client)
    FinalCTA.tsx       # Closing CTA section
    Footer.tsx         # Simple footer
    StickyWhatsApp.tsx # Fixed bottom CTA bar (client)
    ScrollAnimator.tsx # Scroll-triggered animations (client)
    SectionImage.tsx   # Full-width section break images
```
