import { SpotifyClient } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOpts } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOpts);
    const genres = await SpotifyClient.Tracks.Genres(
      // @ts-ignore
      session?.user["accessToken"]
    );
    return NextResponse.json(genres);
  } catch (e: any) {
    console.log("API Error: ", e);
    return NextResponse.error();
  }
}
