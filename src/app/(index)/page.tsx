import RecommendationsForm from "./RecommendationsForm";
import RecommendedTracks from "./RecommendedTracks";
import LoggedInUser from "./LoggedInUser";
import Player from "./Player";
import Header from "./Header";

export default async function Home() {
  return (
    <>
      <div
        id="layout"
        className="w-screen h-screen md:overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
      >
        <section
          id="sidebar"
          className="flex flex-col p-4 md:pb-32 md:overflow-y-scroll gap-2 col-span-1"
        >
          <LoggedInUser />
          <hr />
          <Header />
          <hr />
          <RecommendationsForm />
        </section>
        <section
          id="recommendations"
          className="flex p-4 md:overflow-y-scroll col-span-2 lg:col-span-4"
        >
          <div className="flex-1 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <RecommendedTracks />
            <div className="md:h-24" />
          </div>
        </section>
      </div>
      <section className="fixed bottom-0 left-0 right-0 md:absolute">
        <Player />
      </section>
    </>
  );
}
