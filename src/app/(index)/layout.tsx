import AudioPlayerContextProvider from "@/provider/AudioPlayerProvider";
import RecommendationsContextProvider from "@/provider/RecommendationsProvider";

export default function IndexPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AudioPlayerContextProvider>
      <RecommendationsContextProvider>
        {children}
      </RecommendationsContextProvider>
    </AudioPlayerContextProvider>
  );
}
