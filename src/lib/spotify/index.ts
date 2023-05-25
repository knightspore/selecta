import { PlayerState } from "./client/player";
import { SearchResponse } from "./client/search";
import {
  Genres,
  Recommendations,
  RecommendationsInput,
  TrackAudioFeatureList,
  TrackAudioFeatures,
} from "./client/tracks";
import {
  UsersTopArtists,
  UsersTopTracks,
} from "./client/users";
import { Artists } from "./client/artists";
import { Users } from "./client/users";
import { Player } from "./client/player";
import { Tracks } from "./client/tracks";
import { AddToPlaylistInput, AddToPlaylistResponse, CreatePlaylistInput, GetUserPlaylists, Playlists } from "./client/playlists";
import { Search } from "./client/search";
import { AccessToken, Artist, ArtistID, Playlist, PlaylistID, Track, TrackID, User } from "./types";

type SpotifyAPICallParams<T, V> = (token: string, input: T) => Promise<V>;

type Client = {
  Artists: SpotifyAPICallParams<ArtistID[], Artists>;
  Users: {
    Current: SpotifyAPICallParams<
      AccessToken["access_token"],
      User
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
    Get: SpotifyAPICallParams<TrackID[], Tracks>
    Genres: SpotifyAPICallParams<AccessToken["access_token"], Genres>;
    AudioFeaturesSingle: SpotifyAPICallParams<TrackID, TrackAudioFeatures>;
    AudioFeatures: SpotifyAPICallParams<TrackID[], TrackAudioFeatureList>;
    Recommendations: SpotifyAPICallParams<
      RecommendationsInput,
      Recommendations
    >;
    Save: SpotifyAPICallParams<TrackID[], any>
  };
  Playlists: {
    Get: SpotifyAPICallParams<PlaylistID, Playlist>
    GetAll: SpotifyAPICallParams<AccessToken["access_token"], GetUserPlaylists>,
    Create: SpotifyAPICallParams<CreatePlaylistInput, Playlist>
    Add: SpotifyAPICallParams<AddToPlaylistInput, AddToPlaylistResponse>,
  },
  Search: {
    Artists: SpotifyAPICallParams<Artist["name"], SearchResponse>;
    Tracks: SpotifyAPICallParams<Track["name"], SearchResponse>;
  };
};

export const SpotifyClient: Client = {
  Artists,
  Users,
  Player,
  Tracks,
  Playlists,
  Search,
};
