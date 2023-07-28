import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Selecta";
    const dmSans = fetch(
      new URL("../../../../assets/DMSans-Regular.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: title?.length ? 1400 / title?.length : 200,
            background: "#182938",
            color: "#fbc7cc",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'DM Sans'",
            textShadow: "0px 0px 10px rgba(251, 199, 204, .5)",
          }}
        >
          📀 {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: "twemoji",
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
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
