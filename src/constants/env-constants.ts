export const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
  URL,
  NODE_ENV,
} = process.env;

export const BASE_URL =
  NODE_ENV === "development"
    ? URL
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
