const TOKEN_URL: Endpoint = `https://accounts.spotify.com/api/token`;
const BASE_URL: Endpoint = `https://api.spotify.com/v1`;

export const URLS = {
  Token: TOKEN_URL,
  Base: BASE_URL,
  Users: {
    Current: `${BASE_URL}/me` as Endpoint,
    Profile: (id: UserID) => `${BASE_URL}/users/${id}` as Endpoint,
    Top: {
      Tracks: `${BASE_URL}/me/top/tracks` as Endpoint,
      Artists: `${BASE_URL}/me/top/artists` as Endpoint,
    },
  },
  Player: {
    GetState: () => {
      const params = new URLSearchParams();
      params.append(
        "scope",
        [
          "user-read-private",
          "user-read-playback-state",
          "user-modify-playback-state",
          "user-read-currently-playing",
          "user-library-read",
          "user-library-modify",
        ].join(" ")
      );
      return `${BASE_URL}/me/player?${params.toString()}` as Endpoint;
    },
  },
  Tracks: {
    AudioFeatures: `${BASE_URL}/audio-features` as Endpoint,
    Recommendations: (input: RecommendationsInput) => {
      const params = new URLSearchParams();
      const { seed_artists, seed_genres, seed_tracks, ...rest } = input;

      seed_artists && params.append("seed_artists", seed_artists.join(","));
      seed_genres && params.append("seed_genres", seed_genres.join(","));
      seed_tracks && params.append("seed_tracks", seed_tracks.join(","));

      Object.keys(rest).forEach((k: string) => {
        const param = rest[k];
        if (param) {
          params.append(k, param);
        }
      });

      return `${BASE_URL}/recommendations?${params.toString()}` as Endpoint;
    },
  },
};
