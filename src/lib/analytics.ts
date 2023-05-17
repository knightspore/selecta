import { RecommendationsInput } from "./spotify/client/tracks";
import { ArtistID, TrackID } from "./spotify/types";
import va from "@vercel/analytics";

export function trackRecommendations(
  input: RecommendationsInput,
  seedArtists: ArtistID[],
  seedTracks: TrackID[]
) {
  va.track("Get Recommendations", {
    input: JSON.stringify({
      ...input,
      seed_artists: seedArtists,
      seed_tracks: seedTracks,
    }),
  });
}

export function trackFindArtist(name: string, query: string) {
  va.track("Find Artist", {
    name,
    query,
  });
}
