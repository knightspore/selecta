"use client";

import Player from "@/components/audioplayer/Player";
import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import RecommendedTracks from "@/components/recommendations/RecommendedTracks";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default async function Home() {
  return (
    <main className="relative w-screen h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-slate-900 bg-slate-100">
      <AudioPlayerContextProvider>
        <RecommendationsContextProvider>
          <section className="flex flex-col p-4 gap-1 col-span-1">
            <h2 className="text-lg font-medium">Recommendation Settings</h2>
            <p className="text-sm text-slate-500">
              Tweak the options below to find the tracks you didn&apos;t know
              you were looking for.
            </p>
            <hr className="m-2"/>
            <RecommendationsForm />
          </section>
          <section className="flex p-4 md:overflow-y-scroll col-span-2 lg:col-span-4">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              <RecommendedTracks />
            </div>
          </section>
        </RecommendationsContextProvider>
        <section className="fixed bottom-0 left-0 right-0 md:absolute">
          <Player />
        </section>
      </AudioPlayerContextProvider>
    </main>
  );
}
