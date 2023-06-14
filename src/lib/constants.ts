import { RecommendationsInput } from "./spotify/client/tracks";
import { ArtistID, TrackID } from "./spotify/types";

export const defaultRecommendationsInput: RecommendationsInput = {
  limit: 24,
  target_popularity: 50,
  min_tempo: 118,
  target_tempo: 140,
  max_tempo: 152,
  target_energy: 0.8,
  target_valence: 0.5,
  target_instrumentalness: 0.6,
  target_speechiness: 0.4,
  target_danceability: 0.8,
};

export const defaultSeedArtists: ArtistID[] = [
  "6RhLS4l1XlQMBME2Ox0t2D", // Parabyl
];

export const defaultSeedTracks: TrackID[] = [
  "492adAvsiH3llAwFNJs0uj", // Turning Into Mud
];
