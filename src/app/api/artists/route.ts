import { SpotifyClient } from "@/lib/spotify";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../auth/[...nextauth]/route";
import {getSessionToken} from "@/lib/utils";

export async function POST(req: NextRequest) {
  const token = getSessionToken((await getServerSession(authOpts)))
  const { data } = await req.json();
  const artists = await SpotifyClient.Artists(token.accessToken, data);
  return NextResponse.json(artists);
}
