// Auth

import {TrackAudioFeatures} from "./client/tracks";

export type TokenUrl = `https://accounts.spotify.com/api/token`;
export type BaseUrl = "https://api.spotify.com/v1";

export type GetSpotifyAuthKeyCredentials = {
  id: string;
  secret: string;
  token: string;
};

export type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};

// API Types

export type UserID = string;
export type PlaylistID = string;
export type TrackID = string;
export type ArtistID = string;
export type AlbumID = string;
export type DeviceID = string;
export type Genre = string;
export type Market = string;

export type Image = {
  height: number;
  url: string;
  width: number;
};

// Basics

export type User = {
  display_name: string;
  followers: {
    href: null | string;
    total: number;
  };
  href: string;
  id: UserID;
  images: Image[];
  type: string;
  uri: `spotify:user:${string}`;
};

export type Track = {
  name: string;
  id: TrackID;
  href: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: `spotify:track:${TrackID}`;
  duration_ms: number;
  artists: Artist[];
  album: Album;
  genres: Genre[];
  external_urls: {
    spotify: string;
  };
  features?: TrackAudioFeatures;
};

export type Album = {
  album_type: string;
  images: Image[];
  artists: Artist[];
  href: string;
  id: AlbumID;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: `spotify:album:${AlbumID}`;
  external_urls: {
    spotify: string;
  };
};

export type Artist = {
  href: string;
  id: ArtistID;
  name: string;
  type: string;
  uri: `spotify:artist:${ArtistID}`;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: Genre[];
  images: Image[];
  popularity: number;
};

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: PlaylistID;
  images: Image[];
  name: string;
  owner: User;
  public: boolean;
  snapshot_id: string;
  tracks: Pagination & {
    items: PlaylistTrack[];
  };
};

export type Pagination = {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
};

export type PlaylistTrack = {
  added_at: string;
  added_by: User | null;
  is_local: boolean;
  track: Track;
};

// Endpoints

export type UsersProfilePath = `/users/${string}`;
export type UsersTopPath = `/me/top/${"artists" | "tracks"}`;
export type UserSaveTracksPath = `/me/tracks`;

export type UsersEndpoint = `${BaseUrl}${
  | UsersTopPath
  | UsersProfilePath
  | UserSaveTracksPath}`;

export type PlayerPath = `/me/player`;
export type PlayerEndpoint = `${BaseUrl}${PlayerPath}`;

export type ArtistsPath = `/artists`;
export type ArtistsEndpoint = `${BaseUrl}${ArtistsPath}`;

export type TracksAudioFeaturesPath = `/audio-features`;
export type TracksRecommendationsPath = `/recommendations`;
export type TracksAvailableGenresPath =
  `/recommendations/available-genre-seeds`;
export type TracksEndpoint = `${BaseUrl}${
  | TracksAudioFeaturesPath
  | TracksRecommendationsPath
  | TracksAvailableGenresPath}`;

export type SearchEndpoint = `${BaseUrl}/search`;

export type Endpoint = `${
  | TokenUrl
  | BaseUrl
  | SearchEndpoint
  | UsersEndpoint
  | PlayerEndpoint
  | TracksEndpoint
  | ArtistsEndpoint}${string}`;
