import { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import Player from "@/components/audioplayer/Player";
import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import SeedArtistsForm from "@/components/recommendations/SeedArtistsForm";
import SeedArtists from "@/components/recommendations/SeedArtists";
import { Analytics } from "@vercel/analytics/react";
import AuthProvider from "@/provider/AuthProvider";
import SignInProvider from "@/provider/SignInProvider";
import LoggedInUser from "@/components/user/LoggedInUser";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Selecta",
  description:
    "Create a song Aura to find the tracks you didn't know you were looking for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`relative text-shell-700 bg-shell-100 ${dmsans.className}`}
      >
        <AuthProvider>
          <SignInProvider>
            <AudioPlayerContextProvider>
              <div
                id="layout"
                className="w-screen h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
              >
                <RecommendationsContextProvider>
                  <section className="flex flex-col p-4 pb-48 md:overflow-y-scroll gap-2 col-span-1">
                    <LoggedInUser />
                    <hr />
                    <h1>💽 Selecta</h1>
                    <p className="text-sm text-shell-500">
                      Create a song Aura to find the tracks you didn&apos;t know
                      you were looking for.
                    </p>
                    <hr />
                    <h2>Seed Artists</h2>
                    <SeedArtists />
                    <SeedArtistsForm />
                    <hr />
                    <RecommendationsForm />
                  </section>
                  {children}
                </RecommendationsContextProvider>
              </div>
              <section className="fixed bottom-0 left-0 right-0 md:absolute">
                <Player />
              </section>
            </AudioPlayerContextProvider>
          </SignInProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
