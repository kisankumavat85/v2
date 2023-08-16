import { ImageResponse } from "next/server";
import { postSlugMap } from "@/constants/post-constants";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Blog page thumbnail";
export const size = {
  width: 1200,
  height: 650,
};

const Image = async ({ params }: { params: { slug: string } }) => {
  const title = postSlugMap?.[params.slug] ?? "";
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to right, #000000, #434343)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          textAlign: "left",
          gap: "1rem",
          padding: "3rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", width: "80", height: "80" }}>
            <svg
              style={{ width: "100%", height: "100%" }}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="192.000000pt"
              height="192.000000pt"
              viewBox="0 0 192.000000 192.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,192.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path d="M115 1901 c-48 -22 -79 -54 -100 -103 -13 -33 -15 -138 -15 -840 0 -759 1 -805 19 -843 22 -48 54 -79 103 -100 33 -13 138 -15 840 -15 759 0 805 1 843 19 48 22 79 54 100 103 13 33 15 138 15 838 0 700 -2 805 -15 838 -21 49 -52 81 -100 103 -38 18 -83 19 -845 19 -762 0 -807 -1 -845 -19z m715 -381 l0 -70 -30 0 c-17 0 -39 -9 -50 -20 -19 -19 -20 -33 -20 -242 l1 -223 41 45 c98 106 298 320 352 377 l59 63 -51 0 -52 0 0 70 0 70 215 0 215 0 0 -74 0 -74 -67 -4 -67 -4 -178 -185 c-110 -113 -177 -190 -174 -200 2 -9 82 -135 179 -282 189 -286 199 -297 282 -297 l45 0 0 -70 0 -70 -225 0 -225 0 0 70 0 69 54 3 54 3 -139 210 c-77 116 -144 217 -149 225 -7 12 -25 -2 -89 -70 l-80 -85 -1 -122 c0 -110 2 -125 20 -143 12 -12 33 -20 55 -20 l35 0 0 -70 0 -70 -225 0 -225 0 0 70 0 70 43 0 c23 0 53 7 65 16 l22 15 0 459 0 459 -22 15 c-12 9 -39 16 -60 16 l-38 0 0 70 0 70 215 0 215 0 0 -70z" />
              </g>
            </svg>
          </div>
          <span style={{ fontSize: "40px", color: "#c2c2c2" }}>
            Kisan Kumavat
          </span>
        </div>
        <div>{title}</div>
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
