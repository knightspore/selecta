import { SpotifyClient } from "@/lib/spotify";
import {getSessionToken} from "@/lib/utils";
import {getServerSession} from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {authOpts} from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const token = getSessionToken((await getServerSession(authOpts)))
  const { data } = await req.json();
  const results = await SpotifyClient.Search.Artists(token.accessToken, data)
  return NextResponse.json(results);
}
