"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";
import Link from "next/link";

type User = {
  display_name: string;
  email: string;
  external_urls: {
    spotify: string;
  };
  followers:
    | {
        href: string;
        total: number;
      }
    | undefined;
  href: string;
  id: UserID;
  images: Image[];
  type: "user";
  uri: `spotify:user:${string}`;
};

export type AppContextType = {
  user: User | null;
  spotifyApi: SpotifyWebApi;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export function useAppContext() {
  const value = useContext(AppContext);
  if (value == null) {
    throw new Error("No AppContext Value");
  } else {
    return value as AppContextType;
  }
}

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/",
});

export default async function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] = useState<AppContextType["user"]>(null);
  const [code, setCode] = useState<string | null>(null);

  const currentCode = useSearchParams().get("code");
  setCode(currentCode);

  useEffect(() => {
    async function getAccessToken() {
      await spotifyApi
        .authorizationCodeGrant(code)
        .then(async (data) => {
          const { access_token } = data.body;
          return access_token
        })
    }
    if (!user && code) {
      const token =  await getAccessToken();
      spotifyApi.setAccessToken(token);
      const userData = spotifyApi.getMe();
      console.log(userData?.body);
    }
  }, [user, code]);

  const value = {
    user,
    spotifyApi,
  } as AppContextType;

  return (
    <AppContext.Provider value={value}>
      {user ? (
        children
      ) : (
        <div className="flex items-center justify-center w-screen h-screen text-center">
          <Link
            href={spotifyApi.createAuthorizeURL(["user-read-email"], "login")}
          >
            Login
          </Link>
        </div>
      )}
    </AppContext.Provider>
  );
}
