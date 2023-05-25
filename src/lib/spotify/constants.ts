import { AddToPlaylistInput, CreatePlaylistInput } from "./client/playlists";
import { RecommendationsInput, TKeys } from "./client/tracks";
import { Artist, ArtistID, Endpoint, PlaylistID, Track, TrackID, UserID } from "./types";

const TOKEN_URL: Endpoint = `https://accounts.spotify.com/api/token`;
const BASE_URL: Endpoint = `https://api.spotify.com/v1`;

export const URLS = {
  Token: TOKEN_URL,
  Base: BASE_URL,
  Artists: (input: ArtistID[]) => {
    const params = new URLSearchParams();
    params.append("ids", input.join(","));
    return `${BASE_URL}/artists?${params.toString()}` as Endpoint;
  },
  Users: {
    Current: `${BASE_URL}/me` as Endpoint,
    Profile: (id: UserID) => `${BASE_URL}/users/${id}` as Endpoint,
    Top: {
      Tracks: `${BASE_URL}/me/top/tracks` as Endpoint,
      Artists: `${BASE_URL}/me/top/artists` as Endpoint,
    },
  },
  Player: {
    GetState: `${BASE_URL}/me/player` as Endpoint,
  },
  Tracks: {
    Get: (input: TrackID[]) => {
      const params = new URLSearchParams();
      params.append("ids", input.join(","));
      return `${BASE_URL}/tracks?${params.toString()}` as Endpoint;
    },
    Genres: `${BASE_URL}/recommendations/available-genre-seeds` as Endpoint,
    AudioFeatures: `${BASE_URL}/audio-features` as Endpoint,
    Recommendations: (input: RecommendationsInput) => {
      const params = new URLSearchParams();
      const { seed_artists, seed_genres, seed_tracks, ...rest } = input;
      seed_artists && params.append("seed_artists", seed_artists.join(","));
      seed_genres && params.append("seed_genres", seed_genres.join(","));
      seed_tracks && params.append("seed_tracks", seed_tracks.join(","));
      Object.keys(rest).forEach((k: string) => {
        // @ts-ignore
        const param = rest[k];
        if (param) {
          params.append(k, param);
        }
      });
      return `${BASE_URL}/recommendations?${params.toString()}` as Endpoint;
    },
    Save: `${BASE_URL}/me/tracks` as Endpoint,
  },
  Playlists: {
    Get: (id: PlaylistID) => {
      return `${BASE_URL}/playlists/${id}` as Endpoint
    },
    GetAll: `${BASE_URL}/me/playlists` as Endpoint,
    Create: ({ id }: CreatePlaylistInput) => {
      return `${BASE_URL}/users/${id}/playlists` as Endpoint;
    },
    Add: ({ id }: AddToPlaylistInput) =>
      `${BASE_URL}/playlists/${id}/tracks` as Endpoint,
  },
  Search: {
    Artists: (input: Artist["name"]) => {
      const params = new URLSearchParams();
      params.append("q", input);
      params.append("type", "artist");
      params.append("limit", "3");
      return `${BASE_URL}/search?${params.toString()}` as Endpoint;
    },
    Tracks: (input: Track["name"]) => {
      const params = new URLSearchParams();
      params.append("q", input);
      params.append("type", "track");
      params.append("limit", "3");
      return `${BASE_URL}/search?${params.toString()}` as Endpoint;
    }
  },
};

export const Mode = {
  0: "minor",
  1: "major",
};

export const Keys: TKeys = {
  "-1": "-",
  "0": "C",
  "1": "C#",
  "2": "D",
  "3": "D#",
  "4": "E",
  "5": "F",
  "6": "F#",
  "7": "G",
  "8": "G#",
  "9": "A",
  "10": "A#",
  "11": "B",
};
