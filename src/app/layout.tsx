import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import Player from "@/components/audioplayer/Player";
import RecommendationsForm from "@/components/recommendations/RecommendationsForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Great Recommender",
  description: "Get recommendations from Spotify.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative w-screen h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-slate-700 bg-slate-100 ${inter.className}`}
      >
        <AudioPlayerContextProvider>
          <RecommendationsContextProvider>
            <section className="flex flex-col p-4 pb-48 md:overflow-y-scroll gap-1 col-span-1">
              <h1>The Great Recommender</h1>
              <p className="text-sm text-slate-500">
                Tweak the options below to find the tracks you didn&apos;t know
                you were looking for.
              </p>
              <hr className="my-2" />
              <div>
                <RecommendationsForm />
              </div>
            </section>
            {children}
          </RecommendationsContextProvider>
          <section className="fixed bottom-0 left-0 right-0 md:absolute">
            <Player />
          </section>
        </AudioPlayerContextProvider>
      </body>
    </html>
  );
}
