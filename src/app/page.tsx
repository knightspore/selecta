"use client";

import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import RecommendedTracks from "@/components/recommendations/RecommendedTracks";
import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default async function Home() {
  return (
    <main className="text-white bg-slate-500">
      <AudioPlayerContextProvider>
        <div className="min-h-screen bg-white text-slate-900 bg-slate-100">
          <RecommendationsContextProvider>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <section>
                <div className="flex flex-col mb-4 gap-1">
                  <h2 className="text-lg font-medium">
                    Recommendation Settings
                  </h2>
                  <p className="text-sm text-slate-500">
                    Tweak the options below to find the tracks you didn&apos;t
                    know you were looking for.
                  </p>
                </div>
                <RecommendationsForm />
              </section>
              <section className="mx-auto col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                <RecommendedTracks />
              </section>
            </div>
          </RecommendationsContextProvider>
        </div>
      </AudioPlayerContextProvider>
    </main>
  );
}
