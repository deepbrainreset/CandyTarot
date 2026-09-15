export const runtime = "edge";
export const dynamic = "force-dynamic";

type CloudflareRequest = Request & {
  cf?: {
    country?: string;
  };
};

function normalizeCountry(value: string | null | undefined) {
  const country = (value ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : "XX";
}

export async function GET(request: Request) {
  const cloudflareRequest = request as CloudflareRequest;
  const country = normalizeCountry(
    cloudflareRequest.cf?.country ??
      request.headers.get("CF-IPCountry") ??
      request.headers.get("X-Vercel-IP-Country") ??
      request.headers.get("CloudFront-Viewer-Country"),
  );

  return new Response(
    JSON.stringify({
      country,
      source: country === "XX" ? "fallback" : "edge",
    }),
    {
      headers: {
        "cache-control": "private, no-store",
        "content-type": "application/json; charset=utf-8",
        "x-content-type-options": "nosniff",
      },
    },
  );
}
