import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const dmSans = fetch(
  new URL("../../public/fonts/DMSans-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 200,
          background: "#182938",
          color: "#fbc7cc",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        📀 Selecta
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Sans",
          data: await dmSans,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
