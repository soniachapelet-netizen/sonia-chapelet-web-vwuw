/**
 * Base URL for canonical and Open Graph (no trailing slash).
 * Set VITE_SITE_URL in production (e.g. https://www.tudominio.com).
 * Falls back to window.location.origin in the browser when unset.
 */
export function getSiteBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}
