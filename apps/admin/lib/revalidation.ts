import type { RevalidationRequest } from "@icar-gezina/contracts/revalidation";

const fallbackClientUrls: string[] = [
  process.env.CLIENT_REVALIDATION_URL,
  process.env.NEXT_PUBLIC_CLIENT_URL,
  process.env.ICARGEZINA_CLIENT_URL,
  "https://icargezina.co.za",
].filter((url): url is string => Boolean(url));

export async function triggerRevalidation(request: RevalidationRequest) {
  const secret = process.env.REVALIDATION_SECRET;
  if (!secret) return;

  const body = JSON.stringify(request);
  await Promise.allSettled(
    fallbackClientUrls.map((baseUrl) =>
      fetch(`${baseUrl}/api/revalidate`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${secret}`,
        },
        body,
        cache: "no-store",
      }),
    ),
  );
}
