import {SpotifyClient} from "@/lib/spotify";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  const features = await SpotifyClient.Tracks.AudioFeaturesSingle(id)
  return NextResponse.json(features)
} 
