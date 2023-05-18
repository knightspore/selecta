import {Artists} from "./spotify/client/artists";
import {SearchResponse} from "./spotify/client/search";
import {Genres, Recommendations, RecommendationsInput, TrackAudioFeatures, Tracks} from "./spotify/client/tracks";
import {Artist, ArtistID, Track, TrackID} from "./spotify/types";

export async function getRecommendations(
  recommendationsInput: RecommendationsInput
): Promise<Recommendations> {
  const response = await fetch("/api/recommendations", {
    method: "POST",
    body: JSON.stringify({
      data: {
        ...recommendationsInput,
      },
    }),
  });
  return await response.json();
}

export async function getTrack(ids: TrackID[]): Promise<Tracks> {
  const response = await fetch("/api/tracks", {
    method: "POST",
    body: JSON.stringify({ data: ids }),
  });
  return await response.json();
}

export async function getTrackFeatures(
  id: string
): Promise<TrackAudioFeatures> {
  const response = await fetch("/api/tracks/features", {
    method: "POST",
    body: JSON.stringify({ id: id }),
  });
  return await response.json();
}

export async function getGenres(): Promise<Genres> {
  const response = await fetch("/api/recommendations/genres");
  return await response.json();
}

export async function getArtists(ids: ArtistID[]): Promise<Artists> {
  const response = await fetch("/api/artists", {
    method: "POST",
    body: JSON.stringify({ data: ids }),
  });
  return await response.json();
}

export async function searchArtists(input: Artist["name"]): Promise<SearchResponse> {
  const response = await fetch("/api/search/artists", {
    method: "POST",
    body: JSON.stringify({ data: input }),
  });
  return await response.json();
}

export async function searchTracks(input: Track["name"]): Promise<SearchResponse> {
  const response = await fetch("/api/search/tracks", {
    method: "POST",
    body: JSON.stringify({ data: input }),
  });
  return await response.json();
}
