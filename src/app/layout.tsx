import { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import Player from "@/components/audioplayer/Player";
import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import SeedArtistsForm from "@/components/recommendations/SeedArtistsForm";
import SeedArtists from "@/components/recommendations/SeedArtists";
import { Analytics } from "@vercel/analytics/react"

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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`relative w-screen h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-shell-700 bg-shell-100 ${dmsans.className}`}
      >
        <AudioPlayerContextProvider>
          <RecommendationsContextProvider>
            <section className="flex flex-col p-4 pb-48 md:overflow-y-scroll gap-2 col-span-1">
              <h1>💽 Selecta</h1>
              <p className="text-sm text-shell-500">
                Create a song Aura to find the tracks you didn&apos;t know you
                were looking for.
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
          <section className="fixed bottom-0 left-0 right-0 md:absolute">
            <Player />
          </section>
        </AudioPlayerContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
