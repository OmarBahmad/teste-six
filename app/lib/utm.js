export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export function pickUtm(searchParams) {
  if (!searchParams) {
    return {};
  }

  const utm = {};

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      utm[key] = value;
    }
  }

  return utm;
}

export function readUtmFromStorage() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem("utm");
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

export function storeUtm(utm) {
  if (typeof window === "undefined") {
    return;
  }

  if (!utm || !Object.keys(utm).length) {
    return;
  }

  try {
    sessionStorage.setItem("utm", JSON.stringify(utm));
  } catch {
    return;
  }
}

export function mergeUtm(primary, fallback) {
  const merged = { ...fallback, ...primary };
  const result = {};

  for (const key of UTM_KEYS) {
    const value = merged[key];
    if (value) {
      result[key] = value;
    }
  }

  return result;
}

export function buildUtmQuery(utm) {
  const params = new URLSearchParams();

  for (const key of UTM_KEYS) {
    const value = utm?.[key];
    if (value) {
      params.set(key, value);
    }
  }

  const query = params.toString();
  return query ? `?${query}` : "";
}
