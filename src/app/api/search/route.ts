import { SpotifyClient } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";
import va from "@vercel/analytics"

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  va.track("Search", await req.json())
  const results = await SpotifyClient.Search.Artists(data)
  return NextResponse.json(results);
}
