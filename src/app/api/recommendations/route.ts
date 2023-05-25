import { SpotifyClient } from "@/lib/spotify";
import { addFeaturesToRecommendations, getSessionToken } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOpts } from "../auth/[...nextauth]/route";
import { Track } from "@/lib/spotify/types";

export async function POST(req: NextRequest) {
  const token = getSessionToken(await getServerSession(authOpts));
  const { data } = await req.json();
  const recommendations = await SpotifyClient.Tracks.Recommendations(
    token.accessToken,
    data
  );
  const features = await SpotifyClient.Tracks.AudioFeatures(
    token.accessToken,
    recommendations.tracks.map((t: Track) => t.id)
  );
  const tracksWithFeatures = addFeaturesToRecommendations(
    recommendations,
    features
  );
  return NextResponse.json({
    tracks: tracksWithFeatures,
    seeds: recommendations.seeds,
  });
}
