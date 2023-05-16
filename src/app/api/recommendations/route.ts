import { SpotifyClient } from "@/lib/spotify";
import { getSessionToken } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const token = getSessionToken(await getServerSession(authOpts));
  const { data } = await req.json();
  console.log(data)
  const recommendations = await SpotifyClient.Tracks.Recommendations(
    token.accessToken,
    data
  );
  console.log(recommendations)
  return NextResponse.json(recommendations);
}
