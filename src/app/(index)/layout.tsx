import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";
import SelectionsContextProvider from "@/provider/SelectionsProvider";

export default function IndexPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AudioPlayerContextProvider>
      <RecommendationsContextProvider>
        <SelectionsContextProvider>{children}</SelectionsContextProvider>
      </RecommendationsContextProvider>
    </AudioPlayerContextProvider>
  );
}
