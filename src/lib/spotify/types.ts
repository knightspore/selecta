// Base URLs

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

export type CurrentUsersProfile = {
  display_name: string;
  followers: {
    href: null | string;
    total: number;
  };
  href: `${BaseUrl}/users/${string}`;
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

export type Artists = {
  artists: Artist[];
};

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

export const Mode = {
  0: "minor",
  1: "major"
}

export const Keys = {
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
}

export type Device = {
  id: DeviceID;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
};

export type PlayerContext = {
  type: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  uri: string;
};

export type PlayerActions = {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: boolean;
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
};

export type PlayerState = {
  device: Device;
  repeat_state: string;
  shuffle_state: false;
  context: PlayerContext;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Track;
  currently_playing_type: string;
  actions: PlayerActions;
};

export type Seed = {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolsize: number;
  type: string;
};

export type Recommendations = {
  seeds: Seed[];
  tracks: Track[];
};

export type Genres = {
  genres: Genre[];
};

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

export type SearchInput = {
  q: string;
  type:
    | "album"
    | "artist"
    | "playlist"
    | "track"
    | "show"
    | "episode"
    | "audiobook";
  market?: string;
  limit: number;
  offset?: number;
  include_external?: "audio";
};

export type SearchResponse = {
  tracks: SearchTypeResponse<Track>;
  artists: SearchTypeResponse<Artist>;
  albums: SearchTypeResponse<Album>[];
};

export type SearchTypeResponse<T> ={
  href: string,
  limit: number,
  next: string,
  offset: number,
  previous: string
  total: number,
  items: T[],
}

// Endpoints

export type UsersProfilePath = `/users/${string}`;
export type UsersTopPath = `/me/top/${"artists" | "tracks"}`;
export type UsersTopTracks = { items: Track[] };
export type UsersTopArtists = { items: Artist[] };
export type UsersEndpoint = `${BaseUrl}${UsersTopPath | UsersProfilePath}`;

export type PlayerPath = `/me/player`;
export type PlayerEndpoint = `${BaseUrl}${PlayerPath}`;

export type ArtistsPath = `/artists`;
export type ArtistsEndpoint = `${BaseUrl}${ArtistsPath}`;

export type TracksAudioFeaturesPath = `/audio-features`;
export type TracksRecommendationsPath = `/recommendations`;
export type TracksAvailableGenresPath = `/recommendations/available-genre-seeds`;
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

export type SpotifyAPICall<T> = () => Promise<T>;
export type SpotifyAPICallParams<T, V> = (input: T) => Promise<V>;

export type SpotifyClient = {
  Artists: SpotifyAPICallParams<ArtistID[], Artists>;
  Users: {
    Current: SpotifyAPICall<CurrentUsersProfile>;
    Top: {
      Tracks: SpotifyAPICall<UsersTopTracks>;
      Artists: SpotifyAPICall<UsersTopArtists>;
    };
  };
  Player: {
    GetState: SpotifyAPICall<PlayerState>;
  };
  Tracks: {
    Genres: SpotifyAPICall<Genres>;
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
