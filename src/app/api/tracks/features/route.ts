import { SpotifyClient } from "@/lib/spotify";
import { getSessionToken } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const token = getSessionToken(await getServerSession(authOpts));
  const { id } = await req.json();
  const features = await SpotifyClient.Tracks.AudioFeaturesSingle(
    token.accessToken,
    id
  );
  return NextResponse.json(features);
}
