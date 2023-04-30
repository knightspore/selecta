import {NextResponse} from "next/server";

import { SpotifyClient } from "@/lib/spotify"

export async function GET() {
  const data = await SpotifyClient.Users.Current()
  return NextResponse.json({ data })
}
