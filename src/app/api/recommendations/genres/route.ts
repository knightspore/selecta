import { SpotifyClient } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOpts } from "../../auth/[...nextauth]/route";
import { getSessionToken } from "@/lib/utils";

export async function GET() {
  const token = getSessionToken(await getServerSession(authOpts));
  const genres = await SpotifyClient.Tracks.Genres(token.accessToken, "");
  return NextResponse.json(genres);
}
