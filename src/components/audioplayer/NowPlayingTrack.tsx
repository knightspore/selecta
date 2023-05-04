import { msToMinSec } from "@/lib/utils";
import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";

export default function NowPlayingTrack() {
  const { nowPlayingTrack } = useAudioPlayerContext();
  return (
    <p className="text-xs font-medium md:text-sm lg:text-base">
      {nowPlayingTrack ? (
        <>
          {`${nowPlayingTrack?.name} - ${
            nowPlayingTrack?.artists[0].name
          } (${msToMinSec(nowPlayingTrack?.duration_ms)})`}
        </>
      ) : (
        "💽 No Track Selected"
      )}
    </p>
  );
}
