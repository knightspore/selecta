import { SpotifyClient } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const artists = await SpotifyClient.Artists(data);
  return NextResponse.json(artists);
}
