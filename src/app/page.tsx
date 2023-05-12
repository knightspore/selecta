import RecommendedTracks from "@/components/recommendations/RecommendedTracks";

export default async function Home() {
  return (
    <main className="flex p-4 md:overflow-y-scroll col-span-2 lg:col-span-4">
      <section>
        <div className="flex-1 pb-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          <RecommendedTracks />
        </div>
      </section>
    </main>
  );
}
