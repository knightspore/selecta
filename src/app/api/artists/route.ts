import { SpotifyClient } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../auth/[...nextauth]/route";
import {getSessionToken} from "@/lib/utils";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOpts)
  const token = getSessionToken(session)
  const { data } = await req.json();
  const artists = await SpotifyClient.Artists(token.accessToken, data);
  return NextResponse.json(artists);
}
