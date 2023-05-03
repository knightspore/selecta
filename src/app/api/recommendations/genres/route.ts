import {SpotifyClient} from "@/lib/spotify";
import {NextResponse} from "next/server";

export async function GET() {
  const genres = await SpotifyClient.Tracks.Genres()
  return NextResponse.json(genres)
}
