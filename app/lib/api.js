const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

async function fetcher(path) {
  const res = await fetch(`${BASE_URL}/api${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error: ${res.status} on ${path}`);
  return res.json();
}

export async function getModules() {
  return fetcher("/modules");
}

export async function getTestimonials() {
  return fetcher("/testimonials");
}

export async function getMetrics() {
  return fetcher("/metrics");
}

export async function getCheckoutData() {
  return fetcher("/checkout");
}
