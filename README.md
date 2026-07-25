# Rhyam Tech Co

Corporate site for Rhyam Tech Co — a software company whose first shipped
product is **Inventory Manager Pro**. Built with Next.js (App Router) + React,
with a working contact backend (MongoDB + Resend email).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the build
```

## Structure

```
src/
  app/
    layout.js              # root layout: fonts, <Nav>, <Footer>, metadata
    page.js                # Home — company-first, IMP as Product 01
    products/page.js       # Products index, features Inventory Manager Pro
    company/page.js        # About Rhyam
    contact/page.js        # Contact + form
    api/contact/route.js   # POST endpoint: validate → save (Mongo) → email (Resend)
    globals.css            # tokens, resets, .cta/.ghost/.split helpers
  components/
    Nav.js                 # sticky nav, active-link state
    Footer.js
    StockLedger.js         # hero signature — animated live stock table
    ContactForm.js         # validated form, real fetch, honeypot, error state
  lib/
    theme.js               # color tokens (JS)
    hooks.js               # useCountUp, useInView
    mongodb.js             # cached MongoDB connection
```

## Contact backend

On submit the form POSTs to `/api/contact`, which:
1. Validates name / email / message (and drops bots via a honeypot field).
2. Saves the inquiry to MongoDB (`inquiries` collection).
3. Emails a notification via Resend.

It runs with **no config** — submissions just log to the console until you
add secrets. To go live, copy `.env.example` to `.env.local` and fill in:

- `MONGODB_URI` — free cluster at https://mongodb.com/atlas (Connect → Drivers).
- `RESEND_API_KEY` — from https://resend.com. Works immediately with the
  `onboarding@resend.dev` sender; set `CONTACT_TO` to your email. Once you
  verify a domain in Resend, change `CONTACT_FROM` to e.g. hello@rhyamtech.co.

Restart the dev server after editing env vars (they load at startup).

**Never commit `.env.local`** — it's gitignored. Keep real keys out of git.

## Deploy

Zero-config on [Vercel](https://vercel.com) — push the repo, import it, and add
the same env vars in the project's Settings → Environment Variables.
