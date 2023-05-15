import { URLS } from "../constants";
import { ArtistID, Genre, Market, Seed, Track, TrackID } from "../types";
import { spotifyFetch } from "../utils";

export type Genres = {
  genres: Genre[];
};

const Genres = async (token: string) =>
  await spotifyFetch<Genres>(URLS.Tracks.Genres, token);

export type TrackAudioFeatures = {
  acousticness: number;
  analysis_url: string;
  danceability: number;
  duration_ms: number;
  energy: number;
  id: TrackID;
  instrumentalness: number;
  key: number;
  liveness: number;
  loudness: number;
  mode: number;
  speechiness: number;
  tempo: number;
  time_signature: number;
  track_href: string;
  type: string;
  uri: `spotify:track:${TrackID}`;
  valence: number;
};

const AudioFeaturesSingle = async (token: string, id: TrackID) =>
  await spotifyFetch<TrackAudioFeatures>(`${URLS.Tracks.AudioFeatures}/${id}`, token);

const AudioFeatures = async (token: string, ids: TrackID[]) =>
  await spotifyFetch<TrackAudioFeatures[]>(
    `${URLS.Tracks.AudioFeatures}?ids=${ids.join(",")}`,
    token
  );

export type RecommendationsInput = {
  limit?: number;
  market?: Market;
  seed_artists?: ArtistID[];
  seed_genres?: Genre[];
  seed_tracks?: TrackID[];
  min_acousticness?: number;
  max_acousticness?: number;
  target_acousticness?: number;
  min_danceability?: number;
  max_danceability?: number;
  target_danceability?: number;
  min_duration_ms?: number;
  max_duration_ms?: number;
  target_duration_ms?: number;
  min_energy?: number;
  max_energy?: number;
  target_energy?: number;
  min_instrumentalness?: number;
  max_instrumentalness?: number;
  target_instrumentalness?: number;
  min_key?: number;
  max_key?: number;
  target_key?: number;
  min_liveness?: number;
  max_liveness?: number;
  target_liveness?: number;
  min_loudness?: number;
  max_loudness?: number;
  target_loudness?: number;
  min_mode?: number;
  max_mode?: number;
  target_mode?: number;
  min_popularity?: number;
  max_popularity?: number;
  target_popularity?: number;
  min_speechiness?: number;
  max_speechiness?: number;
  target_speechiness?: number;
  min_tempo?: number;
  max_tempo?: number;
  target_tempo?: number;
  min_time_signature?: number;
  max_time_signature?: number;
  target_time_signature?: number;
  min_valence?: number;
  max_valence?: number;
  target_valence?: number;
};

export type Recommendations = {
  seeds: Seed[];
  tracks: Track[];
};

export type Seed = {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolsize: number;
  type: string;
};

const Recommendations = async (token: string, input: RecommendationsInput) =>
  await spotifyFetch<Recommendations>(
    `${URLS.Tracks.Recommendations(input)}`,
    token
  );

export const Tracks = {
  Genres,
  AudioFeaturesSingle,
  AudioFeatures,
  Recommendations,
};
