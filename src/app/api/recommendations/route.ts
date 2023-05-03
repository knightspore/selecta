import {SpotifyClient} from "@/lib/spotify";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const recommendations = await SpotifyClient.Tracks.Recommendations(data)
  return NextResponse.json(recommendations);
}
