// Central place for the site's public URL. Reads from the NEXT_PUBLIC_SITE_URL
// environment variable when set (e.g. after adding a custom domain in Vercel),
// and falls back to the current unicotravel.vercel.app address otherwise.
// This means switching domains later only requires adding/updating that
// environment variable in Vercel, no code changes needed.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://unicotravel.vercel.app";
