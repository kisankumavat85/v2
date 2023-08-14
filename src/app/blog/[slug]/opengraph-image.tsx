import { ImageResponse } from "next/server";
import { getPostMeta } from "@/utils";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

const Image = async ({ params }: { params: { slug: string } }) => {
  const { title } = await getPostMeta(params.slug);
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background:
            "linear-gradient(190deg, rgba(50,189,191,1) 0%, rgba(63,54,212,1) 100%);",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {title}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
};

export default Image;
