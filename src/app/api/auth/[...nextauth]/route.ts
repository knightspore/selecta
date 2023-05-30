import { loadSearch } from "@/lib/kv";
import type { SavedSearch } from "@/lib/kv";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export interface CustomSession extends Session {
  user: {
    name?: string | null;
    id?: string | null;
    email?: string | null;
    image?: string | null;
  };
  searchData: SavedSearch;
}

export const authOpts: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: `${SPOTIFY_CLIENT_ID}`,
      clientSecret: `${SPOTIFY_CLIENT_SECRET}`,
      authorization: {
        params: {
          scope: [
            "playlist-modify-private",
            "playlist-modify-public",
            "user-read-email",
            "user-read-private",
          ].join(","),
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        token.accountID = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      const searchData = await loadSearch(token.accountID as string);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.accountID,
        },
        token: {
          refreshToken: token.refreshToken,
          accessToken: token.accessToken,
          expiresAt: token.expiresAt,
        },
        searchData: searchData,
      };
    },
  },
};

const handler = NextAuth(authOpts);

export { handler as GET, handler as POST };
