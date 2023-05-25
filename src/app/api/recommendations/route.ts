import { SpotifyClient } from "@/lib/spotify";
import { addFeaturesToRecommendations, getSessionToken } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOpts } from "../auth/[...nextauth]/route";
import { Track } from "@/lib/spotify/types";
import { SavedSearch, saveSearch } from "@/lib/kv";
import { RecommendationsInput } from "@/lib/spotify/client/tracks";

export async function POST(req: NextRequest) {
  const session = (await getServerSession(authOpts)) as CustomSession;
  const token = getSessionToken(session);
  const { data }: { data: RecommendationsInput } = await req.json();

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

  const searchData: SavedSearch = {
    recommendationsInput: data,
    seedArtistsInput: data.seed_artists || [],
    seedTracksInput: data.seed_tracks || [],
  };
  const ok = await saveSearch(`${session?.user?.id}`, searchData);

  return NextResponse.json({
    tracks: tracksWithFeatures,
    seeds: recommendations.seeds,
    saved: ok,
  });
}
