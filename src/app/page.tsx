"use client"

import RecommendationsForm from "@/components/recommendations/RecommendationsForm";
import RecommendedTracks from "@/components/recommendations/RecommendedTracks";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default async function Home() {
  return (
    <main>
      <RecommendationsContextProvider>
      <RecommendationsForm />
      <RecommendedTracks />
      </RecommendationsContextProvider>
    </main>
  );
}
