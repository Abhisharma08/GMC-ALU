# Alu Empire Lead Funnel

Alu Empire Lead Funnel is a Next.js application for showcasing aluminium
skirting systems and capturing qualified purchase enquiries. The storefront is
presented like a compact ecommerce experience, but submissions are routed into
Google Sheets for offline follow-up, quotation, and fulfilment.

## What It Does

- Displays a curated Alu Empire product catalog from local data.
- Generates static product detail pages with Product JSON-LD.
- Captures customer details, product choice, and quantity through a checkout-style form.
- Sends enquiry records to Google Sheets through the server route at `app/api/enquiry/route.ts`.
- Includes company, contact, privacy, terms, and shipping/return pages for GMC-style compliance.

## Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- `lucide-react`
- `googleapis`

## Project Structure

```text
app/
  api/enquiry/route.ts            Server route that appends lead data to Google Sheets
  product/[id]/page.tsx           Product landing page with JSON-LD and lead form
  about-us/page.tsx               Company overview
  contact-us/page.tsx             Contact details
  privacy-policy/page.tsx         Privacy policy
  terms-of-service/page.tsx       Terms of service
  shipping-return-policy/page.tsx Canonical shipping and return policy
  thank-you/page.tsx              Post-submission confirmation page
  layout.tsx                      Shared layout with header and footer
  page.tsx                        Homepage and catalog
components/
  Header.tsx
  Footer.tsx
  LeadForm.tsx
  ProductGallery.tsx
lib/
  data.ts                         Product catalog and lookup helper
next.config.ts                    Remote image config and legacy redirects
```

## Environment Variables

Create `.env.local` in the project root with:

```env
GOOGLE_CLIENT_EMAIL="your-service-account@your-project-id.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="your_google_sheet_id_here"
```

The service-account email must be granted editor access to the target Google
Sheet.

## Expected Google Sheet Columns

The API appends values in this order:

1. `Timestamp`
2. `Name`
3. `Email`
4. `Phone`
5. `City`
6. `Product`
7. `Quantity`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routing Notes

- Canonical policy page: `/shipping-return-policy`
- Legacy policy aliases: `/shipping-policy` and `/return-policy`
- Legacy chair-template product URLs are redirected to the new Alu Empire slugs

## Deployment

This project is set up for Vercel-style deployment. Add the same environment
variables in the deployment provider before building.
