"use server";

import { URL } from "@/constants/env-constants";

export const incrementArticleView = async (slug: string) => {
  try {
    const response = await fetch(`${URL}/api/metrics?slug=${slug}`, {
      method: "POST",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Could not increment views!");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
