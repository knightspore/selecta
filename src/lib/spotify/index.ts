import { PlayerState } from "./client/player";
import { SearchResponse } from "./client/search";
import {
  Genres,
  Recommendations,
  RecommendationsInput,
  TrackAudioFeatures,
} from "./client/tracks";
import {
  CurrentUsersProfile,
  UsersTopArtists,
  UsersTopTracks,
} from "./client/users";
import { Artists } from "./client/artists";
import { Users } from "./client/users";
import { Player } from "./client/player";
import { Tracks } from "./client/tracks";
import { Search } from "./client/search";
import { AccessToken, Artist, ArtistID, TrackID } from "./types";

type SpotifyAPICallParams<T, V> = (token: string, input: T) => Promise<V>;

type Client = {
  Artists: SpotifyAPICallParams<ArtistID[], Artists>;
  Users: {
    Current: SpotifyAPICallParams<
      AccessToken["access_token"],
      CurrentUsersProfile
    >;
    Top: {
      Tracks: SpotifyAPICallParams<AccessToken["access_token"], UsersTopTracks>;
      Artists: SpotifyAPICallParams<
        AccessToken["access_token"],
        UsersTopArtists
      >;
    };
  };
  Player: {
    GetState: SpotifyAPICallParams<AccessToken["access_token"], PlayerState>;
  };
  Tracks: {
    Genres: SpotifyAPICallParams<AccessToken["access_token"], Genres>;
    AudioFeaturesSingle: SpotifyAPICallParams<TrackID, TrackAudioFeatures>;
    AudioFeatures: SpotifyAPICallParams<TrackID[], TrackAudioFeatures[]>;
    Recommendations: SpotifyAPICallParams<
      RecommendationsInput,
      Recommendations
    >;
  };
  Search: {
    Artists: SpotifyAPICallParams<Artist["name"], SearchResponse>;
  };
};

export const SpotifyClient: Client = {
  Artists,
  Users,
  Player,
  Tracks,
  Search,
};
