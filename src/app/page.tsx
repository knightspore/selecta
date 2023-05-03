"use client";

import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import RecommendedTracks from "@/components/recommendations/RecommendedTracks";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default async function Home() {
  return (
    <main>
      <RecommendationsContextProvider>
        <div className="p-4 grid grid-cols-3 gap-4">
          <section>
            <RecommendationsForm />
          </section>
          <section className="col-span-2 grid grid-cols-3 gap-4">
            <RecommendedTracks />
          </section>
        </div>
      </RecommendationsContextProvider>
    </main>
  );
}
