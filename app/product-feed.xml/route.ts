import { PRODUCTS } from "@/lib/data";

export const dynamic = "force-static";

const SITE_URL = "https://www.aluempire.com";
const BRAND = "Alu Empire";
const PRODUCT_TYPE = "Aluminium skirting and LED profiles";

function escapeXml(value: string | number): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatPrice(price: number, currency: string): string {
  return `${price.toFixed(2)} ${currency}`;
}

function formatAvailability(availability: string): string {
  return availability.toLowerCase() === "in stock" ? "in stock" : "out of stock";
}

export async function GET() {
  const items = PRODUCTS.map((product) => {
    const productUrl = `${SITE_URL}/product/${product.id}`;
    const additionalImages = product.gallery
      .filter((imageUrl) => imageUrl !== product.imageUrl)
      .map(
        (imageUrl) =>
          `      <g:additional_image_link>${escapeXml(imageUrl)}</g:additional_image_link>`
      )
      .join("\n");

    return `    <item>
      <g:id>${escapeXml(product.sku)}</g:id>
      <g:title>${escapeXml(product.title)}</g:title>
      <g:description>${escapeXml(product.description)}</g:description>
      <g:link>${escapeXml(productUrl)}</g:link>
      <g:image_link>${escapeXml(product.imageUrl)}</g:image_link>
${additionalImages ? `${additionalImages}\n` : ""}      <g:availability>${escapeXml(formatAvailability(product.availability))}</g:availability>
      <g:price>${escapeXml(formatPrice(product.price, product.currency))}</g:price>
      <g:brand>${escapeXml(BRAND)}</g:brand>
      <g:condition>new</g:condition>
      <g:product_type>${escapeXml(PRODUCT_TYPE)}</g:product_type>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(BRAND)} Products</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml(
      "Premium aluminium skirting systems, LED profiles, and interior finishing solutions."
    )}</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
