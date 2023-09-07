export const getArticleViews = async (slug: string) => {
  try {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.URL;
    const response = await fetch(`${url}/api/metrics?slug=${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
