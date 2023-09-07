import { URL } from "@/constants/env-constants";

export const getArticleViews = async (slug: string) => {
  try {
    const response = await fetch(`${URL}/api/metrics?slug=${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
