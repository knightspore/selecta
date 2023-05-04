import { SpotifyClient } from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const results = await SpotifyClient.Search.Artists(data)
  return NextResponse.json(results);
}
