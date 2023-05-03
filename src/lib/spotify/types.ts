// Base URLs

type TokenUrl = `https://accounts.spotify.com/api/token`;
type BaseUrl = "https://api.spotify.com/v1";

type GetSpotifyAuthKeyCredentials = {
  id: string;
  secret: string;
  token: string;
};

type AccessToken = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};

// API Types

type UserID = string;
type TrackID = string;
type ArtistID = string;
type AlbumID = string;
type DeviceID = string;
type Genre = string;
type Market = string;

type Image = {
  height: number;
  url: string;
  width: number;
};

type CurrentUsersProfile = {
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

type Track = {
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

type Album = {
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

type Artist = {
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

type TrackAudioFeatures = {
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

type Device = {
  id: DeviceID;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
};

type PlayerContext = {
  type: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  uri: string;
};

type PlayerActions = {
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

type PlayerState = {
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

type Seed = {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolsize: number;
  type: string;
};

type Recommendations = {
  seeds: Seed[];
  tracks: Track[];
};

type Genres = {
  genres: Genre[];
};

type RecommendationsInput = {
  limit?: number;
  market?: Market;
  seed_artists?: [ArtistID?, ArtistID?, ArtistID?, ArtistID?, ArtistID?];
  seed_genres?: [Genre?, Genre?, Genre?, Genre?, Genre?];
  seed_tracks?: [TrackID?, TrackID?, TrackID?, TrackID?, TrackID?];
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

// Endpoints

type UsersProfilePath = `/users/${string}`;
type UsersTopPath = `/me/top/${"artists" | "tracks"}`;
type UsersTopTracks = { items: Track[] };
type UsersTopArtists = { items: Artist[] };
type UsersEndpoint = `${BaseUrl}${UsersTopPath | UsersProfilePath}`;

type PlayerPath = `/me/player`;
type PlayerEndpoint = `${BaseUrl}${PlayerPath}`;

type ArtistsPath = `/artists`;
type ArtistsEndpoint = ArtistsPath;

type TracksAudioFeaturesPath = `/audio-features`;
type TracksRecommendationsPath = `/recommendations`;
type TracksAvailableGenresPath = `/recommendations/available-genre-seeds`;
type TracksEndpoint = `${BaseUrl}${
  | TracksAudioFeaturesPath
  | TracksRecommendationsPath
  | TracksAvailableGenresPath}`;

type Endpoint = `${
  | TokenUrl
  | BaseUrl
  | UsersEndpoint
  | PlayerEndpoint
  | TracksEndpoint
  | ArtistsEndpoint}${string}`;

type SpotifyAPICall<T> = () => Promise<T>;
type SpotifyAPICallParams<T, V> = (input: V) => Promise<T>;

type SpotifyClient = {
  Artists: SpotifyAPICallParams<Artist[], ArtistID[]>;
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
    AudioFeaturesSingle: SpotifyAPICallParams<TrackAudioFeatures, TrackID>;
    AudioFeatures: SpotifyAPICallParams<TrackAudioFeatures[], TrackID[]>;
    Recommendations: SpotifyAPICallParams<
      Recommendations,
      RecommendationsInput
    >;
  };
};
