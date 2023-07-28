import { URLS } from "./constants";
import { AccessToken, Endpoint } from "./types";

export async function spotifyFetch<T>(
  endpoint: Endpoint,
  token?: string,
  method: string = "GET",
  body?: any
): Promise<T> {
  if (!token) {
    token = (await getAccessToken()).access_token;
  }

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (method == "POST" && body) {
    Object.assign(options, { body: JSON.stringify(body) });
  }

  console.log("fetching: ", endpoint);

  const data = await fetch(endpoint, options).then((res) => res.json());

  return data;
}

export async function getAccessToken(
  id?: string,
  client?: string,
  refresh?: string
): Promise<AccessToken> {
  if (!id) {
    id = process.env.SPOTIFY_CLIENT_ID;
  }
  if (!client) {
    client = process.env.SPOTIFY_CLIENT_SECRET;
  }
  if (!refresh) {
    refresh = process.env.SPOTIFY_REFRESH_TOKEN;
  }

  if (!id || !client || !refresh) {
    throw new Error(
      `You are missing a Spotify ENV Variable: [ id: ${id}, client: ${client}, refresh: ${refresh} ]`
    );
  }

  const basic = Buffer.from(`${id}:${client}`).toString("base64");

  const getTokenResponse = await fetch(URLS.Token, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh,
    }),
  });

  return getTokenResponse.json();
}
