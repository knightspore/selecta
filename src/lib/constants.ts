import { RecommendationsInput } from "./spotify/client/tracks";
import { ArtistID, TrackID } from "./spotify/types";

export const defaultRecommendationsInput: RecommendationsInput = {
  limit: 24,
  min_tempo: 60,
  max_tempo: 220,
  target_popularity: 50,
  target_tempo: 140,
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

// Modularized Form

const recommendationsInputs = {
  // danceability: ["min", "target", "max"], //
  // instrumentalness: ["min", "target", "max"], //
  // popularity: ["min", "target", "max"], //
  // speechiness: ["min", "target", "max"], //
  // tempo: ["min", "target", "max"], //
  // valence: ["min", "target", "max"], //
  // energy: ["min", "target", "max"], //
  // to-do
  acousticness: ["min", "target", "max"],
  duration: ["min", "target", "max"],
  key: ["min", "target", "max"],
  liveness: ["min", "target", "max"],
  loudness: ["min", "target", "max"],
  mode: ["min", "target", "max"],
  time_signature: ["min", "target", "max"],
};
