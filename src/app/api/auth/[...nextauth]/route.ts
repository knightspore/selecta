import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

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
            "playlist-read-private",
            "user-library-modify",
            "user-library-read",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-state",
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
      return {
        ...session,
        user: {
          ...session.user,
          id: token.accountID
        },
        token: {
          refreshToken: token.refreshToken,
          accessToken: token.accessToken,
          expiresAt: token.expiresAt,
        },
      };
    },
  },
};

const handler = NextAuth(authOpts);

export { handler as GET, handler as POST };
