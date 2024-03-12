import {
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REFRESH_TOKEN,
} from "@/constants/env-constants";
import type { Artist, TopItemsOptions, Track } from "@/types/spotify";

const baseUrl = "https://api.spotify.com/v1";
const tokenUrl = "https://accounts.spotify.com/api/token";

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const getAccessToken = async () => {
  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basic}`,
      },
      body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Spotify access token");
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("error", error);
  }
};

export const getSpotifyTopItems = async (
  item: "tracks" | "artists",
  options: TopItemsOptions
): Promise<Track[] | Artist[]> => {
  try {
    const accessToken = await getAccessToken();
    const params = new URLSearchParams(
      options as unknown as Record<string, string>
    );

    const response = await fetch(`${baseUrl}/me/top/${item}?${params}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Spotify API");
    }

    const data = await response.json();
    return data.items as Track[] | Artist[];
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};

export const getCurrentlyPlayingTrack = async () => {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${baseUrl}/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch currently playing Track");
    }

    const data = await response.json();
    return data.item;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
};
