import { URLS } from "./constants";
import { spotifyFetch } from "./utils";
import type {
  SpotifyClient as Client,
  Artist,
  ArtistID,
  TrackID,
  RecommendationsInput,
} from "./types";

export const SpotifyClient: Client = {
  Artists: async (ids: ArtistID[]) => await spotifyFetch(URLS.Artists(ids)),
  Users: {
    Current: async () => await spotifyFetch(URLS.Users.Current),
    Top: {
      Artists: async () => await spotifyFetch(URLS.Users.Top.Artists),
      Tracks: async () => await spotifyFetch(URLS.Users.Top.Tracks),
    },
  },
  Player: {
    GetState: async () => await spotifyFetch(URLS.Player.GetState()),
  },
  Tracks: {
    Genres: async () => await spotifyFetch(URLS.Tracks.Genres),
    AudioFeaturesSingle: async (id: TrackID) =>
      await spotifyFetch(`${URLS.Tracks.AudioFeatures}/${id}`),
    AudioFeatures: async (ids: TrackID[]) =>
      await spotifyFetch(`${URLS.Tracks.AudioFeatures}?ids=${ids.join(",")}`),
    Recommendations: async (input: RecommendationsInput) =>
      await spotifyFetch(`${URLS.Tracks.Recommendations(input)}`),
  },
  Search: {
    Artists: async (input: Artist["name"]) =>
      await spotifyFetch(URLS.Search.Artists(input)),
  },
};
